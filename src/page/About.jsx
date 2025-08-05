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
            <div
                className="relative w-full h-3/4 sm:h-screen flex flex-col items-center justify-center z-20"
            >
                {/* Model */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <TranVanLongCanvas />
                </div>

                {/* Text */}
                <div className="absolute flex flex-col items-center text-center top-[80%] left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="font-bold text-8xl text-accent">Trần Văn Long</h1>
                    <p className="font-light text-foreground text-xl">
                        Kéo xuống và đọc những thông tin bên dưới để hiểu rõ về tôi.
                    </p>
                </div>
            </div>
            <HomeButton />
            <AboutDetails />
            <FireFliesBackground />
        </div>
    );
}
