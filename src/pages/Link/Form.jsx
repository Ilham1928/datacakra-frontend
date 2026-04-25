/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { api } from "../../utilities/api";
import IconPicker from "./components/IconPicker";
import { toast } from "../../utilities/toast";

const COLOR_OPTIONS = [
  "#C8FF00",
  "#38BDF8",
  "#A78BFA",
  "#FCD34D",
  "#FF6B9D",
  "#00E096",
  "#FF9500",
  "#FF4D4D",
];

const Form = ({ open, onClose, editingLink }) => {
  const isEdit = !!editingLink;

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("mdi:web");
  const [color, setColor] = useState("#C8FF00");
  const [status, setStatus] = useState("active");
  const [target, setTarget] = useState("new_tab");

  useEffect(() => {
    if (isEdit) {
      setTitle(editingLink?.title || "");
      setUrl(editingLink?.url || "");
      setIcon(editingLink?.emoji || "");
      setStatus(editingLink?.status || "");
      setTarget(editingLink?.openType || "");
      setColor(editingLink?.color || "");
    }
  }, [isEdit, editingLink]);

  const save = async () => {
    const response = await api.post(`link/${editingLink?.id || ""}`, {
      title: title.trim(),
      url: url,
      icon: icon,
      color: color,
      status: status,
      openType: target,
    });

    if (response.code >= 200 && response.code < 300) {
      toast.emit({
        show: true,
        title: "Success",
        detail: `Success to ${isEdit ? "update" : "create new"} link!`,
      });

      setTitle("");
      setUrl("");
      setIcon("mdi:web");
      setColor("#C8FF00");
      setStatus("active");
      setTarget("new_tab");
      onClose();
    }
  };

  if (!open) return null;

  const inp = `w-full bg-[#181818] border border-[#222] rounded-[10px] px-3.5 py-[11px]
    text-[#F0EBE0] text-[14px] outline-none focus:border-[#C8FF00]/40
    transition-colors placeholder:text-[#444]`;

  const lbl =
    "block text-[11px] font-medium text-[#888] tracking-[0.5px] uppercase mb-1.5";

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-md z-50
        flex items-center justify-center p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-[#111111] border border-[#2A2A2A] rounded-[18px] p-7 w-full max-w-115
          max-h-[90vh] overflow-y-auto"
        style={{ animation: "fadeUp 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="font-extrabold text-[18px] text-[#F0EBE0]">
              {isEdit ? "Edit Link" : "✦ Tambah Link Baru"}
            </p>
            <p className="text-[13px] text-[#888] mt-0.5">
              {isEdit
                ? "Perbarui informasi link."
                : "Isi detail link yang ingin ditampilkan."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#181818] border border-[#222] flex items-center
              justify-center text-[#555] cursor-pointer
              hover:text-[#F0EBE0] hover:bg-[#1E1E1E] transition-all"
          >
            <Icon icon="mdi:close" width={14} />
          </button>
        </div>

        {/* Icon Picker */}
        <div className="mb-4">
          <label className={lbl}>Ikon Link</label>
          <IconPicker value={icon} onChange={setIcon} />
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E1E1E] my-4" />

        {/* Color */}
        <div className="mb-4">
          <label className={lbl}>Warna Aksen</label>
          <div className="flex items-center gap-2 flex-wrap">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className="w-7 h-7 rounded-full cursor-pointer transition-all duration-150"
                style={{
                  background: c,
                  border: `2px solid ${c === color ? "#fff" : "transparent"}`,
                  boxShadow:
                    c === color ? `0 0 0 3px rgba(255,255,255,0.15)` : "none",
                  transform: c === color ? "scale(1.15)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className={lbl}>Judul Link</label>
          <input
            className={inp}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="cth. Portfolio Website"
          />
        </div>

        {/* URL */}
        <div className="mb-4">
          <label className={lbl}>URL Tujuan</label>
          <input
            className={inp}
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>

        {/* Status + Target */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div>
            <label className={lbl}>Status</label>
            <select
              className={`${inp} cursor-pointer`}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Aktif</option>
              <option value="paused">Paused</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div>
            <label className={lbl}>Buka di</label>
            <select
              className={`${inp} cursor-pointer`}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            >
              <option value="new_tab">Tab baru</option>
              <option value="redirect">Tab ini</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2.5">
          <button
            onClick={onClose}
            className="flex-1 bg-[#181818] border border-[#222] rounded-[10px] py-2.75
              text-[#888] font-semibold text-[14px] cursor-pointer
              hover:text-[#F0EBE0] hover:border-[#2A2A2A] transition-all"
          >
            Batal
          </button>
          <button
            onClick={save}
            className="flex-[1.5] flex items-center justify-center gap-2 bg-[#C8FF00]
              rounded-[10px] py-2.75 text-[#080808] font-bold text-[14px] cursor-pointer
              hover:shadow-[0_8px_20px_rgba(200,255,0,0.25)] hover:-translate-y-px transition-all"
          >
            <Icon icon="mdi:check" width={16} />
            Simpan Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
