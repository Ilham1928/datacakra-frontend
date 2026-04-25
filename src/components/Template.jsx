import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import Toast from "./Toast";
import Sidebar from "./Sidebar";
import { toast } from "../utilities/toast";

const Template = () => {
  const [notif, setNotif] = useState({
    show: false,
    title: "",
    detail: "",
  });

  useEffect(() => {
    const handler = (data) => {
      setNotif({
        show: true,
        title: data.title,
        detail: data.detail,
      });

      setTimeout(() => {
        setNotif((prev) => ({ ...prev, show: false }));
      }, 3000);
    };

    toast.subscribe(handler);

    return () => toast.unsubscribe(handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; background: #080808; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,224,150,0.45); }
          50%      { box-shadow: 0 0 0 6px rgba(0,224,150,0); }
        }
      `}</style>

      <div className="flex min-h-screen bg-[#080808] text-[#F0EBE0] overflow-x-hidden">
        {/* noise grain */}
        <div
          className="fixed inset-0 pointer-events-none z-9000 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`,
          }}
        />

        <Sidebar />
        <Outlet />
      </div>

      <Toast {...notif} />
    </>
  );
};

export default Template;
