import React from "react";
import { Icon } from "@iconify/react";

const NavLink = ({ item, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex items-center gap-2.5 px-2.5 py-[9px] rounded-[10px] mb-0.5
        text-[13.5px] cursor-pointer transition-all duration-200
        ${
          active
            ? "bg-[#C8FF00]/[0.08] text-[#C8FF00] font-medium"
            : "text-[#888] hover:bg-[#181818] hover:text-[#F0EBE0]"
        }`}
    >
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[#C8FF00] rounded-r-[3px]" />
      )}
      <Icon className="text-[17px] shrink-0" size={24} icon={item.emoji} />
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="bg-[#C8FF00] text-[#080808] text-[10px] font-[Syne,sans-serif] font-bold px-[7px] py-[2px] rounded-full">
          {item.badge}
        </span>
      )}
    </div>
  );
};

export default NavLink;
