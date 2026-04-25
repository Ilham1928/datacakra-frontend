import React from "react";

const SectionLabel = ({ title, sub }) => {
  return (
    <div className="mb-5">
      <h3 className="font-[Syne,sans-serif] font-bold text-[15px] text-[#F0EBE0]">
        {title}
      </h3>
      {sub && <p className="text-[12px] text-[#555] mt-0.5">{sub}</p>}
    </div>
  );
};

export default SectionLabel;
