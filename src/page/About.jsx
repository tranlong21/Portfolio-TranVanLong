import React from 'react';
import HomeButton from '../components/share/HomeBtn';
import AboutDetails from '../components/about/AboutDetails';
import TranVanLongCanvas from '../components/canvas/TranVanLongCanvas';
import FireFliesBackground from '../components/share/FireFliesBackground';

export default function About() {
    return (
        <div
            className="w-full min-h-screen overflow-x-hidden"
            style={{
                backgroundImage: `url('/background/projects-background.png')`,
                width: "100vw",
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <div className="w-full h-full  ">
                <TranVanLongCanvas />
            </div>
            <div className="w-full h-full">
                <HomeButton />
                <AboutDetails />
                <FireFliesBackground />
            </div>
        </div>
    );
}
