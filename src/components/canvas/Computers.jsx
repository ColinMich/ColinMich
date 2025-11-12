import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const scene = computer.scene; // Use scene for dependency tracking

  useEffect(() => {
    let hasCleaned = false;
    
    scene.traverse((child) => {
      // Check for Mesh, Geometry, and the Position attribute
      if (child.isMesh && child.geometry && child.geometry.attributes.position) {
        const positionAttribute = child.geometry.attributes.position;
        const array = positionAttribute.array;
        let requiresUpdate = false;
        
        // 1. Check and clean NaN values
        for (let i = 0; i < array.length; i++) {
          if (isNaN(array[i])) {
            array[i] = 0; // Replace NaN with 0
            requiresUpdate = true;
            hasCleaned = true;
          }
        }
        
        // 2. If cleanup was needed, update and re-compute
        if (requiresUpdate) {
          console.warn(`[Cleanup] Fixed NaN values in position attribute for mesh: ${child.name || 'Unnamed Mesh'}.`);
          
          // Must inform THREE.js that the data has changed
          positionAttribute.needsUpdate = true; 
          
          // Re-compute the bounding info which was failing
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere(); // This should now succeed
        }
      }
    });
    scene.updateWorldMatrix(true, true);
scene.traverse(obj => {
  if (obj.isMesh && obj.geometry) {
    obj.geometry.computeBoundingBox();
    obj.geometry.computeBoundingSphere();
  }
});

    if (hasCleaned) {
        console.log("SUCCESS: NaN cleanup complete for the model.");
    }
    
  }, [scene]); // Run once after the scene object is loaded

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 1.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
