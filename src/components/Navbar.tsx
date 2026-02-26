import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop nav */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 hidden md:block transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="wrap flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => go("#home")}
            className="font-extrabold text-xl tracking-tight grad-text-a cursor-pointer bg-transparent border-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Gabriel<span className="text-white">.</span>
          </button>

          {/* Links */}
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="relative px-4 py-2 text-sm font-medium cursor-pointer bg-transparent border-none transition-colors duration-200"
                style={{ color: active === link.href ? "#fff" : "rgba(255,255,255,0.45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "var(--purple)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a href="mailto:younganiel@gmail.com" className="btn-primary text-sm py-2 px-5">
            Hire Me
          </a>
        </div>
      </motion.header>

      {/* Mobile header */}
      <div
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 h-14 md:hidden"
        style={{
          background: open || scrolled ? "rgba(5,5,5,0.95)" : "transparent",
          backdropFilter: open || scrolled ? "blur(20px)" : "none",
          borderBottom: open || scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => go("#home")}
          className="font-extrabold text-lg grad-text-a cursor-pointer bg-transparent border-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Gabriel<span className="text-white">.</span>
        </motion.button>
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white bg-transparent border-none cursor-pointer"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 md:hidden"
            style={{ background: "rgba(5,5,5,0.98)", backdropFilter: "blur(24px)" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => go(link.href)}
                className="text-3xl font-bold cursor-pointer bg-transparent border-none transition-colors duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: active === link.href ? "transparent" : "rgba(255,255,255,0.6)",
                  ...(active === link.href ? {
                    background: "var(--grad-a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  } : {}),
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="mailto:younganiel@gmail.com"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
