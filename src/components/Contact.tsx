"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, Clock } from "lucide-react";

const scheduleItems = [
  { days: "Lunes – Viernes", hours: "8:00am – 5:00pm", closed: false },
  { days: "Sábado", hours: "8:00am – 12:00pm", closed: false },
  { days: "Domingo", hours: "Cerrado", closed: true },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine/8 text-wine text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-wine" />
            Estamos aquí para ayudarte
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Estamos disponibles para responder tus consultas sobre nuestros
            dispositivos médicos cardiovasculares.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email card */}
          <div className="reveal">
            <div className="bg-gradient-hero rounded-3xl p-8 text-white h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <Mail size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Correo Electrónico</h3>
              <a
                href="mailto:info@medihearthn.com"
                className="text-white/90 text-sm font-medium hover:text-pink-300 transition-colors break-all"
              >
                info@medihearthn.com
              </a>
              <a
                href="mailto:info@medihearthn.com"
                className="mt-6 px-6 py-2.5 bg-white text-wine text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors active:scale-95"
              >
                Enviar correo
              </a>
            </div>
          </div>

          {/* Address card */}
          <div className="reveal">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-wine/10 flex items-center justify-center mb-5">
                <MapPin size={26} className="text-wine" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Dirección</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Col. Trejo, 10 Cl. 23 Ave.
                <br />
                San Pedro Sula, Cortés
                <br />
                Honduras
              </p>
            </div>
          </div>

          {/* Schedule card */}
          <div className="reveal">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-wine/10 flex items-center justify-center mb-5">
                <Clock size={26} className="text-wine" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Horarios de Atención</h3>
              <div className="space-y-3 w-full">
                {scheduleItems.map((s) => (
                  <div
                    key={s.days}
                    className="grid grid-cols-2 items-center py-2 border-b border-gray-50 last:border-0 gap-2"
                  >
                    <span className="text-sm text-gray-500 font-medium text-left whitespace-nowrap">{s.days}</span>
                    <span
                      className={`text-sm font-semibold text-right whitespace-nowrap ${
                        s.closed ? "text-gray-400" : "text-wine"
                      }`}
                    >
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
