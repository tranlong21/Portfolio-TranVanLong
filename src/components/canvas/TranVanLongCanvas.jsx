import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Model = () => {
    const gltf = useLoader(GLTFLoader, '/models/TranVanLong.glb');
    const modelRef = useRef();

    useFrame((state) => {
        if (modelRef.current) {
            const t = state.clock.getElapsedTime();
            modelRef.current.position.y = 1.3 + Math.sin(t) * 0.1;
        }
    });


    return <primitive ref={modelRef} object={gltf.scene} scale={[1.3, 1.3, 1.3]} position={[0, 0, 0]} />;
};

const TranVanLongCanvas = () => {
    return (
        <div className="w-full max-w-4xl mx-auto h-[600px] relative overflow-hidden">
            <Canvas
                camera={{ position: [3, 1, 2], fov: 35 }}
                style={{ background: 'transparent', width: '100%', height: '100%' }}
            >
                <ambientLight intensity={1.2} />
                <directionalLight intensity={1.2} position={[5, 10, 5]} />
                <OrbitControls target={[0, 1.3, 0]} enableRotate={false}  enablePan={false} enableZoom={false} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default TranVanLongCanvas;
