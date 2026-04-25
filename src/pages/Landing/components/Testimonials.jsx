import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const Testimonials = () => {
  const TESTIMONIALS = [
    {
      stars: 5,
      featured: true,
      text: "Sejak pakai Datacakra Links, traffic ke portofolio saya naik 3x lipat dalam sebulan. Antarmukanya clean banget dan analytics-nya bikin saya ngerti darimana visitor datang.",
      name: "Enita Ayu Dhea",
      role: "Product Manager · Jakarta",
      avatar: "EA",
      grad: "from-[#C8FF00] to-[#00FFB2]",
    },
    {
      stars: 5,
      featured: false,
      text: "Akhirnya ada alternatif Linktree yang tampilannya lebih premium dan made in Indonesia. Setup cuma 2 menit, langsung jadi!",
      name: "Rizky Dharmawan",
      role: "UI/UX Designer · Bandung",
      avatar: "RD",
      grad: "from-[#4D94FF] to-[#A78BFA]",
    },
    {
      stars: 4,
      featured: false,
      text: "Fitur drag & drop reorder-nya keren parah. Tinggal seret-seret link sesuai yang mau diprioritaskan. Dashboard analytics-nya juga gampang dipahami.",
      name: "Anisa Putri",
      role: "Content Creator · Surabaya",
      avatar: "AP",
      grad: "from-[#FF9500] to-[#FF4D4D]",
    },
  ];

  return (
    <section id="testimonials" className="max-w-[1160px] mx-auto px-6 pb-32">
      <Reveal>
        <SectionLabel text="Kata Mereka" />
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className="font-[Syne,sans-serif] font-extrabold text-[#F0EBE0] mb-12 leading-[1]"
          style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-2px" }}
        >
          Dicintai kreator
          <br />
          Indonesia.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={0.1 + i * 0.1}>
            <div
              className={`bg-[#111] border rounded-[18px] p-7 h-full flex flex-col
              hover:border-[#2C2C2C] hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]
              transition-all duration-250
              ${
                t.featured
                  ? "border-[#C8FF00]/20 bg-gradient-to-br from-[#C8FF00]/[0.04] to-[#111]"
                  : "border-[#222]"
              }`}
            >
              {/* stars */}
              <div className="flex gap-1 mb-3.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className={
                      j < t.stars
                        ? "text-[#C8FF00] text-[14px]"
                        : "text-[#2A2A2A] text-[14px]"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-[14px] text-[#aaa] leading-[1.7] italic flex-1 mb-5">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center
                  font-[Syne,sans-serif] font-extrabold text-[13px] text-[#080808] shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-[Syne,sans-serif] font-bold text-[13px] text-[#F0EBE0]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#888]">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
