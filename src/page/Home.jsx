import React from 'react';
import HelloWorldcanvas from '../components/canvas/HelloWorldcanvas';
import Navigation from '../components/navigations/Nav';
import { useNavigate } from 'react-router-dom';
import MatrixRain from '../components/share/MatrixRain';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen relative overflow-x-hidden">
            {/* Hiệu ứng nền */}
            <div className="absolute inset-0 z-0">
                <MatrixRain />
            </div>

            {/* Nội dung */}
            <div className="absolute inset-0 z-5">
                <HelloWorldcanvas />
                </div>
            <div className="relative z-10">
                <Navigation />
            </div>
        </div>
    );
}
