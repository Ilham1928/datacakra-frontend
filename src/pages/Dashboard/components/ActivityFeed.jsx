import React from "react";
import Card from "./Card";
import SectionLabel from "./SectionLabel";

const ActivityFeed = () => {
  const ACT_CFG = {
    click: { bg: "bg-[#C8FF00]/[0.08] text-[#C8FF00]", emoji: "👆" },
    new: { bg: "bg-[#4D94FF]/10 text-[#4D94FF]", emoji: "➕" },
    share: { bg: "bg-[#00E096]/10 text-[#00E096]", emoji: "↗" },
    edit: { bg: "bg-[#FF9500]/10 text-[#FF9500]", emoji: "✏️" },
  };

  const ACTIVITIES = [
    {
      type: "click",
      text: "5 klik baru di Portfolio Website",
      time: "2 menit lalu",
    },
    {
      type: "new",
      text: "Link Resume PDF berhasil ditambahkan",
      time: "1 jam lalu",
    },
    {
      type: "share",
      text: "Profil dibagikan dari Instagram",
      time: "3 jam lalu",
    },
    {
      type: "click",
      text: "12 klik baru di Datacakra POS",
      time: "5 jam lalu",
    },
    { type: "edit", text: "Judul Hire Me diperbarui", time: "Kemarin" },
    {
      type: "share",
      text: "Profil dibagikan dari LinkedIn",
      time: "2 hari lalu",
    },
  ];

  return (
    <Card className="p-5" style={{ animation: "fadeUp 0.5s ease 0.45s both" }}>
      <SectionLabel title="Aktivitas" sub="Terbaru" />
      <div>
        {ACTIVITIES.map((a, i) => {
          const cfg = ACT_CFG[a.type];
          return (
            <div
              key={i}
              className={`flex gap-3 py-3 ${i < ACTIVITIES.length - 1 ? "border-b border-[#222]" : ""}`}
            >
              <div
                className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-[13px] shrink-0 ${cfg.bg}`}
              >
                {cfg.emoji}
              </div>
              <div>
                <p className="text-[13px] text-[#aaa] leading-snug">{a.text}</p>
                <p className="text-[11px] text-[#555] mt-0.5">{a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ActivityFeed;
