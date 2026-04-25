import React from "react";

const PhoneMockup = () => {
  const PHONE_LINKS = [
    { emoji: "🌐", color: "#C8FF00", title: "Portfolio Website" },
    { emoji: "💻", color: "#A78BFA", title: "Datacakra POS" },
    { emoji: "🔗", color: "#38BDF8", title: "Datacakra Links" },
    { emoji: "⚡", color: "#C8FF00", title: "Hire Me" },
  ];

  return (
    <div className="relative mx-auto" style={{ width: 270 }}>
      {/* glow */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-20
        bg-[#C8FF00] blur-[60px] opacity-15 rounded-full pointer-events-none"
      />

      <div
        className="relative bg-[#0A0A0A] border-[1.5px] border-[#2A2A2A] rounded-[36px]
        px-[18px] pt-7 pb-6 shadow-[0_40px_100px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]"
      >
        {/* notch */}
        <div className="w-16 h-[5px] rounded-full bg-[#2A2A2A] mx-auto mb-5" />

        {/* avatar */}
        <div className="flex flex-col items-center mb-4">
          <div
            className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#C8FF00] to-[#00FFB2]
            flex items-center justify-center font-[Syne,sans-serif] font-extrabold text-[18px] text-[#080808]
            mb-2 shadow-[0_0_0_4px_rgba(200,255,0,0.15)]"
          >
            CP
          </div>
          <p className="font-[Syne,sans-serif] font-extrabold text-[13px] text-[#F0EBE0]">
            @datacakra
          </p>
          <p className="text-[11px] text-[#555] mt-0.5">
            Full-stack Developer · Jakarta 🇮🇩
          </p>
          <div className="flex gap-1.5 mt-2 flex-wrap justify-center">
            {["Vue.js", "Laravel", "React"].map((tag) => (
              <span
                key={tag}
                className="bg-[#181818] border border-[#2A2A2A] rounded-full px-2 py-px text-[9px] text-[#555]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* links */}
        <div className="flex flex-col gap-2">
          {PHONE_LINKS.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 bg-[#181818] border border-[#222] rounded-[10px] px-3 py-2.5"
            >
              <div
                className="w-[26px] h-[26px] rounded-[7px] bg-[#1E1E1E] border border-[#2A2A2A]
                flex items-center justify-center text-[13px] shrink-0"
              >
                {l.emoji}
              </div>
              <p className="font-[Syne,sans-serif] font-bold text-[10px] text-[#F0EBE0] flex-1">
                {l.title}
              </p>
              <span className="text-[#333] text-[12px]">↗</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
