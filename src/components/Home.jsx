import React from 'react';
import MaleGymcanvas from './canvas/MaleGymcanvas';
import Navigation from './navigations/nav.jsx';
import { useNavigate } from 'react-router-dom';
import FireFliesBackground from './FireFliesBackground';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-screen"
            style={{
                backgroundColor: "#000",
                backgroundImage: `url('/background/home-background.png')`,
                width: "100vw",
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <MaleGymcanvas />   
            <Navigation />
            <FireFliesBackground />
        </div>
    );
}
