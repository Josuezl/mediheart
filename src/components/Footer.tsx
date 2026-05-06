"use client";

import { Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Especialización", href: "#especializacion" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

const specializations = [
  "Cardiología Intervencionista",
  "Intervencionismo Estructural",
  "Electrofisiología",
  "Dispositivos Periféricos",
  "Cirugía Cardiovascular",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Mediheart logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Mediheart</div>
                <div className="text-xs text-gray-500">S. de R.L de C.V.</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empresa hondureña especializada en dispositivos médicos para
              cardiología intervencionista. Conectamos soluciones médicas
              internacionales con Honduras.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="mailto:info@medihearthn.com"
                className="w-9 h-9 rounded-lg bg-wine/20 flex items-center justify-center hover:bg-wine transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={16} className="text-wine hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Especialidades
            </h3>
            <ul className="space-y-3">
              {specializations.map((spec) => (
                <li key={spec}>
                  <span className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine flex-shrink-0" />
                    {spec}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contacto
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@medihearthn.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-wine/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-wine transition-colors">
                  <Mail size={14} className="text-wine group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Correo electrónico</p>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    info@medihearthn.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-wine/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-wine" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Dirección</p>
                  <p className="text-gray-300 text-sm leading-snug">
                    Col. Trejo, 10 Cl. 23 Ave.
                    <br />
                    San Pedro Sula, Cortés
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-wine/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-wine" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Horarios</p>
                  <p className="text-gray-300 text-sm">
                    Lun–Vier: 8:00am – 5:00pm
                    <br />
                    Sábado: 8:00am – 12:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Mediheart S. de R.L de C.V. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center sm:text-right">
            Desarrollada por Ing. Josue Zuniga ·{" "}
            <a href="mailto:josuez@outlook.com" className="hover:text-gray-400 transition-colors">
              josuez@outlook.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
