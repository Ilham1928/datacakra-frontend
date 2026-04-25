import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Card from "./components/Card";

const MyLink = () => {
  const [toast, setToast] = useState("");

  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const copyEmail = () => {
    const email = "hello@Datacakra.dev";
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email tersalin! 📋");
    });
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".link-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 80}ms`;
      observer.observe(card);
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex justify-center py-10">
      <div className="w-full max-w-sm flex-col flex gap-5">
        {/* Toast */}
        {toast && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#C8FF00] text-black px-5 py-2 rounded-full font-bold z-50">
            {toast}
          </div>
        )}

        {/* Profile */}
        <div className="flex flex-col gap-5 text-center">
          <img
            alt="profile"
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Datacakra&backgroundColor=C8FF00"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <p className="text-white text-sm">
            Full-stack Developer · Jakarta 🇮🇩
          </p>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-3">
          <button onClick={() => openLink("https://github.com")}>
            <Icon icon="mdi:github" width={24} />
          </button>
          <button onClick={() => openLink("https://linkedin.com")}>
            <Icon icon="mdi:linkedin" width={24} />
          </button>
          <button onClick={() => openLink("https://twitter.com")}>
            <Icon icon="ri:twitter-x-fill" width={24} />
          </button>
          <button onClick={() => openLink("https://instagram.com")}>
            <Icon icon="mdi:instagram" width={24} />
          </button>
          <button onClick={copyEmail}>
            <Icon icon="mdi:email-outline" width={24} />
          </button>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <Card
            title="Portfolio Website"
            desc="Datacakra.dev"
            icon="heroicons:globe-alt-solid"
            onClick={() => openLink("https://Datacakra.dev")}
          />

          <Card
            title="Datacakra POS"
            desc="Point of Sale System"
            icon="heroicons:computer-desktop-solid"
            onClick={() => openLink("#")}
          />

          <Card
            title="Datacakra Links"
            desc="Link in bio platform"
            icon="heroicons:link-solid"
            onClick={() => openLink("#")}
          />

          <Card
            title="Hire Me"
            desc="Freelance available"
            icon="heroicons:bolt-solid"
            onClick={copyEmail}
          />
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500">Datacakra © 2026</p>
      </div>
    </div>
  );
};

export default MyLink;
