"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${
          scrolled ? "backdrop-blur-2xl" : "backdrop-blur-xl"
        }`}
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.07)"
            : "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "50px",
          padding: "0.7rem 2rem",
        }}
      >
        <ul className="flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-white font-medium text-[0.9rem] relative group transition-colors duration-200 cursor-pointer bg-transparent border-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile nav toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setOpen(!open)}
        className="fixed top-5 right-5 z-50 md:hidden w-11 h-11 rounded-full flex items-center justify-center text-white"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
        }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-64 z-40 flex flex-col pt-20 px-6 gap-4"
            style={{
              background: "rgba(10,10,10,0.95)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-white font-medium text-lg text-left py-2 border-b border-white/5 transition-colors duration-200 bg-transparent"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
