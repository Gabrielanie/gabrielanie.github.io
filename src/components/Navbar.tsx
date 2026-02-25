"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 transition-all duration-300`}
        style={{
          background: scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "50px",
          padding: "0.45rem 0.55rem",
          backdropFilter: scrolled ? "blur(28px)" : "blur(20px)",
          WebkitBackdropFilter: scrolled ? "blur(28px)" : "blur(20px)",
        }}
      >
        {/* GA Monogram */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs select-none"
          style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
        >
          GA
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mx-1 flex-shrink-0" />

        {/* Links */}
        <ul className="flex gap-0.5 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`relative px-3.5 py-1.5 rounded-full font-medium text-[0.83rem] transition-colors duration-200 cursor-pointer bg-transparent border-none ${
                  active === link.href ? "text-white" : "text-white/55 hover:text-white/90"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(102,126,234,0.2)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3.5 md:hidden"
        style={{
          background: open ? "rgba(5,5,5,0.9)" : "transparent",
          backdropFilter: open ? "blur(20px)" : "none",
          transition: "background 0.3s ease",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs select-none"
          style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
        >
          GA
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/60"
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 w-72 z-40 flex flex-col pt-20 px-6 gap-1"
              style={{
                background: "rgba(8,8,8,0.97)",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)",
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className={`flex items-center gap-3 w-full font-medium text-base text-left py-3 px-3 rounded-xl transition-all duration-200 bg-transparent border-none ${
                    active === link.href
                      ? "text-white"
                      : "text-white/55 hover:text-white hover:bg-white/4"
                  }`}
                  style={active === link.href ? { background: "rgba(102,126,234,0.1)" } : {}}
                >
                  {active === link.href && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#667eea] flex-shrink-0" />
                  )}
                  <span className={active === link.href ? "" : "ml-[1.375rem]"}>
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
