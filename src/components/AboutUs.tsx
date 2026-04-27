"use client";

import { useEffect, useRef } from "react";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import Card from "./ui/Card";

const values = [
  "Excelencia clínica en cada producto",
  "Transparencia y ética comercial",
  "Innovación responsable",
  "Compromiso con resultados a largo plazo",
  "Relaciones duraderas con instituciones médicas",
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quienes-somos" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine/8 text-wine text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-wine" />
            Nuestra Empresa
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ¿Quiénes Somos?
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Empresa hondureña con más de 4 años especializados en la comercialización
            y distribución de dispositivos médicos cardiovasculares de clase mundial.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Description + Values */}
          <div className="reveal space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Trabajamos de la mano con{" "}
              <strong className="text-gray-900">
                profesionales vinculados al sector salud
              </strong>
              , incluyendo liderazgo médico especializado, lo que permite una
              comprensión directa de las necesidades clínicas, operativas y
              regulatorias del mercado local.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Buscamos{" "}
              <strong className="text-wine">
                conectar soluciones médicas internacionales con Honduras
              </strong>
              , priorizando calidad, innovación y un impacto positivo para el
              paciente.
            </p>

            <div className="pt-4">
              <h3 className="text-gray-900 font-bold text-lg mb-4">
                Nuestros valores fundamentales
              </h3>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-wine flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-600 text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Visual card with stats */}
          <div className="reveal">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-wine/5 to-pink-50 rounded-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-2 p-6 bg-gradient-wine rounded-2xl text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                        <path
                          d="M20 35C20 35 5 26 5 15C5 10.03 9.03 6 14 6C16.7 6 19.1 7.3 20 9C20.9 7.3 23.3 6 26 6C30.97 6 35 10.03 35 15C35 26 20 35 20 35Z"
                          fill="white"
                          fillOpacity="0.9"
                        />
                        <polyline
                          points="10,18 14,18 16,12 18,24 21,14 23,20 26,20 29,18"
                          fill="none"
                          stroke="#8B1538"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-lg">Mediheart</span>
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed">
                    &quot;Posibilitar la introducción responsable de innovación médica en
                    el mercado hondureño que facilite el trabajo de los
                    profesionales de la salud.&quot;
                  </p>
                </div>

                {[
                  { num: "4+", label: "Años en el mercado" },
                  { num: "5", label: "Áreas de especialización" },
                  { num: "ONCAE", label: "Certificados" },
                  { num: "IHSS", label: "En proceso" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-center"
                  >
                    <div className="text-2xl font-black text-wine mb-1">
                      {stat.num}
                    </div>
                    <div className="text-xs text-gray-500 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Card hover padding="lg" className="reveal border-l-4 border-l-wine">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-wine/10 flex items-center justify-center flex-shrink-0">
                <Target size={24} className="text-wine" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Misión
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proporcionar dispositivos médicos cardiovasculares de alta
                  calidad, contribuyendo activamente al diagnóstico, tratamiento
                  y recuperación de pacientes a través del cumplimiento normativo
                  y un servicio orientado a la confianza.
                </p>
              </div>
            </div>
          </Card>

          <Card hover padding="lg" className="reveal border-l-4 border-l-wine">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-wine/10 flex items-center justify-center flex-shrink-0">
                <Eye size={24} className="text-wine" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Visión
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Para 2028, consolidarnos como la empresa líder en soluciones
                  cardiovasculares en la región norte de Honduras, reconocida
                  por la calidad de nuestros productos, la ética de nuestro
                  trabajo y la promoción del acceso a dispositivos de clase
                  mundial.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
