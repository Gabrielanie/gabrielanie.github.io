import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["All", "Full Stack", "Frontend", "Mobile"];

const CAT_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  "Full Stack": { color: "#c4b5fd", bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.35)" },
  "Frontend":   { color: "#67e8f9", bg: "rgba(6,182,212,0.15)",  border: "rgba(6,182,212,0.35)" },
  "Mobile":     { color: "#f9a8d4", bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.35)" },
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [modal, setModal] = useState<(typeof PROJECTS)[0] | null>(null);
  const [modalIdx, setModalIdx] = useState(0);

  const filtered = PROJECTS.filter((p) => filter === "All" || p.category === filter);
  const featured = filtered[0] ?? null;
  const grid = showAll ? filtered.slice(1) : filtered.slice(1, 6);

  const openModal = (p: (typeof PROJECTS)[0]) => {
    setModal(p);
    setModalIdx(filtered.findIndex((fp) => fp.id === p.id));
  };
  const navModal = (dir: -1 | 1) => {
    const next = modalIdx + dir;
    if (next >= 0 && next < filtered.length) { setModal(filtered[next]); setModalIdx(next); }
  };

  return (
    <>
      <section id="projects" className="py-24 md:py-32 scroll-mt-20" style={{ borderTop: "1px solid var(--border)" }} ref={ref}>
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
            <div className="eyebrow justify-center mb-4">Selected work</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Featured <span className="grad-text-c">Projects</span>
            </h2>
            <p className="text-white/40 text-sm">Real-world applications I've designed, built, and shipped</p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => { setFilter(f); setShowAll(false); }}
                className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: filter === f ? "rgba(139,92,246,0.15)" : "transparent",
                  borderColor: filter === f ? "rgba(139,92,246,0.5)" : "var(--border)",
                  color: filter === f ? "#c4b5fd" : "rgba(255,255,255,0.45)",
                }}
              >{f}</button>
            ))}
          </div>

          {/* Featured card */}
          <AnimatePresence mode="wait">
            {featured && (
              <motion.div key={`feat-${featured.id}`}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => openModal(featured)}
                className="cursor-pointer group mb-10 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-56 md:h-auto overflow-hidden">
                    <img src={featured.image || featured.fallbackImage} alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[220px]"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).src = featured.fallbackImage; }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(17,17,17,0.6))" }} />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {CAT_COLORS[featured.category] && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold" style={CAT_COLORS[featured.category]}>
                          {featured.category}
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "var(--grad-a)" }}>
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-7 md:p-10 flex flex-col justify-center">
                    <div className="text-xs font-bold mb-2 uppercase tracking-wider grad-text-a" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured.tag}</div>
                    <h3 className="text-white font-extrabold text-xl md:text-2xl mb-3 leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {featured.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">{featured.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featured.tech.slice(0, 5).map((t) => <span key={t} className="tag">{t}</span>)}
                      {featured.tech.length > 5 && <span className="text-xs text-white/30 px-1 self-center">+{featured.tech.length - 5}</span>}
                    </div>
                    <div className="flex gap-3">
                      {featured.liveLink && (
                        <a href={featured.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="btn-primary text-sm py-2 px-5">
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      )}
                      {featured.githubLink && (
                        <a href={featured.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="btn-outline text-sm py-2 px-5">
                          <Github size={13} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {grid.map((p, i) => (
                <motion.div key={p.id} layout
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  onClick={() => openModal(p)}
                  className="cursor-pointer group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                  style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.image || p.fallbackImage} alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).src = p.fallbackImage; }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.7), transparent)" }} />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {CAT_COLORS[p.category] && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold" style={CAT_COLORS[p.category]}>{p.category}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-base mb-2 line-clamp-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                    <p className="text-white/50 text-sm line-clamp-2 mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.slice(0, 4).map((t) => <span key={t} className="tag text-[0.7rem]">{t}</span>)}
                      {p.tech.length > 4 && <span className="text-xs text-white/30 self-center">+{p.tech.length - 4}</span>}
                    </div>
                    <div className="flex gap-4">
                      {p.liveLink && (
                        <a href={p.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        ><ExternalLink size={12} /> Live Demo</a>
                      )}
                      {p.githubLink && (
                        <a href={p.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        ><Github size={12} /> GitHub</a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length - 1 > 5 && (
            <div className="flex justify-center mt-10">
              <button onClick={() => setShowAll(!showAll)} className="btn-outline">
                {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }} transition={{ type: "spring", stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
            >
              <div className="p-6 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <button onClick={() => navModal(-1)} disabled={modalIdx === 0}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white disabled:opacity-20 transition-colors cursor-pointer border-none"
                    style={{ background: "var(--surface-2)" }}
                  ><ChevronLeft size={15} /></button>
                  <button onClick={() => navModal(1)} disabled={modalIdx === filtered.length - 1}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white disabled:opacity-20 transition-colors cursor-pointer border-none"
                    style={{ background: "var(--surface-2)" }}
                  ><ChevronRight size={15} /></button>
                  <span className="text-white/30 text-xs ml-1">{modalIdx + 1} / {filtered.length}</span>
                </div>
                <h2 className="text-xl font-extrabold grad-text-a text-center px-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{modal.title}</h2>
                {modal.subtitle && <p className="text-white/40 text-center text-sm mt-1">{modal.subtitle}</p>}
                <button onClick={() => setModal(null)} className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden h-52 md:h-auto">
                  <img src={modal.image || modal.fallbackImage} alt={modal.title}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).src = modal.fallbackImage; }}
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-white/60 text-sm leading-relaxed">{modal.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {modal.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="flex gap-3 pt-1">
                    {modal.liveLink && (
                      <a href={modal.liveLink} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-5">
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {modal.githubLink && (
                      <a href={modal.githubLink} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-5">
                        <Github size={13} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
