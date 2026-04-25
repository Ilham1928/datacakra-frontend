import React from "react";
import LiveBadge from "./LiveBadge";
import AccentButton from "./AccentButton";
import GhostButton from "./GhostButton";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
      px-6 pt-36 pb-20 text-center overflow-hidden"
    >
      {/* radial glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,255,0,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 40% at 80% 80%, rgba(0,224,150,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at center, black 30%, transparent 80%)",
        }}
      />

      {/* floating badges */}
      {[
        {
          cls: "top-[22%] left-[6%]",
          emoji: "👆",
          text: "+4.8k klik bulan ini",
          color: "text-[#00E096]",
          border: "border-[#00E096]/20",
          delay: "0s",
        },
        {
          cls: "top-[35%] right-[5%]",
          emoji: "⚡",
          text: "Setup 2 menit",
          color: "text-[#C8FF00]",
          border: "border-[#C8FF00]/20",
          delay: "1.4s",
        },
        {
          cls: "bottom-[32%] left-[4%]",
          emoji: "📊",
          text: "Analytics real-time",
          color: "text-[#4D94FF]",
          border: "border-[#4D94FF]/20",
          delay: "2.8s",
        },
        {
          cls: "bottom-[24%] right-[6%]",
          emoji: "📱",
          text: "Mobile-first",
          color: "text-[#FF9500]",
          border: "border-[#FF9500]/20",
          delay: "0.7s",
        },
      ].map((b, i) => (
        <div
          key={i}
          className={`absolute hidden lg:flex items-center gap-2 bg-[#111]/90 border ${b.border}
            rounded-xl px-3.5 py-2 text-[12px] font-medium ${b.color} ${b.cls} backdrop-blur-sm`}
          style={{ animation: `floatY 6s ease-in-out ${b.delay} infinite` }}
        >
          <span>{b.emoji}</span>
          {b.text}
        </div>
      ))}

      {/* badge */}
      <div className="mb-8" style={{ animation: "fadeUp 0.6s ease 0.1s both" }}>
        <LiveBadge text="Dipercaya 1.200+ kreator Indonesia" />
      </div>

      {/* headline */}
      <h1
        className="font-[Syne,sans-serif] font-extrabold text-[#F0EBE0] mb-7 leading-[0.95]
        tracking-[-3px] max-w-[900px]"
        style={{
          fontSize: "clamp(52px,9vw,96px)",
          animation: "fadeUp 0.7s ease 0.2s both",
        }}
      >
        Satu link
        <br />
        untuk <span className="text-[#C8FF00]">semua</span>
        <br />
        <span
          style={{ WebkitTextStroke: "1.5px #F0EBE0", color: "transparent" }}
        >
          kontenmu
        </span>
      </h1>

      {/* subtext */}
      <p
        className="text-[#888] leading-[1.7] max-w-[520px] mb-11 font-light"
        style={{
          fontSize: "clamp(15px,2vw,18px)",
          animation: "fadeUp 0.7s ease 0.35s both",
        }}
      >
        Platform link-in-bio paling powerful untuk kreator, developer, dan
        profesional Indonesia. Tampilan kelas dunia, analytics mendalam, setup
        kilat.
      </p>

      {/* CTAs */}
      <div
        className="flex flex-wrap items-center justify-center gap-3.5 mb-16"
        style={{ animation: "fadeUp 0.7s ease 0.5s both" }}
      >
        <AccentButton href="#" large>
          Buat Profil Gratis →
        </AccentButton>
        <GhostButton href="#" large>
          👁 Lihat Contoh
        </GhostButton>
      </div>

      {/* social proof */}
      <div
        className="flex flex-wrap items-center justify-center gap-5"
        style={{ animation: "fadeUp 0.7s ease 0.65s both" }}
      >
        {/* avatars */}
        <div className="flex">
          {[
            { initials: "MI", grad: "from-[#C8FF00] to-[#00FFB2]" },
            { initials: "EA", grad: "from-[#4D94FF] to-[#A78BFA]" },
            { initials: "RD", grad: "from-[#FF9500] to-[#FF4D4D]" },
            { initials: "AP", grad: "from-[#00E096] to-[#38BDF8]" },
          ].map((av, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full bg-gradient-to-br ${av.grad} border-2 border-[#080808]
                flex items-center justify-center font-[Syne,sans-serif] font-extrabold text-[11px] text-[#080808]
                ${i > 0 ? "-ml-2" : ""}`}
            >
              {av.initials}
            </div>
          ))}
        </div>
        <div className="w-1 h-1 rounded-full bg-[#444]" />
        <p className="text-[13px] text-[#888]">
          Bergabung dengan <strong className="text-[#F0EBE0]">1.200+</strong>{" "}
          pengguna aktif
        </p>
        <div className="w-1 h-1 rounded-full bg-[#444]" />
        <p className="text-[13px] text-[#888] flex items-center gap-1">
          <span className="text-[#FCD34D]">★</span>
          <strong className="text-[#F0EBE0]">4.9</strong> / 5.0 rating
        </p>
      </div>

      {/* phone mockup */}
      <div
        className="mt-20 w-full"
        style={{ animation: "fadeUp 0.8s ease 0.8s both" }}
      >
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;
