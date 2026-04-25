import React, { useState } from "react";
import NavGroup from "./NavGroup";
import NavLink from "./NavLink";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const segments = location.pathname.split("/");
  const segment2 = segments[2] || "dashboard";
  const [myLink] = useState(JSON.parse(localStorage.getItem("raw"))?.url || "");

  const NAV_MAIN = [
    {
      id: "dashboard",
      emoji: "ant-design:dashboard-filled",
      label: "Overview",
      badge: null,
      url: "dashboard",
    },
    {
      id: "link",
      emoji: "dashicons:admin-links",
      label: "Kelola Link",
      badge: "6",
      url: "dashboard/link",
    },
    {
      id: "appearance",
      emoji: "pajamas:appearance",
      label: "Tampilan",
      badge: null,
      url: "dashboard/appearance",
    },
  ];
  const NAV_ACCOUNT = [
    {
      id: "setting",
      emoji: "uil:setting",
      label: "Pengaturan",
      url: "dashboard/setting",
    },
    {
      id: "billing",
      emoji: "stash:billing-info-solid",
      label: "Billing",
      url: "dashboard/billing",
    },
    {
      id: "preview",
      emoji: "streamline-plump:browser-website-1-solid",
      label: "Lihat Halaman Saya",
      url: myLink,
    },
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-98 lg:hidden"
          onClick={() => {}}
        />
      )}
      <aside
        className={`min-h-lvh w-60
        flex flex-col bg-[#111111] border-r border-[#222] overflow-hidden
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* accent glow */}
        <div className="absolute -bottom-20 -left-12 w-56 h-56 bg-[#C8FF00] rounded-full blur-[100px] opacity-[0.05] pointer-events-none" />

        {/* brand */}
        <div className="flex items-center gap-2.5 px-5 py-5.5 border-b border-[#222] shrink-0">
          <Icon
            size="40"
            icon="dashicons:admin-links"
            className="w-8.5 h-8.5 rounded-[9px] bg-[#C8FF00] flex items-center justify-center text-[#080808] text-base shrink-0"
          />
          <div>
            <p className="font-[Syne,sans-serif] font-extrabold text-[15px] text-[#F0EBE0] tracking-tight leading-tight">
              Datacakra Links
            </p>
            <p className="text-[10px] text-[#555]">Dashboard</p>
          </div>
        </div>

        {/* nav scroll */}
        <nav
          className="flex-1 overflow-y-auto px-3 py-4"
          style={{ scrollbarWidth: "none" }}
        >
          <NavGroup text="Menu" />
          {NAV_MAIN.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              active={segment2 === item.id}
              onClick={() => navigate(item.url)}
            />
          ))}

          <NavGroup text="Akun" />
          {NAV_ACCOUNT.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              active={segment2 === item.id}
              onClick={() => navigate(item.url)}
            />
          ))}
        </nav>

        {/* profile */}
        <div className="shrink-0 flex items-center gap-2.5 px-4 py-3.5 border-t border-[#222] cursor-pointer hover:bg-[#181818] transition-colors">
          <div
            className="w-8.5 h-8.5 rounded-full bg-linear-to-br from-[#C8FF00] to-[#00FFB2]
            flex items-center justify-center font-[Syne,sans-serif] font-extrabold text-[13px] text-[#080808] shrink-0"
          >
            CP
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-[Syne,sans-serif] font-bold text-[13px] text-[#F0EBE0] truncate">
              Muhammad Ilham
            </p>
            <p className="text-[11px] text-[#555]">@Datacakra</p>
          </div>
          <span className="text-[#555] text-sm">⇅</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
