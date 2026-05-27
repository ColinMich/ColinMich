import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/pc_desk/scene.glb"); 

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={false}
        shadow-mapSize={512}
      />
      <pointLight intensity={8} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.025 : 0.045}
        position={isMobile ? [0, -2.5, -0.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, 0.5, -0.001]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // If not mounted or we detect low-performance device, show fallback
  if (!mounted || (typeof window !== 'undefined' && 
      (isMobile && !window.matchMedia("(min-resolution: 2dppx)").matches))) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <img
          src="/pc-preview.webp"
          alt="Portfolio preview"
          className="max-w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      shadows={false}
      dpr={Math.min(window.devicePixelRatio, 1.5)} // Limit DPR on mobile
      camera={{ 
        position: isMobile ? [15, 2, 3] : [20, 3, 5], 
        fov: isMobile ? 30 : 25 
      }}
      gl={{ 
        preserveDrawingBuffer: true, 
        antialias: !isMobile, // Disable antialiasing on mobile for performance
        powerPreference: isMobile ? "default" : "high-performance",
        precision: isMobile ? "mediump" : "lowp"
      }}
      style={{ 
        touchAction: 'none' // Prevent browser gestures from interfering
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={!isMobile} // Disable pan on mobile for better UX
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;