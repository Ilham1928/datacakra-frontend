/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";

const DEFAULT_ICONS = [
  "mdi:web",
  "mdi:github",
  "mdi:linkedin",
  "mdi:instagram",
  "mdi:twitter",
  "mdi:youtube",
  "mdi:email",
  "mdi:phone",
  "mdi:briefcase",
  "mdi:school",
  "mdi:shopping",
  "mdi:file-document",
  "mdi:video",
  "mdi:chart-bar",
  "mdi:rocket-launch",
  "mdi:lightbulb",
  "mdi:target",
  "mdi:link",
  "mdi:code-tags",
  "mdi:store",
];

async function searchIcons(query) {
  if (!query.trim()) return DEFAULT_ICONS;
  try {
    const res = await fetch(
      `https://api.iconify.design/search?query=${encodeURIComponent(query)}&limit=30&prefixes=mdi`,
    );
    const data = await res.json();
    return data.icons ?? DEFAULT_ICONS;
  } catch {
    return DEFAULT_ICONS;
  }
}

/* ─── Icon Picker ────────────────────────────────────────── */
const IconPicker = ({ value, onChange }) => {
  const [query, setQuery] = useState("");
  const [icons, setIcons] = useState(DEFAULT_ICONS);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  const runSearch = useCallback((q) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      const result = await searchIcons(q);
      setIcons(result);
      setLoading(false);
    }, 350);
  }, []);

  useEffect(() => {
    runSearch(query);
  }, [query]);

  return (
    <div className="space-y-2">
      {/* Search + Preview row */}
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]"
            width={16}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari icon… (misal: home, link, star)"
            className="w-full bg-[#181818] border border-[#222] rounded-[10px] pl-8 pr-3 py-2.25
              text-[#F0EBE0] text-[13px] outline-none focus:border-[#C8FF00]/40 transition-colors
              placeholder:text-[#444]"
          />
          {loading && (
            <Icon
              icon="mdi:loading"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] animate-spin"
              width={14}
            />
          )}
        </div>

        {/* Preview box */}
        <div
          className="w-10 h-10 shrink-0 rounded-[10px] border border-[#C8FF00]/30
            bg-[#C8FF00]/10 flex items-center justify-center"
          title={value}
        >
          <Icon icon={value} width={22} className="text-[#C8FF00]" />
        </div>
      </div>

      {/* Selected label */}
      <p className="text-[11px] text-[#555] font-mono truncate pl-0.5">
        {value}
      </p>

      {/* Icon grid */}
      <div
        className="grid grid-cols-6 gap-1.5 max-h-42 overflow-y-auto
        scrollbar-thin scrollbar-thumb-[#2a2a2a] scrollbar-track-transparent p-2"
      >
        {icons.length === 0 && !loading && (
          <p className="col-span-6 text-center text-[#555] text-[12px] py-4">
            Icon tidak ditemukan
          </p>
        )}
        {icons.map((icon) => (
          <button
            key={icon}
            type="button"
            onClick={() => onChange(icon)}
            title={icon.split(":")[1]}
            className={`aspect-square rounded-lg flex items-center justify-center
              transition-all duration-100 cursor-pointer border
              ${
                value === icon
                  ? "bg-[#C8FF00]/10 border-[#C8FF00]/40 text-[#C8FF00] scale-105"
                  : "bg-[#181818] border-[#222] text-[#888] hover:border-[#2A2A2A] hover:text-[#F0EBE0] hover:bg-[#1E1E1E]"
              }`}
          >
            <Icon icon={icon} width={18} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconPicker;
