import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/share/HomeBtn';
import ProjectList from '../components/projects/ProjectList';

export default function Projects() {
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-screen"
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
            <HomeButton />
            <ProjectList />
        </div>
    );
}
