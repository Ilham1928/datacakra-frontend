import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import GhostButton from "./GhostButton";
import AccentButton from "./AccentButton";

const Pricing = () => {
  const PRICING = [
    {
      name: "Free",
      price: "0",
      per: "/bulan",
      popular: false,
      desc: "Sempurna untuk memulai dan mencoba semua fitur dasar.",
      features: [
        { ok: true, text: "10 link aktif" },
        { ok: true, text: "Analytics dasar" },
        { ok: true, text: "Subdomain datacakra links" },
        { ok: true, text: "Semua ikon & warna" },
        { ok: false, text: "Domain custom" },
        { ok: false, text: "Analytics lanjutan" },
      ],
      btnLabel: "Mulai Gratis",
      btnStyle: "ghost",
    },
    {
      name: "Datacakra Pro",
      price: "49",
      per: "rb/bulan",
      popular: true,
      desc: "Untuk kreator serius yang ingin tumbuh lebih cepat.",
      features: [
        { ok: true, text: "Unlimited link aktif" },
        { ok: true, text: "Analytics lanjutan + export" },
        { ok: true, text: "Domain custom" },
        { ok: true, text: "Kustomisasi tampilan penuh" },
        { ok: true, text: "Hapus branding Datacakra" },
        { ok: true, text: "Priority support" },
      ],
      btnLabel: "Coba 14 Hari Gratis",
      btnStyle: "accent",
    },
    {
      name: "Business",
      price: "149",
      per: "rb/bulan",
      popular: false,
      desc: "Untuk tim, agensi, dan brand yang butuh skala lebih besar.",
      features: [
        { ok: true, text: "Semua fitur Pro" },
        { ok: true, text: "Hingga 10 anggota tim" },
        { ok: true, text: "API akses penuh" },
        { ok: true, text: "White-label solution" },
        { ok: true, text: "Dedicated account manager" },
        { ok: true, text: "SLA 99.9% uptime" },
      ],
      btnLabel: "Hubungi Kami",
      btnStyle: "ghost",
    },
  ];

  return (
    <section id="harga" className="max-w-[1160px] mx-auto px-6 pb-32">
      <div className="max-w-[480px]">
        <Reveal>
          <SectionLabel text="Harga" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-[Syne,sans-serif] font-extrabold text-[#F0EBE0] mb-4 leading-[1]"
            style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-2px" }}
          >
            Transparan,
            <br />
            tanpa biaya
            <br />
            tersembunyi.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[16px] text-[#888] leading-[1.7] mb-16 font-light">
            Mulai gratis selamanya. Upgrade kapanpun kamu butuh lebih.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {PRICING.map((plan, i) => (
          <Reveal key={i} delay={0.1 + i * 0.1}>
            <div
              className={`relative bg-[#111] border rounded-[20px] p-8 flex flex-col
              transition-all duration-250
              ${
                plan.popular
                  ? "border-[#C8FF00]/25 bg-gradient-to-br from-[#C8FF00]/[0.05] to-[#111] scale-[1.03] hover:shadow-[0_24px_60px_rgba(200,255,0,0.1)]"
                  : "border-[#222] hover:border-[#2C2C2C] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              }`}
            >
              {plan.popular && (
                <div
                  className="absolute top-5 right-5 bg-[#C8FF00] text-[#080808]
                  font-[Syne,sans-serif] font-bold text-[10px] px-2.5 py-1 rounded-full"
                >
                  ✦ Terpopuler
                </div>
              )}

              <p
                className={`font-[Syne,sans-serif] font-bold text-[13px] tracking-widest uppercase mb-4
                ${plan.popular ? "text-[#C8FF00]" : "text-[#888]"}`}
              >
                {plan.name}
              </p>

              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="font-[Syne,sans-serif] font-bold text-[18px] text-[#888]">
                  Rp
                </span>
                <span className="font-[Syne,sans-serif] font-extrabold text-[52px] tracking-[-2px] text-[#F0EBE0] leading-none">
                  {plan.price}
                </span>
                <span className="text-[13px] text-[#888]">{plan.per}</span>
              </div>

              <p className="text-[13px] text-[#888] leading-relaxed mb-6">
                {plan.desc}
              </p>
              <div className="h-px bg-[#1E1E1E] mb-6" />

              <div className="flex flex-col gap-3 mb-7 flex-1">
                {plan.features.map((f, j) => (
                  <div
                    key={j}
                    className={`flex items-center gap-2.5 text-[13.5px]
                    ${f.ok ? "text-[#aaa]" : "text-[#444]"}`}
                  >
                    <span
                      className={`text-[16px] shrink-0 ${f.ok ? "text-[#00E096]" : "text-[#333]"}`}
                    >
                      {f.ok ? "✓" : "✕"}
                    </span>
                    <span className={f.ok ? "" : "line-through"}>{f.text}</span>
                  </div>
                ))}
              </div>

              {plan.btnStyle === "accent" ? (
                <AccentButton
                  href="#"
                  className="justify-center text-[14px] py-3"
                >
                  {plan.btnLabel}
                </AccentButton>
              ) : (
                <GhostButton
                  href="#"
                  className="justify-center text-[14px] py-3 w-full"
                >
                  {plan.btnLabel}
                </GhostButton>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
