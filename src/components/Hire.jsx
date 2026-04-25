import { useState } from "react";
import { Icon } from "@iconify/react";

const SERVICES = [
  { icon: "mdi:code-braces", label: "Full-Stack Web Dev" },
  { icon: "mdi:cellphone", label: "Mobile App" },
  { icon: "mdi:database-outline", label: "Backend & API" },
  { icon: "mdi:palette-outline", label: "UI/UX Implementation" },
];

const CONTACTS = [
  {
    icon: "mdi:email-outline",
    label: "Email",
    val: "ilham@codeprime.dev",
    href: "mailto:ilham@codeprime.dev",
  },
  {
    icon: "mdi:whatsapp",
    label: "WhatsApp",
    val: "+62 812-XXXX-XXXX",
    href: "#",
  },
  {
    icon: "mdi:linkedin",
    label: "LinkedIn",
    val: "linkedin.com/in/codeprime",
    href: "#",
  },
];

const TABS = ["Overview", "Services", "Contact"];

export default function HireMeModal({ open, onClose }) {
  const [tab, setTab] = useState("Overview");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inp = `w-full bg-[#0e0e0e] border border-[#222] rounded-xl px-3.5 py-2.5
    text-[#e0ddd5] text-sm outline-none focus:border-[#C8FF00]/40
    transition-colors placeholder:text-[#3a3a3a]`;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md bg-[#111] border border-[#222] rounded-2xl overflow-hidden"
        style={{ animation: "fadeUp .25s cubic-bezier(.34,1.56,.64,1) both" }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#1a1a1a]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl bg-[#C8FF00]/10 border border-[#C8FF00]/25
                flex items-center justify-center"
              >
                <Icon
                  icon="mdi:handshake-outline"
                  width={20}
                  className="text-[#C8FF00]"
                />
              </div>
              <div>
                <p className="font-bold text-[15px] text-[#e0ddd5]">Hire Me</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E096] animate-pulse" />
                  <span className="text-[11px] text-[#00E096]">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#181818] border border-[#222] flex items-center
                justify-center text-[#555] hover:text-[#e0ddd5] hover:bg-[#1e1e1e] transition-all"
            >
              <Icon icon="mdi:close" width={14} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-4 bg-[#0e0e0e] rounded-xl p-1">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-1.5 rounded-lg text-[12px] font-semibold transition-all
                  ${
                    tab === t
                      ? "bg-[#1a1a1a] text-[#e0ddd5] border border-[#252525]"
                      : "text-[#555] hover:text-[#888]"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* ── Overview ── */}
          {tab === "Overview" && (
            <div className="space-y-4">
              <p className="text-[13px] text-[#777] leading-relaxed">
                Halo! Saya{" "}
                <span className="text-[#e0ddd5] font-medium">
                  Muhammad Ilham Pratama
                </span>
                , full-stack developer dengan 7+ tahun pengalaman di healthcare,
                SaaS, dan fintech.
              </p>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { n: "7+", l: "Tahun" },
                  { n: "50+", l: "Project" },
                  { n: "98%", l: "Puas" },
                ].map(({ n, l }) => (
                  <div
                    key={l}
                    className="p-3 bg-[#0e0e0e] border border-[#1a1a1a] rounded-xl text-center"
                  >
                    <p className="text-lg font-black text-[#C8FF00]">{n}</p>
                    <p className="text-[11px] text-[#555] mt-0.5">{l}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "Vue 3",
                  "React",
                  "Laravel",
                  "React Native",
                  "Tailwind",
                  "TypeScript",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#0e0e0e] border border-[#1a1a1a]
                    rounded-lg text-[11px] text-[#666]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setTab("Contact")}
                className="w-full flex items-center justify-center gap-2 bg-[#C8FF00] text-[#080808]
                  py-2.5 rounded-xl text-[13px] font-bold
                  hover:shadow-[0_6px_20px_rgba(200,255,0,0.2)] hover:-translate-y-0.5 transition-all"
              >
                <Icon icon="mdi:send-outline" width={15} />
                Hubungi Sekarang
              </button>
            </div>
          )}

          {/* ── Services ── */}
          {tab === "Services" && (
            <div className="space-y-2.5">
              {SERVICES.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 p-3.5 bg-[#0e0e0e] border border-[#1a1a1a]
                    rounded-xl hover:border-[#222] transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-[#C8FF00]/10 border border-[#C8FF00]/20
                    flex items-center justify-center flex-shrink-0"
                  >
                    <Icon icon={s.icon} width={16} className="text-[#C8FF00]" />
                  </div>
                  <span className="text-[13px] text-[#888] font-medium">
                    {s.label}
                  </span>
                  <Icon
                    icon="mdi:chevron-right"
                    width={14}
                    className="text-[#333] ml-auto"
                  />
                </div>
              ))}

              <div className="p-3.5 bg-[#C8FF00]/5 border border-[#C8FF00]/15 rounded-xl">
                <p className="text-[12px] text-[#888] leading-relaxed">
                  Harga mulai dari{" "}
                  <span className="text-[#C8FF00] font-bold">Rp 3.5jt</span>.
                  Konsultasi gratis 30 menit, tidak ada biaya tersembunyi.
                </p>
              </div>
            </div>
          )}

          {/* ── Contact ── */}
          {tab === "Contact" && (
            <>
              {sent ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div
                    className="w-12 h-12 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/25
                    flex items-center justify-center mb-3"
                  >
                    <Icon
                      icon="mdi:check-circle-outline"
                      width={26}
                      className="text-[#C8FF00]"
                    />
                  </div>
                  <p className="font-bold text-[#e0ddd5] mb-1">Terkirim!</p>
                  <p className="text-[13px] text-[#555]">
                    Saya akan balas dalam 1×24 jam.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Quick links */}
                  <div className="space-y-1.5 mb-4">
                    {CONTACTS.map(({ icon, label, val, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#0e0e0e]
                          transition-colors group"
                      >
                        <Icon
                          icon={icon}
                          width={16}
                          className="text-[#555] group-hover:text-[#C8FF00] transition-colors"
                        />
                        <span className="text-[12px] text-[#555]">{label}</span>
                        <span className="text-[12px] text-[#888] ml-auto group-hover:text-[#e0ddd5] transition-colors">
                          {val}
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="border-t border-[#1a1a1a] pt-3 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        name="name"
                        placeholder="Nama"
                        className={inp}
                        onChange={handle}
                      />
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={inp}
                        onChange={handle}
                      />
                    </div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Ceritakan projectmu..."
                      className={`${inp} resize-none`}
                      onChange={handle}
                    />
                    <button
                      onClick={submit}
                      className="w-full flex items-center justify-center gap-2 bg-[#C8FF00]
                        text-[#080808] py-2.5 rounded-xl text-[13px] font-bold
                        hover:shadow-[0_6px_20px_rgba(200,255,0,0.2)] hover:-translate-y-0.5 transition-all"
                    >
                      <Icon icon="mdi:send" width={14} />
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }`}</style>
    </div>
  );
}
