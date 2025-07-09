import React from "react";
import { Link } from "react-router-dom";
import {
    FaHome,
    FaInfoCircle,
    FaProjectDiagram,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFileAlt,
} from "react-icons/fa";

const getIcon = (icon) => {
    const map = {
        home: <FaHome />,
        about: <FaInfoCircle />,
        projects: <FaProjectDiagram />,
        contact: <FaEnvelope />,
        github: <FaGithub />,
        linkedin: <FaLinkedin />,
        twitter: <FaTwitter />,
        resume: <FaFileAlt />,
        chest: <FaHome />,
        back: <FaInfoCircle />,
        shoulder: <FaProjectDiagram />,
        arm: <FaEnvelope />,
        leg: <FaGithub />,
        belly: <FaLinkedin />,
        shop: <FaTwitter />,
        profile: <FaFileAlt />,
    };

    return (
        <span className="w-full h-full text-2xl flex items-center justify-center">
            {map[icon] || <FaHome />}
        </span>
    );
};

const NavButton = ({ x, y, label, link, icon }) => {
    return (
        <div
            className="absolute cursor-pointer z-10 group"
            style={{
                position: "absolute",
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
            }}
        >
            <Link
                to={link}
                className="text-foreground rounded-full flex items-center justify-center 
                bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
                shadow-glass-inset hover:shadow-glass-sm"
                aria-label={label}
                name={label}
            >
                <span className="relative peer w-14 h-14 p-4 hover:text-accent">
                    {getIcon(icon)}
                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                    <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
                    bg-background text-foreground rounded-md text-sm shadow-lg whitespace-nowrap z-20"
                    style={{
                        fontWeight: "600", 
                        textShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)", 
                    }}>
                        {label}
                    </span>
                </span>
            </Link>
        </div>
    );
};

export default NavButton;
