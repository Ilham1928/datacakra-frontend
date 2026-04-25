import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const HowItWorks = () => {
  const HOW_STEPS = [
    {
      num: "01",
      emoji: "👤",
      bg: "bg-[#C8FF00]/10",
      color: "text-[#C8FF00]",
      title: "Buat akun",
      desc: "Daftar gratis dengan email atau Google dalam hitungan detik. Tidak perlu kartu kredit.",
    },
    {
      num: "02",
      emoji: "➕",
      bg: "bg-[#00E096]/10",
      color: "text-[#00E096]",
      title: "Tambah link-mu",
      desc: "Tambahkan semua link pentingmu — portofolio, sosmed, toko online, atau apapun.",
    },
    {
      num: "03",
      emoji: "↗",
      bg: "bg-[#4D94FF]/10",
      color: "text-[#4D94FF]",
      title: "Bagikan profilmu",
      desc: "Taruh satu link di bio Instagram, Twitter, atau kartu nama digitalmu.",
    },
  ];

  return (
    <section id="cara-kerja" className="max-w-[1160px] mx-auto px-6 py-32">
      <div className="text-center max-w-[520px] mx-auto mb-16">
        <Reveal>
          <SectionLabel text="Cara Kerja" center />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-[Syne,sans-serif] font-extrabold text-[#F0EBE0] mb-4 leading-[1]"
            style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-2px" }}
          >
            Mulai dalam
            <br />3 langkah.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[16px] text-[#888] leading-[1.7] font-light">
            Tidak perlu skill teknis. Siapapun bisa buat profil link-in-bio yang
            keren dalam hitungan menit.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HOW_STEPS.map((step, i) => (
          <Reveal key={i} delay={0.1 + i * 0.1}>
            <div
              className="group bg-[#111] border border-[#222] rounded-[18px] p-8 relative overflow-hidden
              hover:border-[#2C2C2C] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
              transition-all duration-250"
            >
              <div
                className={`absolute top-7 right-7 w-[42px] h-[42px] rounded-[11px] ${step.bg}
                flex items-center justify-center text-[20px] ${step.color}`}
              >
                {step.emoji}
              </div>
              <p
                className="font-[Syne,sans-serif] font-extrabold text-[72px] leading-none mb-5
                text-[#2A2A2A] group-hover:text-[#C8FF00]/15 transition-colors duration-300"
              >
                {step.num}
              </p>
              <h3 className="font-[Syne,sans-serif] font-bold text-[20px] text-[#F0EBE0] mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#888] leading-[1.7]">
                {step.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
