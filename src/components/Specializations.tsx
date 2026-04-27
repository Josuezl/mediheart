"use client";

import { useEffect, useRef } from "react";
import {
  Heart,
  Activity,
  Zap,
  Workflow,
  Stethoscope,
} from "lucide-react";

const specializations = [
  {
    icon: Heart,
    title: "Cardiología Intervencionista",
    description:
      "Dispositivos de alta precisión para procedimientos coronarios percutáneos. Stents, catéteres y guías para el diagnóstico y tratamiento de enfermedades coronarias.",
    color: "from-rose-500 to-wine",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Workflow,
    title: "Intervencionismo Estructural",
    description:
      "Soluciones avanzadas para el tratamiento de valvulopatías y defectos estructurales del corazón. Tecnología de vanguardia para intervenciones mínimamente invasivas.",
    color: "from-wine to-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: Zap,
    title: "Electrofisiología",
    description:
      "Equipamiento especializado para el estudio y tratamiento de arritmias cardíacas. Ablación por catéter, mapeo cardíaco y dispositivos de estimulación.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Activity,
    title: "Dispositivos Cardiovasculares Periféricos",
    description:
      "Línea completa de dispositivos para el tratamiento de enfermedades vasculares periféricas. Stents, balones y sistemas de revascularización periférica.",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Stethoscope,
    title: "Soporte a Cirugía Cardiovascular",
    description:
      "Tecnología y dispositivos de soporte para cirugía cardíaca abierta y mínimamente invasiva. Perfusión, protección miocárdica y sistemas de asistencia ventricular.",
    color: "from-blue-500 to-indigo-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
];

export default function Specializations() {
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
    <section
      id="especializacion"
      ref={sectionRef}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine/8 text-wine text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-wine" />
            Lo que ofrecemos
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Áreas de{" "}
            <span className="gradient-text">Especialización</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Una línea integral de dispositivos seleccionados bajo los más altos
            estándares de desempeño, compatibilidad y seguridad clínica.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            const isLast = index === specializations.length - 1;
            return (
              <div
                key={spec.title}
                className={`reveal card-hover ${isLast ? "sm:col-span-2 lg:col-span-1" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`h-full bg-white rounded-2xl border ${spec.border} p-6 group relative overflow-hidden`}
                >
                  {/* Hover gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl ${spec.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <Icon
                      size={26}
                      className="relative text-wine group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-wine transition-colors duration-200">
                    {spec.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {spec.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="reveal mt-12 p-6 sm:p-8 bg-gradient-wine rounded-2xl text-white text-center">
          <p className="text-lg sm:text-xl font-semibold leading-relaxed max-w-2xl mx-auto">
            Todos nuestros dispositivos cumplen con{" "}
            <strong>estándares internacionales de calidad</strong> y son
            seleccionados de fabricantes con reconocimiento global.
          </p>
        </div>
      </div>
    </section>
  );
}
