import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/share/HomeButton';
import ProjectList from '../components/projects/ProjectList';
import MushroomCanvas from '../components/canvas/MushroomCanvas';
import FireFliesBackground from '../components/share/FireFliesBackground';

export default function Projects() {
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-screen"
            style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}background/projects-background.png')`,
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
                <MushroomCanvas />
            </div>
            <div className="w-full h-full  ">

                <HomeButton />
                <ProjectList />
                <FireFliesBackground />
            </div>
        </div>
    );
}
