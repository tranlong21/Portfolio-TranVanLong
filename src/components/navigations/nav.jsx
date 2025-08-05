import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ReponsiveComponent from "../share/ReponsiveComponent";
import { motion, scale } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
}


const Navigaton = () => {
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  const vw = typeof window !== "undefined" ? window.innerWidth / 100 : 0;
  const rem =
    typeof window !== "undefined"
      ? parseFloat(getComputedStyle(document.documentElement).fontSize)
      : 0;

  const radius = isLarge
    ? 20 * vw - rem
    : isMedium
      ? 30 * vw - rem
      : 40 * vw - rem;

  const count = BtnList.length;

  return (
    <div className="w-full h-screen fixed flex items-center justify-center">
      <ReponsiveComponent>
        {({ size }) =>
          size && size >= 480 ? (
            <motion.div

              variants={container}
              initial="hidden"
              animate="show"


              className="w-max flex items-center justify-center group relative">
              <div className="group-spin relative animate-spin-slow">
                {BtnList.map((btn, index) => {
                  const angle = (360 / count) * index;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return <NavButton key={btn.label} x={x} y={y} {...btn} />;
                })}
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div

                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center group relative">
                {BtnList.slice(0, BtnList.length / 2).map((btn) => (
                  <NavButton key={btn.label} x={0} y={0} {...btn} />
                ))}
              </motion.div>

              <motion.div

                variants={container}
                initial="hidden"
                animate="show" 
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center group relative">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map((btn) => (
                  <NavButton
                    key={btn.label}
                    x={0}
                    y={0}
                    {...btn}
                    labelDirection="left"
                  />
                ))}
              </motion.div>
            </>
          )
        }
      </ReponsiveComponent>
    </div>
  );
};

export default Navigaton;
