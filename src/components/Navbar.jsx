import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold text-xl">
          Branco<span className="text-brand-600">Soft</span>
        </a>

        <nav className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-brand-600">
            Home
          </a>
          <a href="#services" className="hover:text-brand-600">
            Services
          </a>
          <a href="#about" className="hover:text-brand-600">
            About
          </a>
          <a href="#contact" className="hover:text-brand-600">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex gap-3">
          <a href="#contact" className="btn btn-primary">
            Get a quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container py-3 space-y-3">
            <a href="#home" className="block hover:text-brand-600">
              Home
            </a>
            <a href="#services" className="block hover:text-brand-600">
              Services
            </a>
            <a href="#about" className="block hover:text-brand-600">
              About
            </a>
            <a href="#contact" className="block hover:text-brand-600">
              Contact
            </a>
            <a href="#contact" className="block btn btn-primary">
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
