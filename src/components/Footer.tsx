export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-4 text-center"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <p className="text-white/25 text-sm font-medium">
        &copy; {year} Gabriel Anie. All rights reserved.
      </p>
    
    </footer>
  );
}
