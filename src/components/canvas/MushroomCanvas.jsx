import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const gltf = useLoader(GLTFLoader, `${import.meta.env.BASE_URL}models/mushroom.glb`);
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            
            modelRef.current.rotation.y += 0.01;
        }
    });

    return <primitive ref={modelRef} object={gltf.scene} scale={[0.4    , 0.4, 0.4]} position={[0, 1, 0]} />;
};

const MushroomCanvas = () => {
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

                <OrbitControls target={[0, 1.3, 0]} enablePan={false} enableRotate={false}  enableZoom={false} />

                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default MushroomCanvas;
