import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Mobile from "./components/Mobile";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Features from "./components/Features";
import StatsBand from "./components/StatsBand";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; background: #080808; color: #F0EBE0; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0);     }
          50%      { transform: translateY(-10px); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(200,255,0,0.4); }
          50%      { box-shadow: 0 0 0 6px rgba(200,255,0,0); }
        }
        select option { background: #181818; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; }
      `}</style>

      <div className="min-h-screen bg-[#080808] text-[#F0EBE0] overflow-x-hidden">
        {/* grain */}
        <div
          className="fixed inset-0 pointer-events-none z-[8999] opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />

        <Navbar mobileOpen={menuOpen} setMobileOpen={setMenuOpen} />
        <Mobile open={menuOpen} onClose={() => setMenuOpen(false)} />

        <Hero />
        <Ticker />
        <Features />
        <StatsBand />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
