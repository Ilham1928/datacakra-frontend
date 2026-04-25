import { useState, useEffect } from "react";
import Form from "./Form";
import Delete from "./components/Delete";
import LinkCard from "./components/LinkCard";
import Preview from "./components/Preview";
import StatusPill from "./components/StatusPill";
import Empty from "./components/Empty";
import Toggle from "./components/Toggle";
import BulkBar from "./components/BulkBar";
import { copyToClipboard } from "../../utilities/copy-clipboard";
import { api } from "../../utilities/api";
import { Icon } from "@iconify/react";
import { toast } from "../../utilities/toast";

const FILTER_TABS = [
  { id: "all", label: "Semua" },
  { id: "active", label: "Aktif" },
  { id: "paused", label: "Paused" },
  { id: "draft", label: "Draft" },
];

const SORT_CYCLE = ["order", "clicks", "title"];
const SORT_LABEL = { order: "Urutan", clicks: "Klik ↓", title: "Nama A–Z" };

/* ─────────────────────────────────────────────────────────────────
   LINK MANAGEMENT PAGE — MAIN CONTENT ONLY
───────────────────────────────────────────────────────────────── */
export default function LinkManagement() {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("order");
  const [selected, setSelected] = useState(new Set());
  const [editLink, setEditLink] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  /* counts */
  const counts = {
    all: links.length,
    active: links.filter((l) => l.status === "active").length,
    paused: links.filter((l) => l.status === "paused").length,
    draft: links.filter((l) => l.status === "draft").length,
  };

  /* filtered + sorted list */
  const filtered = [...links]
    .filter((l) => {
      if (filter !== "all" && l.status !== filter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          l.title.toLowerCase().includes(q) || l.url.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === "clicks") return b.clicks - a.clicks;
      if (sort === "title") return a.title.localeCompare(b.title);
      return a.order - b.order;
    });

  /* selection */
  const toggleSelect = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  /* bulk actions */
  const bulkAction = (action) => {
    if (action === "delete") {
      setLinks((prev) => prev.filter((l) => !selected.has(l.id)));
    } else {
      setLinks((prev) =>
        prev.map((l) => (selected.has(l.id) ? { ...l, status: action } : l)),
      );
    }
    setSelected(new Set());
  };

  /* toggle single */
  const toggleActive = async (id) => {
    const selected = links.find((item) => item.id === id);
    const status = selected.status === "active" ? "paused" : "active";

    const response = await api.post(`link/${id}`, {
      status,
    });

    if (response.code >= 200 && response.code < 300) {
      await retrieve();
    }
  };

  /* delete confirm */
  const deleteTarget = links.find((l) => l.id === deleteId);

  const cycleSort = () => {
    const idx = SORT_CYCLE.indexOf(sort);
    setSort(SORT_CYCLE[(idx + 1) % SORT_CYCLE.length]);
  };

  const retrieve = async () => {
    const response = await api.get("link");

    if (response.data.length > 0) {
      const remap = response.data.map((item, index) => ({
        id: item.id,
        title: item.title,
        url: item.url,
        emoji: item.icon,
        color: item.color,
        status: item.status,
        clicks: item.click,
        order: index,
      }));

      setLinks(remap);
    }
  };

  useEffect(() => {
    retrieve();
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setFormOpen(false);
        setDeleteId(null);
      }
      if (
        (e.key === "n" || e.key === "N") &&
        !["INPUT", "SELECT", "TEXTAREA"].includes(
          document.activeElement?.tagName,
        )
      ) {
        setEditLink(null);
        setFormOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── RENDER ── */
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        select option { background:#181818; color:#F0EBE0; }
      `}</style>

      {/* outer layout: content + preview panel */}
      <div className="flex flex-1 min-h-0">
        {/* ── LEFT: main list area ── */}
        <div className="flex-1 min-w-0 overflow-y-auto p-6 lg:p-7">
          {/* page header */}
          <div
            className="flex items-start justify-between gap-4 mb-6"
            style={{ animation: "fadeUp 0.4s ease 0.05s both" }}
          >
            <div>
              <h1
                className="font-[Syne,sans-serif] font-extrabold text-[22px] text-[#F0EBE0]
                tracking-tight leading-tight"
              >
                Kelola Link
              </h1>
              <p className="text-[13px] text-[#555] mt-0.5">
                Atur, edit, dan urutkan semua link profilmu
              </p>
            </div>
            <button
              onClick={() => {
                setEditLink(null);
                setFormOpen(true);
              }}
              className="flex items-center gap-1.5 bg-[#C8FF00] text-[#080808]
                font-[Syne,sans-serif] font-bold text-[13px] rounded-xl px-4 py-2 shrink-0
                cursor-pointer border-0 hover:-translate-y-px
                hover:shadow-[0_8px_24px_rgba(200,255,0,0.25)] transition-all duration-200"
            >
              + Tambah Link
            </button>
          </div>

          {/* toolbar */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 mb-4"
            style={{ animation: "fadeUp 0.4s ease 0.1s both" }}
          >
            {/* filter tabs */}
            <div className="flex gap-1 bg-[#111] border border-[#222] rounded-xl p-1">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`flex items-center gap-1.5 text-[12px] font-[Syne,sans-serif]
                    font-semibold px-3.5 py-1.25 rounded-lg cursor-pointer border-0
                    transition-all duration-150
                    ${
                      filter === tab.id
                        ? "bg-[#1E1E1E] text-[#F0EBE0]"
                        : "bg-transparent text-[#555] hover:text-[#888]"
                    }`}
                >
                  {tab.label}
                  <span
                    className={`text-[10px] font-bold px-1.5 py-px rounded-full
                    ${
                      filter === tab.id
                        ? "bg-[#C8FF00]/10 text-[#C8FF00]"
                        : "bg-[#1E1E1E] text-[#555]"
                    }`}
                  >
                    {counts[tab.id]}
                  </span>
                </button>
              ))}
            </div>

            {/* right controls */}
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-2 bg-[#111] border border-[#222]
                rounded-xl px-3 py-1.75 w-45 focus-within:border-[#C8FF00]/30 transition-colors"
              >
                <Icon
                  icon="mynaui:search-solid"
                  width={15}
                  className="text-[#555] shrink-0"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari link…"
                  className="flex-1 bg-transparent border-0 outline-none text-[#F0EBE0]
                    text-[13px] placeholder:text-[#444]"
                />
              </div>

              <button
                onClick={cycleSort}
                className="flex items-center gap-1.5 bg-[#111] border border-[#222] rounded-xl
                  px-3 py-1.75 text-[#888] text-[12px] font-medium cursor-pointer
                  hover:border-[#2C2C2C] hover:text-[#F0EBE0] transition-all whitespace-nowrap"
              >
                ⇅ {SORT_LABEL[sort]}
              </button>
            </div>
          </div>

          {/* bulk bar */}
          <BulkBar
            count={selected.size}
            onActivate={() => bulkAction("active")}
            onPause={() => bulkAction("paused")}
            onDelete={() => bulkAction("delete")}
            onClear={() => setSelected(new Set())}
          />

          {/* link cards */}
          {filtered.length === 0 ? (
            <Empty onAdd={() => setFormOpen(true)} />
          ) : (
            <div className="flex flex-col gap-2.5">
              {filtered.map((link, i) => (
                <LinkCard
                  key={link.id}
                  link={link}
                  selected={selected.has(link.id)}
                  animDelay={i * 0.05}
                  onSelect={() => toggleSelect(link.id)}
                  onToggle={() => toggleActive(link.id)}
                  onEdit={() => {
                    setEditLink(link);
                    setFormOpen(true);
                  }}
                  onDelete={() => setDeleteId(link.id)}
                  onCopy={() => {
                    copyToClipboard(link.url);
                    toast.emit({
                      show: true,
                      title: "Link copied",
                    });
                  }}
                />
              ))}
            </div>
          )}

          {/* keyboard hint */}
          {filtered.length > 0 && (
            <p className="text-center text-[11px] text-[#333] mt-6">
              Tekan{" "}
              <kbd className="bg-[#1E1E1E] border border-[#2A2A2A] rounded px-1.5 py-0.5 text-[10px] text-[#666]">
                N
              </kbd>{" "}
              untuk tambah link baru
            </p>
          )}
        </div>

        {/* ── RIGHT: phone preview panel ── */}
        <div
          className="hidden xl:flex w-70 shrink-0 flex-col items-center
          bg-[#0F0F0F] border-l border-[#222] px-5 py-6
          sticky top-0 h-screen overflow-y-auto"
        >
          <Preview links={links} />
        </div>
      </div>

      {/* modals */}
      <Form
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditLink(null);
          retrieve();
        }}
        editingLink={editLink}
      />

      <Delete
        open={!!deleteId}
        linkId={deleteId}
        linkName={deleteTarget?.title ?? ""}
        onCancel={() => setDeleteId(null)}
        onConfirm={() => retrieve()}
      />
    </>
  );
}
