import React from "react";

const Ticker = () => {
  const TICKER_ITEMS = [
    { emoji: "🔗", text: "Link-in-bio terbaik" },
    { emoji: "📊", text: "Analytics real-time" },
    { emoji: "🎨", text: "Kustomisasi penuh" },
    { emoji: "📱", text: "Mobile-first design" },
    { emoji: "🌐", text: "Domain custom" },
    { emoji: "⚡", text: "Setup 2 menit" },
    { emoji: "🔒", text: "SSL gratis" },
    { emoji: "👥", text: "1.200+ pengguna aktif" },
    { emoji: "⭐", text: "Rating 4.9 / 5.0" },
    { emoji: "↕", text: "Drag & drop reorder" },
  ];

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="border-t border-b border-[#1E1E1E] bg-[#0F0F0F] py-[18px] overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-9 text-[14px] font-[Syne,sans-serif] font-bold
              text-[#444] whitespace-nowrap border-r border-[#1E1E1E] hover:text-[#F0EBE0] transition-colors cursor-default"
          >
            <span className="text-[#C8FF00] text-[18px]">{item.emoji}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
