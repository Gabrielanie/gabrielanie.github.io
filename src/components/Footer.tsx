import { GitBranch, ExternalLink, Mail } from "lucide-react";

const SOCIAL = [
  { icon: GitBranch, href: "https://github.com/gabrielanie", label: "GitHub" },
  { icon: ExternalLink, href: "https://www.linkedin.com/in/gabriel-udoh-85974616b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:younganiel@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-14 px-4"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="section-container flex flex-col items-center gap-6">
        {/* GA Brand mark */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm select-none"
          style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
        >
          GA
        </div>

        {/* CTA line */}
        <p className="text-white/35 text-sm text-center max-w-xs leading-relaxed">
          Open to freelance, contracts &amp; full-time roles.{" "}
          <a
            href="mailto:younganiel@gmail.com"
            className="text-[#667eea] hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
          >
            Let&apos;s talk
          </a>
        </p>

        {/* Social icons */}
        <div className="flex gap-3">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/20 text-xs font-medium">
          &copy; {year} Gabriel Anie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
