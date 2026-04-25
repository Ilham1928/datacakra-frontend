import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";

const StatusCard = (params) => {
  const {
    label,
    target,
    suffix,
    emoji,
    glow,
    iconBg,
    iconText,
    spark,
    sparkColor,
    change,
    changeType,
    delay,
  } = params;

  const fmt = (n) => Number(n).toLocaleString("id-ID");

  const useAnimatedCounter = (target, ms = 1200) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
      let cur = 0;
      const inc = target / (ms / 16);
      const id = setInterval(() => {
        cur += inc;
        if (cur >= target) {
          setVal(target);
          clearInterval(id);
          return;
        }
        setVal(Math.round(cur));
      }, 16);
      return () => clearInterval(id);
    }, [target, ms]);
    return val;
  };

  const val = useAnimatedCounter(target);
  const changeArrow = { up: "↗", down: "↘", muted: "—" };
  const changeStyle = {
    up: "text-[#00E096]",
    down: "text-[#FF4D4D]",
    muted: "text-[#555]",
  };

  return (
    <Card
      className="p-5 relative overflow-hidden hover:border-[#2C2C2C] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-200"
      style={{ animation: `fadeUp 0.5s ease ${delay}s both` }}
    >
      {/* bg glow */}
      <div
        className={`absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-[0.07] blur-2xl pointer-events-none ${glow}`}
      />

      {/* sparkline */}
      <svg
        className="absolute bottom-0 right-0 opacity-[0.15]"
        width="80"
        height="32"
        viewBox="0 0 80 32"
      >
        <polyline
          points={spark}
          fill="none"
          stroke={sparkColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex items-center justify-between mb-3.5">
        <span className="text-[12px] text-[#888] font-medium tracking-[0.2px]">
          {label}
        </span>
        <Icon
          width={30}
          icon={emoji}
          className={`rounded-lg flex items-center justify-center text-base ${iconBg} ${iconText}`}
        />
      </div>

      <p className="font-[Syne,sans-serif] font-extrabold text-[30px] tracking-[-1px] text-[#F0EBE0] leading-none mb-1.5">
        {fmt(val)}
        {suffix}
      </p>

      <p
        className={`flex items-center gap-1 text-[12px] ${changeStyle[changeType]}`}
      >
        <span>{changeArrow[changeType]}</span>
        <span>{change}</span>
      </p>
    </Card>
  );
};

export default StatusCard;
