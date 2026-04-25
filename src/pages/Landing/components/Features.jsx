import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const Features = () => {
  const FEATURES = [
    {
      emoji: "📊",
      color: "#00E096",
      bg: "bg-[#00E096]/10",
      title: "Analytics Real-time",
      desc: "Pantau klik, pengunjung unik, dan CTR setiap link langsung dari dashboard.",
    },
    {
      emoji: "🎨",
      color: "#4D94FF",
      bg: "bg-[#4D94FF]/10",
      title: "Kustomisasi Penuh",
      desc: "Ubah warna, font, background, dan layout sesuai brand personalmu.",
    },
    {
      emoji: "📱",
      color: "#FF9500",
      bg: "bg-[#FF9500]/10",
      title: "Mobile-First Design",
      desc: "Tampil sempurna di semua perangkat. 90% pengunjung datang dari HP.",
    },
    {
      emoji: "🌐",
      color: "#A78BFA",
      bg: "bg-[#A78BFA]/10",
      title: "Domain Custom",
      desc: "Hubungkan domain sendiri dan tampil lebih profesional ke audiens.",
    },
  ];

  return (
    <section id="fitur" className="max-w-[1160px] mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left copy */}
        <div>
          <Reveal>
            <SectionLabel text="Fitur Unggulan" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-[Syne,sans-serif] font-extrabold text-[#F0EBE0] mb-5 leading-[1]"
              style={{
                fontSize: "clamp(36px,5vw,60px)",
                letterSpacing: "-2px",
              }}
            >
              Semua yang
              <br />
              kamu butuhkan.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[16px] text-[#888] leading-[1.7] max-w-[480px] mb-10 font-light">
              Dari analytics mendalam hingga tampilan yang bisa dikustomisasi
              sepenuhnya — Datacakra Links hadir dengan semua tools yang kamu
              perlukan.
            </p>
          </Reveal>

          {/* checklist */}
          <div className="flex flex-col gap-4">
            {[
              {
                color: "#C8FF00",
                bg: "bg-[#C8FF00]/10",
                title: "Gratis selamanya, tanpa kartu kredit",
                sub: "Mulai tanpa perlu memasukkan informasi pembayaran.",
              },
              {
                color: "#00E096",
                bg: "bg-[#00E096]/10",
                title: "Setup kurang dari 2 menit",
                sub: "Buat akun, tambah link, dan profil langsung live.",
              },
              {
                color: "#4D94FF",
                bg: "bg-[#4D94FF]/10",
                title: "Dioptimalkan untuk konversi",
                sub: "Desain yang terbukti meningkatkan klik hingga 3x lipat.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={0.25 + i * 0.1}>
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-[9px] ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}
                    style={{ color: item.color, fontSize: 18 }}
                  >
                    ✓
                  </div>
                  <div>
                    <p className="font-[Syne,sans-serif] font-bold text-[14px] text-[#F0EBE0] mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-[#888]">{item.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* right grid */}
        <div className="grid grid-cols-1 gap-3.5">
          {/* big drag card */}
          <Reveal delay={0.15}>
            <div
              className="group bg-[#111] border border-[#222] rounded-2xl p-6
              hover:border-[#2C2C2C] hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]
              transition-all duration-250 flex items-center gap-6 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#C8FF00]/[0.03] to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div>
                <div
                  className="w-10 h-10 rounded-[10px] bg-[#C8FF00]/10 text-[#C8FF00] flex items-center
                  justify-center text-xl mb-3.5"
                >
                  ↕
                </div>
                <h3 className="font-[Syne,sans-serif] font-bold text-[15px] text-[#F0EBE0] mb-1.5">
                  Drag & Drop Reorder
                </h3>
                <p className="text-[13px] text-[#888] leading-relaxed">
                  Atur urutan link semudah seret dan lepas. Perubahan langsung
                  tampil di profil secara real-time.
                </p>
              </div>
              <div className="shrink-0 w-[180px] bg-[#181818] border border-[#2A2A2A] rounded-xl p-3 flex flex-col gap-2">
                {[
                  { emoji: "🌐", title: "Portfolio Website" },
                  { emoji: "🔗", title: "Datacakra Links", highlight: true },
                  { emoji: "⚡", title: "Hire Me" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 rounded-[9px] px-2.5 py-2 text-[11px] cursor-grab transition-all duration-200
                      ${
                        row.highlight
                          ? "bg-[#C8FF00]/[0.04] border border-[#C8FF00]/25 text-[#C8FF00]"
                          : "bg-[#1E1E1E] border border-[#2A2A2A] text-[#888] hover:text-[#F0EBE0]"
                      }`}
                  >
                    <span className="text-[13px]">{row.emoji}</span>
                    {row.title}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 2-col grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={0.2 + i * 0.08}>
                <div
                  className="group bg-[#111] border border-[#222] rounded-2xl p-5
                  hover:border-[#2C2C2C] hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]
                  transition-all duration-250 relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div
                    className={`w-10 h-10 rounded-[10px] ${f.bg} flex items-center justify-center text-xl mb-3.5`}
                    style={{ color: f.color }}
                  >
                    {f.emoji}
                  </div>
                  <h3 className="font-[Syne,sans-serif] font-bold text-[15px] text-[#F0EBE0] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-[#888] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
