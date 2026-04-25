import React from "react";

const BulkBar = ({ count, onActivate, onPause, onDelete, onClear }) => {
  if (count === 0) return null;
  return (
    <div
      className="flex items-center justify-between bg-[#C8FF00]/[0.07] border border-[#C8FF00]/20
      rounded-xl px-4 py-2.5 mb-3"
      style={{ animation: "fadeUp 0.3s ease both" }}
    >
      <span className="font-[Syne,sans-serif] font-bold text-[13px] text-[#C8FF00]">
        {count} link dipilih
      </span>
      <div className="flex items-center gap-2">
        {[
          {
            label: "Aktifkan",
            cls: "bg-[#00E096]/10 text-[#00E096]",
            fn: onActivate,
          },
          {
            label: "Pause",
            cls: "bg-[#FF9500]/10 text-[#FF9500]",
            fn: onPause,
          },
          {
            label: "Hapus",
            cls: "bg-[#FF4D4D]/10 text-[#FF4D4D]",
            fn: onDelete,
          },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.fn}
            className={`text-[12px] font-medium px-3 py-1.5 rounded-lg cursor-pointer
              border-0 hover:brightness-125 transition-all ${btn.cls}`}
          >
            {btn.label}
          </button>
        ))}
        <button
          onClick={onClear}
          className="bg-[#1E1E1E] text-[#888] text-[12px] font-medium px-3 py-1.5
            rounded-lg cursor-pointer border-0 hover:text-[#F0EBE0] transition-colors"
        >
          Batal
        </button>
      </div>
    </div>
  );
};

export default BulkBar;
