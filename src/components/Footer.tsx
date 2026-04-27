"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
              <div className="w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M20 35C20 35 5 26 5 15C5 10.03 9.03 6 14 6C16.7 6 19.1 7.3 20 9C20.9 7.3 23.3 6 26 6C30.97 6 35 10.03 35 15C35 26 20 35 20 35Z"
                    fill="#8B1538"
                  />
                  <polyline
                    points="10,18 14,18 16,12 18,24 21,14 23,20 26,20 29,18"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                href="https://wa.me/50494374827"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366]/15 flex items-center justify-center hover:bg-[#25D366] transition-colors duration-200 group"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] group-hover:fill-white transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              <a
                href="mailto:mdiheart.hn@gmail.com"
                className="w-9 h-9 rounded-lg bg-wine/20 flex items-center justify-center hover:bg-wine transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={16} className="text-wine" />
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
                href="tel:+50494374827"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-wine/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-wine transition-colors">
                  <Phone size={14} className="text-wine group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Teléfono / WhatsApp</p>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    +504 9437-4827
                  </p>
                </div>
              </a>

              <a
                href="mailto:mdiheart.hn@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-wine/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-wine transition-colors">
                  <Mail size={14} className="text-wine group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Correo electrónico</p>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    mdiheart.hn@gmail.com
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
          <p className="text-gray-600 text-xs">
            San Pedro Sula, Cortés, Honduras
          </p>
        </div>
      </div>
    </footer>
  );
}
