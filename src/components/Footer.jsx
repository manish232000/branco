export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} BrancoSoft. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
