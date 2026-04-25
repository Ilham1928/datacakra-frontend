import React from "react";

const Empty = ({ onAdd }) => {
  return (
    <div
      className="flex flex-col items-center text-center py-16"
      style={{ animation: "fadeUp 0.4s ease both" }}
    >
      <div
        className="w-16 h-16 rounded-2xl bg-[#C8FF00]/8 border border-[#C8FF00]/20
        flex items-center justify-center text-[28px] mb-4 text-[#C8FF00]"
      >
        🔗
      </div>
      <h3 className="font-[Syne,sans-serif] font-bold text-[18px] text-[#F0EBE0] mb-2">
        Tidak ada link ditemukan
      </h3>
      <p className="text-[13px] text-[#888] leading-relaxed mb-6">
        Coba ubah filter atau kata kunci, atau tambahkan link baru.
      </p>
      <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-[#C8FF00] text-[#080808] font-[Syne,sans-serif]
          font-bold text-[14px] rounded-xl px-5 py-2.5 cursor-pointer border-0
          hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,255,0,0.3)] transition-all"
      >
        + Tambah Link Pertama
      </button>
    </div>
  );
};

export default Empty;
