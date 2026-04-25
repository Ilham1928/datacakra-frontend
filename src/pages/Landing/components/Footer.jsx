import React from "react";

const Footer = () => {
  const FOOTER_COLS = [
    {
      title: "Produk",
      links: ["Fitur", "Harga", "Changelog", "Roadmap", "API Docs"],
    },
    {
      title: "Perusahaan",
      links: ["Tentang Kami", "Blog", "Karir", "Press Kit", "Kontak"],
    },
    {
      title: "Legal",
      links: [
        "Syarat & Ketentuan",
        "Kebijakan Privasi",
        "Cookie Policy",
        "GDPR",
      ],
    },
  ];

  return (
    <footer className="bg-[#0F0F0F] border-t border-[#1E1E1E] pt-16 pb-10 px-6">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-[34px] h-[34px] rounded-[9px] bg-[#C8FF00] flex items-center
                justify-center text-[#080808] text-base"
              >
                🔗
              </div>
              <span className="font-[Syne,sans-serif] font-extrabold text-[16px] text-[#F0EBE0]">
                Datacakra Links
              </span>
            </div>
            <p className="text-[13px] text-[#888] leading-[1.7] mb-5 max-w-[240px]">
              Platform link-in-bio terbaik untuk kreator, developer, dan
              profesional Indonesia.
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "ig", "gh"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-[34px] h-[34px] rounded-lg bg-[#181818] border border-[#2A2A2A]
                    flex items-center justify-center text-[#888] text-[13px] no-underline
                    hover:text-[#F0EBE0] hover:bg-[#1E1E1E] transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <p className="font-[Syne,sans-serif] font-bold text-[13px] text-[#F0EBE0] mb-4">
                {col.title}
              </p>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link, j) => (
                  <a
                    key={j}
                    href="#"
                    className="text-[13px] text-[#888] no-underline hover:text-[#F0EBE0] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3
          pt-7 border-t border-[#1E1E1E] text-[12px] text-[#555]"
        >
          <span>
            © 2026 Datacakra Links. Dibuat dengan ♥ di Jakarta, Indonesia.
          </span>
          <span>
            Made by{" "}
            <a href="#" className="text-[#C8FF00] no-underline">
              @datacakra
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
