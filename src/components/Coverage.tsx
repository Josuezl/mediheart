"use client";

import { useEffect, useRef } from "react";
import {
  MapPin,
  ShieldCheck,
  Award,
  TrendingUp,
  Building2,
  FileCheck,
} from "lucide-react";
import Card from "./ui/Card";

const stats = [
  {
    icon: TrendingUp,
    value: "4+",
    label: "Años de Experiencia",
    description: "Presencia consolidada en el mercado hondureño",
  },
  {
    icon: MapPin,
    value: "SPS",
    label: "San Pedro Sula",
    description: "Operamos en Cortés, norte de Honduras",
  },
  {
    icon: ShieldCheck,
    value: "ONCAE",
    label: "Certificados",
    description: "Permiso activo como proveedores del Estado",
  },
  {
    icon: FileCheck,
    value: "IHSS",
    label: "En proceso",
    description: "Avanzando en aprobación con Seguro Social",
  },
];

const clientTypes = [
  {
    icon: Building2,
    title: "Centros Hospitalarios Privados",
    description: "Hospitales privados de alto nivel en Honduras",
  },
  {
    icon: Award,
    title: "Clínicas Especializadas",
    description: "Centros cardiológicos y de diagnóstico avanzado",
  },
  {
    icon: ShieldCheck,
    title: "Instituciones Públicas",
    description: "Hospitales y centros en proceso de modernización",
  },
];

export default function Coverage() {
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
    <section id="cobertura" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine/8 text-wine text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-wine" />
            Nuestra presencia
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Cobertura y{" "}
            <span className="gradient-text">Cumplimiento</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Estructura legal sólida, experiencia en importación de dispositivos médicos
            y gestión administrativa preparada para procesos regulatorios sanitarios.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Card hover padding="md" className="h-full text-center group">
                  <div className="w-12 h-12 rounded-xl bg-wine/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-wine transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-wine group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="text-3xl font-black text-wine mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-xs text-gray-500 leading-snug">
                    {stat.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Two column: left text, right client types */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <h3 className="text-2xl font-black text-gray-900 mb-6">
              Estructura y cumplimiento normativo
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Constitución legal activa",
                  desc: "Empresa formalmente constituida como Sociedad de Responsabilidad Limitada en Honduras.",
                },
                {
                  title: "Experiencia en importación",
                  desc: "Historial comprobado de importación de dispositivos médicos con gestión aduanera eficiente.",
                },
                {
                  title: "Preparación regulatoria",
                  desc: "Procesos internos alineados con requisitos sanitarios y regulatorios del mercado hondureño.",
                },
                {
                  title: "Registro ONCAE activo",
                  desc: "Permiso vigente de la Oficina Normativa de Contratación y Adquisiciones del Estado de Honduras.",
                },
                {
                  title: "Proceso IHSS en curso",
                  desc: "Avanzando activamente en el proceso de aprobación con el Instituto Hondureño de Seguridad Social.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-wine flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal space-y-5">
            <h3 className="text-2xl font-black text-gray-900 mb-6">
              Mercado y clientes objetivo
            </h3>

            {clientTypes.map((client) => {
              const Icon = client.icon;
              return (
                <Card key={client.title} hover padding="md" className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-wine/8 flex items-center justify-center flex-shrink-0 group-hover:bg-wine transition-colors duration-300">
                      <Icon
                        size={22}
                        className="text-wine group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {client.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{client.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Map card */}
            <div className="p-5 rounded-2xl bg-gradient-hero text-white">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={20} className="text-pink-300" />
                <span className="font-bold">Ubicación principal</span>
              </div>
              <p className="text-white/80 text-sm">
                Col. Trejo, 10 Cl. 23 Ave.
                <br />
                San Pedro Sula, Cortés, Honduras
              </p>
              <div className="mt-3 text-xs text-white/60">
                Región norte de Honduras · Expansión escalonada planificada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
