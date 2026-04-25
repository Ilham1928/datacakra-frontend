import React from "react";

const SectionLabel = ({ text, center = false }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}
    >
      <div className="w-6 h-px bg-[#C8FF00]" />
      <span className="font-[Syne,sans-serif] font-bold text-[11px] tracking-[2px] uppercase text-[#C8FF00]">
        {text}
      </span>
    </div>
  );
};

export default SectionLabel;
