import React from 'react';
import MaleGymcanvas from './canvas/MaleGymcanvas';
import Navigation from './navigations/nav.jsx';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-screen"
            style={{
                backgroundColor: "#fff",
                width: "100vw",
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            {/* <MaleGymcanvas /> */}
            <Navigation />
        </div>
    );
}
