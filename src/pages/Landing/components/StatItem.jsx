import React from "react";
import { useCounter } from "../../../utilities/counter";
import { useReveal } from "../../../utilities/reveal";

const StatItem = ({ target, suffix, label, delay }) => {
  const [ref, visible] = useReveal();
  const val = useCounter(target, visible);
  return (
    <div
      ref={ref}
      className="py-14 px-10 border-r border-[#1E1E1E] last:border-r-0 text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.7s ease ${delay}s`,
      }}
    >
      <p className="font-[Syne,sans-serif] font-extrabold text-[52px] tracking-[-2px] text-[#F0EBE0] leading-none mb-2">
        {typeof val === "number" && target >= 10
          ? val.toLocaleString("id-ID")
          : val}
        {suffix}
      </p>
      <p className="text-[14px] text-[#888]">{label}</p>
    </div>
  );
};

export default StatItem;
