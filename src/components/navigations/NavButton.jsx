import React from "react";
import { Link } from "react-router-dom";
import {
    FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope,
    FaGithub, FaLinkedin, FaFacebook, FaCommentDots
} from "react-icons/fa";
import clsx from "clsx";
import ReponsiveComponent from "../share/ReponsiveComponent";
import { motion } from "framer-motion";

const getIcon = (icon) => {
    const map = {
        home: <FaHome />,
        about: <FaInfoCircle />,
        projects: <FaProjectDiagram />,
        contact: <FaEnvelope />,
        github: <FaGithub />,
        linkedin: <FaLinkedin />,
        facebook: <FaFacebook />,
        feedback: <FaCommentDots />,
    };
    return (
        <span className="w-full h-full text-2xl flex items-center justify-center">
            {map[icon] || <FaHome />}
        </span>
    );
};

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 }
}

const NavLink = motion.create(Link);


const NavButton = ({ x, y, label, link, icon, newTab, labelDirection = "right" }) => {
    return (
        <ReponsiveComponent>
            {({ size }) => {
                return size && size >= 480 ? (
                    // Layout desktop: vòng tròn
                    <div
                        className="absolute cursor-pointer z-10 group hover:pause"
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <motion.div variants={item}>
                            <NavLink
                                to={link}
                                target={newTab ? "_blank" : "_self"}
                                className="text-foreground rounded-full flex items-center justify-center custom-bg"
                                aria-label={label}
                            >
                                <span className="relative peer w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                                    {getIcon(icon)}
                                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                                    <span
                                        className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
                                        bg-background text-foreground rounded-md text-sm shadow-lg whitespace-nowrap z-20"
                                        style={{
                                            fontWeight: "600",
                                            textShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
                                        }}
                                    >
                                        {label}
                                    </span>
                                </span>
                            </NavLink>
                        </motion.div>
                    </div>
                ) : (
                    <div className="w-fit cursor-pointer z-10 group hover:pause">
                        <motion.div variants={item}>
                            <NavLink
                                to={link}
                                target={newTab ? "_blank" : "_self"}
                                className="text-foreground rounded-full flex items-center justify-center custom-bg"
                                aria-label={label}
                            >
                                <span className="relative peer w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                                    {getIcon(icon)}
                                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                                    <span
                                        className={clsx(
                                            "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground rounded-md text-sm shadow-lg whitespace-nowrap z-20",
                                            labelDirection === "left" ? "right-full left-auto" : ""
                                        )}
                                    >
                                        {label}
                                    </span>
                                </span>
                            </NavLink>
                        </motion.div>
                    </div>
                );
            }}
        </ReponsiveComponent>
    );
};

export default NavButton;
