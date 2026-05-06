"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Especialización", href: "#especializacion" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

function MediheartLogo({ className = "", scrolled = false }: { className?: string; scrolled?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center flex-shrink-0">
        <img
          src="/logo.png"
          alt="Mediheart logo"
          className="w-9 h-9 object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-wine" : "text-white"}`}>
          Mediheart
        </span>
        <span className={`text-[10px] font-medium tracking-wide ${scrolled ? "text-gray-500" : "text-white/60"}`}>
          S. de R.L de C.V.
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")}>
              <MediheartLogo scrolled={isScrolled} />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-wine bg-wine/8"
                        : isScrolled
                        ? "text-gray-600 hover:text-wine hover:bg-wine/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="ml-3 px-5 py-2.5 bg-wine text-white text-sm font-semibold rounded-xl hover:bg-wine-dark transition-all duration-200 shadow-wine hover:shadow-wine-lg active:scale-95"
              >
                Contáctanos
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-wine bg-wine/8 font-semibold"
                      : "text-gray-600 hover:text-wine hover:bg-wine/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="block text-center px-4 py-3 bg-wine text-white text-sm font-semibold rounded-xl hover:bg-wine-dark transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
