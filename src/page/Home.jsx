import React from 'react';
import MaleGymcanvas from '../components/canvas/MaleGymcanvas';
import Navigation from '../components/navigations/Nav';
import { useNavigate } from 'react-router-dom';
import FireFliesBackground from '../components/share/FireFliesBackground';

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
