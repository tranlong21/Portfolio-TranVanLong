import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/models/MaleGym.glb');
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.02;
        }
    });

    return <primitive ref={modelRef} object={gltf.scene} scale={[0.9, 0.9, 0.9]} position={[0, 0.2, 0]} />;
};

const MaleGymcanvas = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
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

export default MaleGymcanvas;
