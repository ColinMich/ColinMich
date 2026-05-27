import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if mobile
    const checkMobile = () => {
      return window.matchMedia("(max-width: 768px)").matches;
    };
    
    setIsMobile(checkMobile());
    
    // Add listener for window resize
    const handleResize = () => {
      setIsMobile(checkMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fallback for mobile or unmounted
  if (!mounted || isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg flex items-center justify-center">
          <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img 
              src={icon} 
              alt="Tech icon" 
              className="w-3/4 h-3/4 object-contain p-1"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={Math.min(window.devicePixelRatio, 1.5)}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: "high-performance",
        alpha: true
      }}
      style={{
        width: '100%',
        height: '100%',
        touchAction: 'none'
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={4}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;