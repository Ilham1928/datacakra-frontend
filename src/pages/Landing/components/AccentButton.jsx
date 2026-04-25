import React from "react";

const AccentButton = ({
  children,
  href = "#",
  large = false,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 bg-[#C8FF00] text-[#080808]
        font-[Syne,sans-serif] font-bold rounded-xl cursor-pointer no-underline
        hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(200,255,0,0.3)]
        transition-all duration-200 ${large ? "text-[15px] px-8 py-[15px]" : "text-[13px] px-5 py-2"} ${className}`}
    >
      {children}
    </a>
  );
};

export default AccentButton;
