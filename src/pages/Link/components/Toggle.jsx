import React from "react";

const Toggle = ({ on, onChange }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      className={`relative w-9 h-5 rounded-full cursor-pointer shrink-0 border transition-all duration-200
        ${on ? "bg-[#C8FF00] border-[#C8FF00]" : "bg-[#1E1E1E] border-[#2C2C2C]"}`}
    >
      <div
        className={`absolute top-[3px] w-3.5 h-3.5 rounded-full transition-all duration-200
        ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${on ? "left-[18px] bg-[#080808]" : "left-[3px] bg-[#555]"}`}
      />
    </div>
  );
};

export default Toggle;
