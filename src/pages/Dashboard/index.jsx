import React from "react";
import { Icon } from "@iconify/react";
import Toast from "../../components/Toast";
import TopLinksCard from "./components/TopLinkCard";
import ChartCard from "./components/ChartCard";
import LineChart from "./components/LineChart";
import StatusBadge from "./components/StatusBadge";
import Card from "./components/Card";
import SectionLabel from "./components/SectionLabel";
import StatCard from "./components/StatusCard";
import ActivityFeed from "./components/ActivityFeed";
import { getDate } from "../../utilities/date-converter";

const STAT_CONFIG = [
  {
    label: "Total Klik",
    target: 12847,
    suffix: "",
    emoji: "basil:cursor-solid",
    glow: "bg-[#C8FF00]",
    iconBg: "bg-[#C8FF00]/10",
    iconText: "",
    spark: "0,28 13,22 26,25 39,14 52,18 65,8 80,4",
    sparkColor: "#C8FF00",
    change: "+18.4% dari bulan lalu",
    changeType: "up",
    delay: 0.15,
  },
  {
    label: "Pengunjung Unik",
    target: 3241,
    suffix: "",
    emoji: "flowbite:user-solid",
    glow: "bg-[#4D94FF]",
    iconBg: "bg-[#4D94FF]/10",
    iconText: "text-[#4D94FF]",
    spark: "0,26 13,24 26,20 39,22 52,14 65,10 80,7",
    sparkColor: "#4D94FF",
    change: "+9.2% dari bulan lalu",
    changeType: "up",
    delay: 0.2,
  },
  {
    label: "Link Aktif",
    target: 6,
    suffix: "",
    emoji: "material-symbols:link-rounded",
    glow: "bg-[#00E096]",
    iconBg: "bg-[#00E096]/10",
    iconText: "text-[#00E096]",
    spark: "0,20 13,20 26,20 39,16 52,16 65,16 80,12",
    sparkColor: "#00E096",
    change: "Sama seperti minggu lalu",
    changeType: "muted",
    delay: 0.25,
  },
  {
    label: "CTR Rata-rata",
    target: 68,
    suffix: "%",
    emoji: "boxicons:chart-line",
    glow: "bg-[#FF9500]",
    iconBg: "bg-[#FF9500]/10",
    iconText: "text-[#FF9500]",
    spark: "0,10 13,12 26,10 39,14 52,16 65,18 80,20",
    sparkColor: "#FF9500",
    change: "-2.1% dari bulan lalu",
    changeType: "down",
    delay: 0.3,
  },
];

const Dashboard = () => {
  const getGreeting = () => {
    const h = new Date().getHours();
    return h < 12 ? "pagi" : h < 15 ? "siang" : h < 18 ? "sore" : "malam";
  };

  return (
    <main className="flex-1 p-7 space-y-5">
      {/* Greeting */}
      <div
        className="flex items-start justify-between"
        style={{ animation: "fadeUp 0.5s ease 0.1s both" }}
      >
        <div>
          <h1 className="font-[Syne,sans-serif] font-extrabold text-[26px] tracking-tight text-[#F0EBE0] leading-snug">
            Selamat {getGreeting()}, Ilham
          </h1>
          <p className="text-[13px] text-[#888] mt-1">{getDate()}</p>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 bg-[#00E096]/8 border border-[#00E096]/20
                  rounded-full px-3.5 py-1.5 text-[12px] text-[#00E096] font-[Syne,sans-serif]
                  font-semibold no-underline hover:bg-[#00E096]/12 transition-colors"
        >
          <span
            className="w-1.75 h-1.75 rounded-full bg-[#00E096]"
            style={{ animation: "pulse-dot 2s ease infinite" }}
          />
          Profil Live ↗``
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3.5">
        {STAT_CONFIG.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* Chart + Top Links */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-3.5">
        <ChartCard />
        <TopLinksCard />
      </div>

      {/* Table + Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-3.5">
        {/* <LinksTable
                links={links}
                onDelete={handleDelete}
                onToast={showToast}
                onAdd={() => setModalOpen(true)}
              /> */}
        <ActivityFeed />
      </div>
    </main>
  );
};

export default Dashboard;
