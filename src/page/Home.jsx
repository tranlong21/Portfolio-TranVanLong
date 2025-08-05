import React from 'react';
import HelloWorldcanvas from '../components/canvas/HelloWorldcanvas';
import Navigation from '../components/navigations/Nav';
import MatrixRain from '../components/share/MatrixRain';

export default function Home() {
    return (
        <div className="w-full h-screen relative overflow-x-hidden">
            {/* Hiệu ứng nền */}
            <div className="absolute inset-0 z-0">
                <MatrixRain />
            </div>

            {/* Canvas */}
            <div className="absolute inset-0 z-10">
                <HelloWorldcanvas />
            </div>

            {/* Navigation */}
            <div className="absolute inset-0 z-40">
                <Navigation />
            </div>
        </div>
    );
}

