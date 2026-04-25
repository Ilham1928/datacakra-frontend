import React from "react";
import { Icon } from "@iconify/react";

const CardButton = ({ emoji, title, onClick }) => {
  return (
    <button
      title={title}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`rounded-lg flex items-center justify-center text-[14px]
        cursor-pointer border-0 bg-transparent transition-all duration-150
        text-[#555] hover:bg-[#181818] hover:text-[#F0EBE0
      `}
    >
      <Icon icon={emoji} width={16} className="text-white" />
    </button>
  );
};

export default CardButton;
