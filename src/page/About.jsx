import React from 'react';
import HomeButton from '../components/share/HomeButton';
import AboutDetails from '../components/about/AboutDetails';
import TranVanLongCanvas from '../components/canvas/TranVanLongCanvas';
import FireFliesBackground from '../components/share/FireFliesBackground';

export default function About() {
    return (
        <div
            className="w-full min-h-screen overflow-x-hidden"
            style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}background/about-background.png')`,

                width: "100vw",
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed", 
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
