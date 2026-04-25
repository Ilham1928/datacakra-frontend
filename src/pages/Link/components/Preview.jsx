import React from "react";

const Preview = ({ links }) => {
  const MAX_LINKS = 10;
  const active = [...links]
    .filter((l) => l.status === "active")
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      <p className="font-[Syne,sans-serif] font-bold text-[13px] text-[#F0EBE0] mb-1">
        Pratinjau Profil
      </p>
      <p className="text-[11px] text-[#555] mb-5">
        Tampilan real-time di halaman bio kamu
      </p>

      {/* phone frame */}
      <div
        className="w-[200px] mx-auto bg-[#0A0A0A] border-[1.5px] border-[#2A2A2A] rounded-[32px]
        px-3 pt-5 pb-5 shadow-[0_32px_64px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]"
      >
        <div className="w-12 h-[4px] rounded-full bg-[#2A2A2A] mx-auto mb-4" />

        <div className="flex flex-col items-center mb-3.5">
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8FF00] to-[#00FFB2]
            flex items-center justify-center font-[Syne,sans-serif] font-extrabold text-[14px]
            text-[#080808] mb-1.5 shadow-[0_0_0_3px_rgba(200,255,0,0.2)]"
          >
            CP
          </div>
          <p className="font-[Syne,sans-serif] font-extrabold text-[10px] text-[#F0EBE0]">
            @datacakra
          </p>
          <p className="text-[8px] text-[#555] mt-0.5">Full-stack Developer</p>
        </div>

        <div className="flex flex-col gap-1.5">
          {active.length === 0 && (
            <p className="text-center text-[9px] text-[#444] py-3">
              Belum ada link aktif
            </p>
          )}
          {active.map((l) => (
            <div
              key={l.id}
              className="flex items-center gap-1.5 bg-[#181818] border border-[#222]
                rounded-[8px] px-2 py-1.5"
            >
              <div
                className="w-4 h-4 rounded-[4px] bg-[#1E1E1E] border border-[#2A2A2A]
                flex items-center justify-center text-[9px] shrink-0"
              >
                {l.emoji}
              </div>
              <p className="font-[Syne,sans-serif] font-bold text-[8px] text-[#F0EBE0] flex-1 truncate">
                {l.title}
              </p>
              <span className="text-[#333] text-[8px]">↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* quota */}
      <div className="mt-4 bg-[#111] border border-[#222] rounded-xl p-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] text-[#888]">Link terpakai</span>
          <span className="font-[Syne,sans-serif] font-bold text-[11px] text-[#C8FF00]">
            {links.length} / {MAX_LINKS}
          </span>
        </div>
        <div className="h-[3px] rounded-full bg-[#222] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#C8FF00] transition-all duration-500"
            style={{
              width: `${Math.min((links.length / MAX_LINKS) * 100, 100)}%`,
            }}
          />
        </div>
        <p className="text-[10px] text-[#555] mt-1.5">
          Upgrade ke Pro untuk link tak terbatas.
        </p>
      </div>

      {/* upgrade cta */}
      <div className="mt-3 bg-[#C8FF00]/[0.07] border border-[#C8FF00]/20 rounded-xl p-3">
        <p className="font-[Syne,sans-serif] font-bold text-[11px] text-[#C8FF00] mb-1">
          ✦ Kustomisasi Tampilan
        </p>
        <p className="text-[10px] text-[#555] leading-relaxed">
          Ubah warna, font & background dengan{" "}
          <strong className="text-[#C8FF00]">Datacakra Pro</strong>.
        </p>
      </div>
    </div>
  );
};

export default Preview;
