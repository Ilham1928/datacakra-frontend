import React from "react";

const StatusPill = ({ status }) => {
  const cfg = {
    active: "bg-[#00E096]/10 text-[#00E096] border-[#00E096]/20",
    paused: "bg-[#FF9500]/10 text-[#FF9500] border-[#FF9500]/20",
    draft: "bg-[#1E1E1E] text-[#666] border-[#2A2A2A]",
  };
  const lbl = { active: "Aktif", paused: "Paused", draft: "Draft" };
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold
      font-[Syne,sans-serif] px-2.5 py-[3px] rounded-full border ${cfg[status]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {lbl[status]}
    </span>
  );
};

export default StatusPill;
