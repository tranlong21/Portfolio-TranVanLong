import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import useScreenSize from '../hooks/useScreenSize'; 

const Model = () => {
  const gltf = useLoader(GLTFLoader, `${import.meta.env.BASE_URL}models/hello_world_.glb`);
  const modelRef = useRef();
  const screenSize = useScreenSize();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  // Xác định scale theo kích thước màn hình
  let scale = 0.01; // desktop mặc định
  if (screenSize < 640) {
    scale = 0.005; // mobile: 1/2
  } else if (screenSize < 1024) {
    scale = 0.0075; // tablet: 3/4
  }

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[scale, scale, scale]}
      position={[0, 1.3, 0]}
    />
  );
};

const HelloWorldcanvas = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <Canvas
        camera={{ position: [4, 1, 2], fov: 35 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight intensity={1.2} position={[5, 10, 5]} />
        <OrbitControls target={[0, 1.3, 0]} enablePan={false} enableZoom={false} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HelloWorldcanvas;
