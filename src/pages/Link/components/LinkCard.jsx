import React from "react";
import CardButton from "./CardButton";
import Toggle from "./Toggle";
import StatusPill from "./StatusPill";
import { Icon } from "@iconify/react";

const LinkCard = (props) => {
  const {
    link,
    selected,
    animDelay,
    isDragging,
    isDragOver,
    onSelect,
    onToggle,
    onEdit,
    onDelete,
    onCopy,
  } = props;

  const fmt = (n) => Number(n).toLocaleString("id-ID");

  return (
    <div
      className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl border
        transition-all duration-200 select-none
        ${link.status !== "active" ? "opacity-55" : ""}
        ${isDragging ? "opacity-50 scale-[1.01] border-[#C8FF00]/30 bg-[#111] shadow-[0_12px_40px_rgba(200,255,0,0.1)] cursor-grabbing" : ""}
        ${isDragOver ? "border-[#C8FF00]/30 bg-[#C8FF00]/2.5" : ""}
        ${selected && !isDragging && !isDragOver ? "border-[#C8FF00]/25 bg-[#C8FF00]/2.5" : ""}
        ${!isDragging && !isDragOver && !selected ? "bg-[#111] border-[#222] hover:border-[#2C2C2C] hover:shadow-[0_6px_24px_rgba(0,0,0,0.3)]" : "bg-[#111]"}`}
      style={{ animation: `fadeUp 0.4s ease ${animDelay}s both` }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        className={`w-3.75 h-3.75 rounded-sm border shrink-0 cursor-pointer relative
          transition-all duration-150
          ${
            selected
              ? "bg-[#C8FF00] border-[#C8FF00]"
              : "bg-[#181818] border-[#2C2C2C] hover:border-[#444]"
          }`}
      >
        {selected && (
          <svg
            className="absolute inset-0 w-full h-full p-0.5"
            viewBox="0 0 12 12"
            fill="none"
          >
            <polyline
              points="2,6 5,9 10,3"
              stroke="#080808"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* emoji */}
      <Icon
        className="rounded-xl bg-[#181818] border border-[#222]
        flex items-center justify-center text-xl shrink-0
        transition-transform duration-200 group-hover:scale-105"
        width={15}
        icon={link.emoji}
      />

      {/* body */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p className="font-[Syne,sans-serif] font-bold text-[14px] text-[#F0EBE0] truncate">
            {link.title}
          </p>
          <StatusPill status={link.status} />
        </div>
        <p className="text-[12px] text-[#555] truncate">{link.url}</p>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="flex items-center gap-1 text-[11px] text-[#777]">
            <span className="text-[#C8FF00] text-[10px]">↗</span>
            {fmt(link.clicks)} klik
          </span>
          <span className="text-[11px] text-[#777]">
            # Urutan {link.order + 1}
          </span>
        </div>
      </div>

      {/* clicks badge */}
      <div
        className="hidden sm:flex items-center gap-1.5 bg-[#181818] border border-[#222]
        rounded-full px-2.5 py-1 shrink-0"
      >
        <span className="text-[#C8FF00] text-[10px]">↗</span>
        <span className="font-[Syne,sans-serif] font-bold text-[11px] text-[#C8FF00]">
          {link.clicks >= 1000
            ? (link.clicks / 1000).toFixed(1) + "k"
            : link.clicks}
        </span>
      </div>

      {/* toggle */}
      <Toggle on={link.status === "active"} onChange={onToggle} />

      {/* action buttons */}
      <div className="flex items-center gap-1.5">
        <CardButton emoji="mdi:pencil" title="Edit" onClick={onEdit} />
        <CardButton
          emoji="solar:copy-bold"
          title="Salin URL"
          onClick={onCopy}
        />
        <CardButton
          emoji="↗"
          title="Buka URL"
          onClick={() => window.open(link.url, "_blank")}
        />
        <CardButton emoji="mdi:trash" title="Hapus" onClick={onDelete} />
      </div>
    </div>
  );
};

export default LinkCard;
