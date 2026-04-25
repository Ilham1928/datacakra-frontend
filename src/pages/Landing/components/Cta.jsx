import React, { useState } from "react";
import Reveal from "./Reveal";
import LiveBadge from "./LiveBadge";
import AccentButton from "./AccentButton";

const Cta = () => {
  const [username, setUsername] = useState("");
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(200,255,0,0.09) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[760px] mx-auto text-center">
        <Reveal>
          <div className="mb-7">
            <LiveBadge text="Gratis. Selamanya. Mulai sekarang." />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-[Syne,sans-serif] font-extrabold text-[#F0EBE0] mb-5 leading-[1]"
            style={{ fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-2px" }}
          >
            Siap punya profil
            <br />
            yang <span className="text-[#C8FF00]">memukau</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[16px] text-[#888] leading-[1.7] mb-11 font-light">
            Bergabunglah dengan 1.200+ kreator dan profesional yang sudah
            memanfaatkan Datacakra Links untuk memaksimalkan setiap klik.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex gap-2.5 max-w-[440px] mx-auto mb-4">
            <input
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value.replace(/[^a-zA-Z0-9_-]/g, "").toLowerCase(),
                )
              }
              placeholder="Pilih username kamu"
              className="flex-1 bg-[#181818] border border-[#2A2A2A] rounded-[10px] px-4 py-3.5
                text-[#F0EBE0] text-[14px] outline-none focus:border-[#C8FF00]/40
                placeholder:text-[#444] transition-colors"
            />
            <AccentButton
              href="#"
              className="text-[14px] px-5 py-3.5 shrink-0 rounded-[10px]"
            >
              Mulai Gratis →
            </AccentButton>
          </div>
          <p className="text-[12px] text-[#555]">
            links.datacakra.dev/
            <span className="text-[#C8FF00] font-bold">
              {username || "username"}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Cta;
