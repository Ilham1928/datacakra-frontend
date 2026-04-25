import React, { useState } from "react";
import LineChart from "./LineChart";
import Card from "./Card";
import SectionLabel from "./SectionLabel";

const ChartCard = () => {
  const [period, setPeriod] = useState("30d");
  const tabs = [
    { id: "7d", l: "7H" },
    { id: "30d", l: "30H" },
    { id: "90d", l: "3B" },
  ];

  return (
    <Card className="p-5" style={{ animation: "fadeUp 0.5s ease 0.3s both" }}>
      <div className="flex items-center justify-between mb-5">
        <SectionLabel title="Grafik Klik" sub="Tren kunjungan per hari" />
        <div className="flex gap-0.5 bg-[#181818] border border-[#222] rounded-lg p-[3px]">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setPeriod(t.id)}
              className={`text-[11px] font-[Syne,sans-serif] font-semibold px-2.5 py-1 rounded-md cursor-pointer
                transition-all duration-200 border-0
                ${period === t.id ? "bg-[#1E1E1E] text-[#F0EBE0]" : "text-[#555] bg-transparent hover:text-[#888]"}`}
            >
              {t.l}
            </button>
          ))}
        </div>
      </div>
      <LineChart period={period} />
    </Card>
  );
};

export default ChartCard;
