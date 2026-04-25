import React from "react";

const LiveBadge = ({ text }) => {
  return (
    <div
      className="inline-flex items-center gap-2 bg-[#C8FF00]/[0.07] border border-[#C8FF00]/20
      rounded-full px-4 py-[6px] font-[Syne,sans-serif] font-bold text-[12px] text-[#C8FF00]"
    >
      <span
        className="w-[6px] h-[6px] rounded-full bg-[#C8FF00]"
        style={{ animation: "pulseDot 2s ease infinite" }}
      />
      {text}
    </div>
  );
};

export default LiveBadge;
