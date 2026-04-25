import React, { useState, useEffect } from "react";
import Card from "./Card";
import SectionLabel from "./SectionLabel";
import { Icon } from "@iconify/react";
import Empty from "../../../components/Empty";

const TopLinksCard = () => {
  const TOP_LINKS = [
    // {
    //   title: "Hire Me",
    //   url: "cal.Datacakra",
    //   emoji: "⚡",
    //   clicks: 894,
    //   pct: 18,
    // },
  ];

  const [animated, setAnimated] = useState(false);

  const fmt = (n) => Number(n).toLocaleString("id-ID");

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <Card className="p-5" style={{ animation: "fadeUp 0.5s ease 0.35s both" }}>
      <SectionLabel title="Top Links" sub="Berdasarkan klik" />
      <div>
        {TOP_LINKS.length === 0 && <Empty />}
        {TOP_LINKS.length > 0 &&
          TOP_LINKS.map((l, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 py-[11px] ${i < TOP_LINKS.length - 1 ? "border-b border-[#222]" : ""}`}
            >
              <span className="font-[Syne,sans-serif] font-extrabold text-[11px] text-[#555] w-4 text-center">
                #{i + 1}
              </span>
              <Icon
                size={30}
                icon={l.emoji}
                className="rounded-lg bg-[#181818] border border-[#222] flex items-center justify-center text-[15px] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[#F0EBE0] truncate">
                  {l.title}
                </p>
                <p className="text-[11px] text-[#555] truncate">{l.url}</p>
                <div className="h-[3px] rounded-full bg-[#222] mt-1 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#C8FF00]"
                    style={{
                      width: animated ? `${l.pct}%` : "0%",
                      transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                </div>
              </div>
              <span className="font-[Syne,sans-serif] font-bold text-[13px] text-[#C8FF00] shrink-0">
                {fmt(l.clicks)}
              </span>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default TopLinksCard;
