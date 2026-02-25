"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, GitBranch, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["All", "Full Stack", "Frontend", "Mobile"];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [modal, setModal] = useState<(typeof PROJECTS)[0] | null>(null);
  const [modalIdx, setModalIdx] = useState(0);

  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );
  const featuredProject = filtered[0] ?? null;
  const gridProjects = showAll ? filtered.slice(1) : filtered.slice(1, 6);

  const openModal = (p: (typeof PROJECTS)[0]) => {
    setModal(p);
    setModalIdx(filtered.findIndex((fp) => fp.id === p.id));
  };

  const navigateModal = (dir: -1 | 1) => {
    const next = modalIdx + dir;
    if (next >= 0 && next < filtered.length) {
      setModal(filtered[next]);
      setModalIdx(next);
    }
  };

  return (
    <>
      <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-24" ref={ref}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label justify-center mb-4"
        >
          Selected work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-secondary"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-center mb-10 text-sm"
        >
          Real-world applications I&apos;ve designed, built, and shipped
        </motion.p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false); }}
              className={`tab-pill${filter === f ? " active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Featured hero card — full width */}
        <AnimatePresence mode="wait">
          {featuredProject && (
            <motion.div
              key={`hero-${featuredProject.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(featuredProject)}
              className="project-hero-card cursor-pointer group mb-8"
            >
              <div className="grid md:grid-cols-2">
                {/* Image — left half */}
                <div className="relative h-56 md:h-80 overflow-hidden">
                  <Image
                    src={featuredProject.image || featuredProject.fallbackImage}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = featuredProject.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 hidden md:block" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "rgba(102,126,234,.85)" }}
                    >
                      {featuredProject.category}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
                    >
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content — right half */}
                <div className="p-7 md:p-9 flex flex-col justify-center">
                  <div className="text-xs font-semibold text-[#667eea] mb-2 uppercase tracking-wider">
                    {featuredProject.tag}
                  </div>
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-3 leading-snug">
                    {featuredProject.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featuredProject.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium"
                        style={{
                          background: "rgba(102,126,234,0.12)",
                          border: "1px solid rgba(102,126,234,0.22)",
                          color: "#a78bfa",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {featuredProject.tech.length > 5 && (
                      <span className="text-[0.7rem] text-white/30 px-1">
                        +{featuredProject.tech.length - 5}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {featuredProject.liveLink && (
                      <a
                        href={featuredProject.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-full font-semibold text-sm text-white hover:-translate-y-0.5 transition-transform"
                        style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {featuredProject.githubLink && (
                      <a
                        href={featuredProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors border border-white/10 px-5 py-2.5 rounded-full hover:border-white/25"
                      >
                        <GitBranch size={13} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3-col grid for remaining projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {gridProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => openModal(project)}
                className="glass-card overflow-hidden cursor-pointer group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || project.fallbackImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = project.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className="px-2.5 py-1 rounded-full text-[0.7rem] font-semibold text-white"
                      style={{ background: "rgba(102,126,234,.8)" }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-full text-[0.7rem] font-semibold text-white"
                      style={{ background: "rgba(0,0,0,.5)" }}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[0.7rem] text-white/60"
                        style={{
                          background: "rgba(102,126,234,0.12)",
                          border: "1px solid rgba(102,126,234,0.2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[0.7rem] text-white/30 px-1">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-[0.78rem] font-medium text-white/70 hover:text-white transition-colors"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-[0.78rem] font-medium text-white/70 hover:text-white transition-colors"
                      >
                        <GitBranch size={13} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all / less */}
        {filtered.length - 1 > 5 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full font-medium text-white/70 hover:text-white transition-all duration-300 hover:border-[#667eea]"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
              }}
            >
              {showAll ? "Show Less" : `View All Projects (${filtered.length})`}
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Modal header */}
              <div className="relative p-6 border-b border-white/5">
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => navigateModal(-1)}
                    disabled={modalIdx === 0}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white disabled:opacity-20 transition-colors"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => navigateModal(1)}
                    disabled={modalIdx === filtered.length - 1}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white disabled:opacity-20 transition-colors"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-center gradient-text-primary px-10">
                  {modal.title}
                </h2>
                <p className="text-white/40 text-center text-sm mt-1">{modal.subtitle}</p>
                <button
                  onClick={() => setModal(null)}
                  className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="relative rounded-xl overflow-hidden h-56 md:h-auto">
                  <Image
                    src={modal.image || modal.fallbackImage}
                    alt={modal.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = modal.fallbackImage;
                    }}
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-white/60 text-sm leading-relaxed">{modal.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {modal.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(102,126,234,0.15)",
                          color: "#a78bfa",
                          border: "1px solid rgba(102,126,234,0.2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {modal.liveLink && (
                      <a
                        href={modal.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white"
                        style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {modal.githubLink && (
                      <a
                        href={modal.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                      >
                        <GitBranch size={14} /> GitHub
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
