import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";

const Navigaton = () => {
  const radius = 260;
  const count = BtnList.length;

  return (
    <div className="w-full h-screen fixed flex items-center justify-center">
      <div className="w-max flex items-center justify-center group relative">
        <div className="group-spin relative animate-spin-slow">
          {BtnList.map((btn, index) => {
            const angle = (360 / count) * index;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <NavButton key={btn.label} x={x} y={y} {...btn} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigaton;
