"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

function EcgAnimation() {
  return (
    <svg
      viewBox="0 0 400 80"
      className="w-full opacity-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        className="ecg-line"
        points="0,40 40,40 55,40 65,10 75,70 85,40 100,40 140,40 155,40 165,10 175,70 185,40 200,40 240,40 255,40 265,10 275,70 285,40 300,40 340,40 355,40 365,10 375,70 385,40 400,40"
        fill="none"
        stroke="#f9a8c0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroHeart() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-wine/20 blur-3xl scale-150 animate-pulse-slow" />
      <img
        src="/logo.png"
        alt="Mediheart"
        className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 heartbeat drop-shadow-2xl object-contain"
      />
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);

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

    const reveals = heroRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-wine/20 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-wine-dark/30 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/2 blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Innovación{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">
                Cardiovascular
              </span>{" "}
              al Alcance de Honduras
            </h1>

            <p className="reveal text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Especialistas en dispositivos médicos para cardiología
              intervencionista. Más de{" "}
              <strong className="text-white">4 años</strong> conectando
              soluciones médicas internacionales con profesionales de la salud
              hondureños.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll("#contacto")}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-wine font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-base"
              >
                Contáctanos
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              <a
                href="mailto:info@medihearthn.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm text-base"
              >
                info@medihearthn.com
              </a>
            </div>

            {/* Trust badges */}
            <div className="reveal mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { value: "4+", label: "Años de experiencia" },
                { value: "5", label: "Áreas de especialización" },
                { value: "SPS", label: "San Pedro Sula, Honduras" },
              ].map((badge) => (
                <div key={badge.label} className="text-center">
                  <div className="text-2xl font-black text-white">{badge.value}</div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex flex-col items-center gap-6">
            <HeroHeart />

            <div className="w-full max-w-sm">
              <EcgAnimation />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {[
                "Cardiología Intervencionista",
                "Intervencionismo Estructural",
                "Electrofisiología",
                "Cirugía Cardiovascular",
              ].map((item) => (
                <div
                  key={item}
                  className="px-3 py-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm"
                >
                  <p className="text-white/85 text-xs font-medium text-center leading-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,80 L0,40 C360,0 720,80 1080,40 L1440,0 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
