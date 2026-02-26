import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

const SOCIALS = [
  { icon: Github,   href: "https://github.com/gabrielanie",                      label: "GitHub",   hoverColor: "#fff" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-udoh-85974616b/", label: "LinkedIn", hoverColor: "#06b6d4" },
  { icon: Mail,     href: "mailto:younganiel@gmail.com",                         label: "Email",    hoverColor: "#ec4899" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap flex flex-col items-center gap-6">
        {/* Logo */}
        <button
          onClick={() => go("#home")}
          className="text-2xl font-extrabold grad-text-a cursor-pointer bg-transparent border-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Gabriel<span className="text-white">.</span>
        </button>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="text-sm text-white/40 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, href, label, hoverColor }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-white/20 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          &copy; {year} Gabriel Anie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
