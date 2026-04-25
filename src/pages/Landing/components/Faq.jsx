import React, { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const Faq = () => {
  const FAQS = [
    {
      q: "Apakah Datacakra Links benar-benar gratis?",
      a: "Ya! Plan Free kami benar-benar gratis selamanya tanpa perlu kartu kredit. Kamu bisa buat profil, tambahkan hingga 10 link, dan dapatkan analytics dasar tanpa biaya apapun.",
    },
    {
      q: "Bedanya Datacakra Links dengan Linktree?",
      a: "Datacakra Links dibangun khusus untuk kreator Indonesia — tampilan lebih premium, analytics lebih detail, harga jauh lebih terjangkau, dan support dalam Bahasa Indonesia. Plus, data kamu disimpan di server Indonesia.",
    },
    {
      q: "Bisakah saya pakai domain sendiri?",
      a: "Ya, fitur custom domain tersedia di plan Datacakra Link Pro ke atas. Kamu tinggal pointing DNS domain kamu ke server kami, dan profil kamu akan berjalan di domain milikmu sendiri.",
    },
    {
      q: "Apakah ada batas jumlah klik atau pengunjung?",
      a: "Tidak ada! Semua plan termasuk bandwidth dan traffic tidak terbatas. Kamu tidak akan dikenakan biaya tambahan apapun meski profil kamu viral sekalipun.",
    },
    {
      q: "Bagaimana cara upgrade atau downgrade plan?",
      a: "Kamu bisa upgrade atau downgrade kapanpun dari halaman Billing di dashboard. Perubahan berlaku langsung, dan billing akan disesuaikan secara prorata.",
    },
    {
      q: "Metode pembayaran apa yang diterima?",
      a: "Kami menerima transfer bank, GoPay, OVO, Dana, QRIS, dan kartu kredit/debit Visa/Mastercard. Semua pembayaran diproses aman melalui Midtrans.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="max-w-[760px] mx-auto px-6 pb-32">
      <div className="text-center mb-14">
        <Reveal>
          <SectionLabel text="FAQ" center />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-[Syne,sans-serif] font-extrabold text-[#F0EBE0] leading-[1]"
            style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-2px" }}
          >
            Pertanyaan yang
            <br />
            sering ditanyakan.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="border border-[#1E1E1E] rounded-2xl overflow-hidden">
          {FAQS.map((item, i) => (
            <div key={i} className="border-b border-[#1E1E1E] last:border-b-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 px-7 py-[22px] text-left
                  font-[Syne,sans-serif] font-semibold text-[15px] cursor-pointer border-0 bg-transparent
                  transition-all duration-200
                  ${open === i ? "text-[#C8FF00] bg-[#C8FF00]/[0.02]" : "text-[#F0EBE0] hover:bg-[#181818]"}`}
              >
                {item.q}
                <span
                  className={`shrink-0 text-[20px] transition-all duration-300
                  ${open === i ? "rotate-180 text-[#C8FF00]" : "text-[#555]"}`}
                >
                  ▾
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out
                ${open === i ? "max-h-[200px]" : "max-h-0"}`}
              >
                <p className="px-7 pb-6 text-[14px] text-[#888] leading-[1.8]">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Faq;
