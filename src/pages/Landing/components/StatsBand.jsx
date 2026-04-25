import React from "react";
import StatItem from "./StatItem";

const StatsBand = () => {
  const stats = [
    { target: 1200, suffix: "+", label: "Pengguna aktif", delay: 0 },
    { target: 48, suffix: "rb+", label: "Total klik per bulan", delay: 0.1 },
    { target: 99, suffix: "%", label: "Uptime server", delay: 0.2 },
    { target: 4, suffix: ".9★", label: "Rating pengguna", delay: 0.3 },
  ];

  return (
    <div className="border-t border-b border-[#1E1E1E] bg-[#0F0F0F]">
      <div className="max-w-[1160px] mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatItem key={i} {...s} />
        ))}
      </div>
    </div>
  );
};

export default StatsBand;
