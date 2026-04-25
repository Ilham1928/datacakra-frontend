import React from "react";

const Card = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`bg-[#111111] border border-[#222] rounded-2xl ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
