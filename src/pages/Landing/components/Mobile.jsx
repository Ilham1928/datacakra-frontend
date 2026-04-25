import React from "react";
import AccentButton from "./AccentButton";

const Mobile = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[400] flex flex-col items-center justify-center gap-2
      bg-[#080808]/97 backdrop-blur-xl transition-opacity duration-300
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#888] text-3xl bg-transparent border-0 cursor-pointer
          hover:text-[#F0EBE0] transition-colors"
      >
        ✕
      </button>
      {["Fitur", "Cara Kerja", "Harga", "FAQ"].map((label) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          onClick={onClose}
          className="font-[Syne,sans-serif] font-bold text-[28px] text-[#888] no-underline py-3 px-6
            hover:text-[#F0EBE0] transition-colors"
        >
          {label}
        </a>
      ))}
      <AccentButton href="#" large className="mt-5">
        Mulai Gratis →
      </AccentButton>
    </div>
  );
};

export default Mobile;
