import React from "react";

const GhostButton = ({
  children,
  href = "#",
  large = false,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 border border-[#2A2A2A] text-[#888]
        font-[Syne,sans-serif] font-semibold rounded-xl cursor-pointer no-underline
        hover:text-[#F0EBE0] hover:border-[#555] transition-all duration-200
        ${large ? "text-[15px] px-7 py-[15px]" : "text-[13px] px-4 py-2"} ${className}`}
    >
      {children}
    </a>
  );
};

export default GhostButton;
