import React from "react";
import { Link } from "react-router-dom";


const HomeButton = ({ x, y, label, link, icon }) => {
    return (
        <Link
            to={"/"}
            className="text-foreground rounded-full flex items-center justify-center 
                        custom-bg fixed top-4 left-4 w-fit self-start z-50"
            aria-label={"Home"}
            name={"Home"}
        >
            <span className="relative peer w-14 h-14 p-4 hover:text-accent">
                <img
                    src={`/icons/home.png`}
                    alt={icon}
                    className="w-full h-auto"
                    style={{
                        filter: "invert(1)",
                    }}
                />
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
                    bg-background text-foreground rounded-md text-sm shadow-lg whitespace-nowrap z-20"
                    style={{
                        fontWeight: "600",
                        textShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
                    }}>
                    Home
                </span>
            </span>
        </Link>
    );
};

export default HomeButton;