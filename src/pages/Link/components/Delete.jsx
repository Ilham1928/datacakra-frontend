import React from "react";
import { api } from "../../../utilities/api";

const Delete = ({ open, linkName, onCancel, onConfirm, linkId }) => {
  if (!open) return null;

  const remove = async () => {
    const response = await api.delete(`link/${linkId}`);

    if (response.code >= 200 && response.code < 300) {
      onCancel();
      onConfirm();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-md z-501
      flex items-center justify-center p-6"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div
        className="bg-[#111111] border border-[#2A2A2A] rounded-[18px] p-7 w-full max-w-95"
        style={{ animation: "fadeUp 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        <div
          className="w-13 h-13 rounded-2xl bg-[#FF4D4D]/10 border border-[#FF4D4D]/20
          flex items-center justify-center text-[24px] mb-4"
        >
          🗑
        </div>
        <p className="font-[Syne,sans-serif] font-extrabold text-[18px] text-[#F0EBE0] mb-2">
          Hapus Link?
        </p>
        <p className="text-[13px] text-[#888] leading-relaxed mb-6">
          Link <strong className="text-[#F0EBE0]">{linkName}</strong> akan
          dihapus permanen dan tidak dapat dikembalikan.
        </p>
        <div className="flex gap-2.5">
          <button
            onClick={onCancel}
            className="flex-1 bg-[#181818] border border-[#222] rounded-[10px] py-2.75
              text-[#888] font-[Syne,sans-serif] font-semibold text-[14px] cursor-pointer
              hover:text-[#F0EBE0] transition-all"
          >
            Batal
          </button>
          <button
            onClick={() => remove()}
            className="flex-1 bg-[#FF4D4D] border-0 rounded-[10px] py-2.75 text-white
              font-[Syne,sans-serif] font-bold text-[14px] cursor-pointer
              hover:brightness-110 transition-all"
          >
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
