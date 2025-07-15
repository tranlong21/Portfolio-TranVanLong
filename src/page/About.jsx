import React from 'react';
import HomeButton from '../components/share/HomeBtn';
import AboutDetails from '../components/about/AboutDetails';

export default function About() {
    return (
        <div
            className="w-full min-h-screen bg-fixed"
            style={{
                backgroundImage: `url('/background/about-background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="min-h-screen w-full backdrop-blur-sm">
                <HomeButton />
                <AboutDetails />
            </div>
        </div>
    );
}
