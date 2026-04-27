"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Button from "./ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+504 9437-4827",
    href: "tel:+50494374827",
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    value: "mdiheart.hn@gmail.com",
    href: "mailto:mdiheart.hn@gmail.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Col. Trejo, 10 Cl. 23 Ave., San Pedro Sula, Cortés, Honduras",
    href: undefined,
  },
];

const scheduleItems = [
  { days: "Lunes – Viernes", hours: "8:00 am – 5:00 pm" },
  { days: "Sábado", hours: "8:00 am – 12:00 pm" },
  { days: "Domingo", hours: "Cerrado" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "El nombre es requerido.";
  if (!data.email.trim()) {
    errors.email = "El correo es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingrese un correo válido.";
  }
  if (!data.message.trim()) errors.message = "El mensaje es requerido.";
  return errors;
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
            Cuéntanos sobre tus necesidades de dispositivos médicos y nuestro
            equipo te responderá a la brevedad posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-500 mb-6 max-w-sm">
                    Gracias por contactarnos. Nos pondremos en contacto contigo
                    a la brevedad posible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nombre completo <span className="text-wine">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr. Juan Pérez"
                        className={`input-field ${errors.name ? "border-red-400 ring-2 ring-red-100" : ""}`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Correo electrónico <span className="text-wine">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="doctor@hospital.hn"
                        className={`input-field ${errors.email ? "border-red-400 ring-2 ring-red-100" : ""}`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+504 9999-9999"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Asunto
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Seleccionar asunto</option>
                        <option value="cotizacion">Solicitud de cotización</option>
                        <option value="informacion">Información de productos</option>
                        <option value="disponibilidad">Disponibilidad de dispositivos</option>
                        <option value="alianza">Alianza estratégica</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Mensaje <span className="text-wine">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Cuéntanos sobre tus necesidades, el tipo de dispositivo que buscas o cualquier consulta..."
                      className={`input-field resize-none ${errors.message ? "border-red-400 ring-2 ring-red-100" : ""}`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    loading={loading}
                    className="mt-2"
                  >
                    {!loading && <Send size={18} />}
                    {loading ? "Enviando mensaje..." : "Enviar mensaje"}
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    Tu información es confidencial y solo será usada para responderte.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 reveal space-y-5">
            {/* Contact info */}
            <div className="bg-gradient-hero rounded-3xl p-6 sm:p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>

              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs font-medium mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white text-sm font-semibold hover:text-pink-300 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm font-medium leading-snug">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-wine/10 flex items-center justify-center">
                  <Clock size={20} className="text-wine" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Horarios de atención</h3>
              </div>

              <div className="space-y-3">
                {scheduleItems.map((s) => (
                  <div
                    key={s.days}
                    className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-sm text-gray-600 font-medium">{s.days}</span>
                    <span
                      className={`text-sm font-semibold ${
                        s.hours === "Cerrado" ? "text-gray-400" : "text-wine"
                      }`}
                    >
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/50494374827"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#1da851] transition-colors duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
