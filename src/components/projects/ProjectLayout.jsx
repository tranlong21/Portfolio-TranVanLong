import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}

const NavLink = motion.create(Link);

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <motion.div variants={item} className="w-full">
      <NavLink
        to={demoLink}
        target="_blank"
        className="flex items-center w-full rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:opacity-90 transition"
      >
        {/* Trái: Tên + Mô tả */}
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <h2 className="text-foreground font-semibold">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>

        {/* Giữa: Đường kẻ chấm */}
        <div className="flex-1 mx-4 border-b border-dashed border-foreground/50" />

        {/* Phải: Ngày */}
        <p className="text-muted sm:text-foreground whitespace-nowrap">
          {new Date(date).toDateString()}
        </p>
      </NavLink>
    </motion.div>
  )
}

export default ProjectLayout;
