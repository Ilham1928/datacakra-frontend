import React, { useState, useEffect } from "react";
import GhostButton from "./GhostButton";
import AccentButton from "./AccentButton";

const Navbar = ({ setMobileOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between
      px-12 h-[68px] transition-all duration-300
      ${scrolled ? "bg-[#080808]/88 backdrop-blur-xl border-b border-[#1E1E1E]" : ""}`}
    >
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-9 h-9 bg-[#C8FF00] rounded-[9px] flex items-center justify-center text-[#080808] text-base">
          🔗
        </div>
        <span className="font-[Syne,sans-serif] font-extrabold text-[16px] text-[#F0EBE0] tracking-tight">
          Datacakra Links
        </span>
      </a>

      <div className="hidden md:flex items-center gap-1">
        {["Fitur", "Cara Kerja", "Harga", "FAQ"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase().replace(" ", "-")}`}
            className="text-[13.5px] text-[#888] no-underline px-3.5 py-[6px] rounded-lg
              hover:text-[#F0EBE0] hover:bg-white/[0.05] transition-all duration-200"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2.5">
        <GhostButton href="#" className="hidden md:inline-flex">
          Masuk
        </GhostButton>
        <AccentButton href="#">Mulai Gratis →</AccentButton>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]
            bg-transparent border-0 cursor-pointer p-1.5"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[22px] h-[2px] bg-[#F0EBE0] rounded-full transition-all"
            />
          ))}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
