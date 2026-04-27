import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Check, Clock, MessageCircle, CheckCircle, Calendar } from "lucide-react";

export function Services() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const animationClass = (id: string) =>
    isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  const services = [
    {
      number: "01",
      badge: "ÚČETNICTVÍ",
      title: "Účetnictví",
      perex: "Vedení účtu, uzávěrky, vykaznictví, kontroling. Kompletní účetní servis pro vaši firmu.",
      points: [
        "Podvojné účetnictví a účetní evidence",
        "Roční uzávěrky a finanční výkazy",
        "Vykaznictví a reporting pro management",
        "Kontroling a finanční analýzy",
        "Zastoupení při auditních kontrolách",
      ],
      tag: "Firmy všech velikostí, OSVČ, startupy",
    },
    {
      number: "02",
      badge: "DANĚ & DPH",
      title: "Daně & DPH",
      perex: "Daňové plánování, optimalizace, přiznání, kontroly. Minimalizujte daňovou zátěž legálně a bezpečně.",
      points: [
        "Daňové plánování a optimalizace zátěže",
        "Strategická optimalizace daní",
        "Daňová přiznání a hlášení",
        "Zastoupení při finančních kontrolách",
        "Mezinárodní daňové poradenství",
      ],
      tag: "Firmy s komplexní daňovou situací",
    },
    {
      number: "03",
      badge: "MZDY & HR",
      title: "Mzdy & HR",
      perex: "Výpočet mezd, odvody, mzdové audity. Kompletní servis pro váš HR tým.",
      points: [
        "Měsíční zpracování mezd",
        "Odvody pojistného a správa",
        "Roční zúčtování daní zaměstnanců",
        "Mzdové audity a optimalizace",
        "Zastoupení při kontrolách ČSSZ",
      ],
      tag: "Firmy s 1–200 zaměstnanci",
    },
    {
      number: "04",
      badge: "BUDGETY & PROGNÓZY",
      title: "Budgety & Prognózy",
      perex: "Roční plány, cash-flow prognóza, scénářová analýza. Plánujte růst s jistotou.",
      points: [
        "Roční rozpočet a business plán",
        "Plán vs. skutečnost — měsíční tracking",
        "Cash-flow prognóza na 6 měsíců",
        "Scénářová analýza a what-if modely",
        "KPI dashboard a reporting",
      ],
      tag: "Firmy plánující růst",
      quote: "Firmy s jasným finančním plánem rostou 2× rychleji.",
    },
    {
      number: "05",
      badge: "FINANČNÍ SYSTÉMY",
      title: "Finanční systémy",
      perex: "Nastavení procesů, SW, automatizace. Od chaosu k systémové finanční jasnosti.",
      points: [
        "Audit stavu a návrh systému",
        "Implementace finančních procesů",
        "Integrace SW a cloudových řešení",
        "Automatizace a digitalizace",
        "Školení týmu a průběžná podpora",
      ],
      tag: "Firmy bez jasných finančních procesů",
      process: [
        { step: "Audit", description: "Analyzujeme stav" },
        { step: "Návrh", description: "Navrhujeme systém" },
        { step: "Implementace", description: "Nasazujeme řešení" },
        { step: "CFO", description: "Průběžné řízení" },
      ],
      deliverables: ["Reporty", "Review", "Rizika", "Prognóza"],
    },
    {
      number: "06",
      badge: "CFO PORADENSTVÍ",
      title: "CFO Poradenství",
      perex: "Strategické řízení bez plného úvazku. CFO as a Service — flexibilní a efektivní.",
      points: [
        "Měsíční finanční review a analýzy",
        "Prognóza na 6 měsíců dopředu",
        "Strategická doporučení pro management",
        "Investiční analýzy a rozhodování",
        "Příprava pro investory a fondy",
      ],
      tag: "Firmy bez plného úvazku CFO",
      highlight: "Nemusíte mít celého CFO na plný úvazek.",
    },
  ];

  return (
    <div className="bg-white">
      <section
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)" }}
      >
        <div
          className="absolute top-10 right-10 w-80 h-80 rounded-full"
          style={{
            background: "rgba(37, 99, 196, 0.1)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full"
          style={{
            background: "rgba(6, 182, 212, 0.12)",
            filter: "blur(70px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--armanak-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Celý finanční ekosystém vaší firmy.
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.2rem",
              color: "var(--armanak-text-secondary)",
            }}
          >
            Všechny služby fungují dohromady.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.number}
          id={`service-${service.number}`}
          data-animate
          className={`py-24 transition-all duration-700 ${animationClass(`service-${service.number}`)}`}
          style={{
            background: index % 2 === 0
              ? "linear-gradient(135deg, rgba(239, 246, 255, 0.3) 0%, rgba(236, 254, 255, 0.3) 100%)"
              : "linear-gradient(135deg, rgba(6, 182, 212, 0.02) 0%, rgba(37, 99, 196, 0.02) 100%)",
            position: "relative",
          }}
        >
          <div
            className="absolute top-20 opacity-[0.06] pointer-events-none"
            style={{
              left: index % 2 === 0 ? "5%" : "auto",
              right: index % 2 === 1 ? "5%" : "auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "15rem",
              fontWeight: 800,
              background: index % 2 === 0
                ? "linear-gradient(135deg, rgba(37, 99, 196, 0.4), rgba(6, 182, 212, 0.4))"
                : "linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(37, 99, 196, 0.4))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {service.number}
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Dekorativní gradient kruhy */}
            <div
              className="absolute opacity-30"
              style={{
                top: index % 2 === 0 ? "10%" : "auto",
                bottom: index % 2 === 1 ? "10%" : "auto",
                left: index % 2 === 0 ? "5%" : "auto",
                right: index % 2 === 1 ? "5%" : "auto",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${
                  index % 2 === 0 ? "rgba(37, 99, 196, 0.08)" : "rgba(6, 182, 212, 0.08)"
                } 0%, transparent 70%)`,
                filter: "blur(40px)",
              }}
            />
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="inline-flex px-4 py-2 rounded-full mb-6"
                  style={{
                    background: "linear-gradient(135deg, #EFF6FF, #ECFEFF)",
                    border: "1px solid rgba(37, 99, 196, 0.15)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "var(--armanak-brand-blue)",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.number} / {service.badge}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--armanak-text-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.1rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  {service.perex}
                </p>

                <div className="space-y-3 mb-6">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))" }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--armanak-text-secondary)",
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="inline-block px-5 py-2 rounded-full"
                  style={{
                    background: "var(--armanak-bg-secondary)",
                    border: "1px solid var(--armanak-border)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--armanak-text-secondary)",
                  }}
                >
                  <strong style={{ color: "var(--armanak-text-primary)" }}>Pro koho:</strong> {service.tag}
                </div>

                {service.quote && (
                  <div
                    className="mt-6 p-5 rounded-2xl"
                    style={{
                      background: "#EFF6FF",
                      borderLeft: "3px solid transparent",
                      borderImage: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan)) 1",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        fontStyle: "italic",
                        color: "var(--armanak-text-primary)",
                      }}
                    >
                      "{service.quote}"
                    </p>
                  </div>
                )}

                {service.highlight && (
                  <div
                    className="mt-6 p-6 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, #EFF6FF, #ECFEFF)",
                      border: "1px solid rgba(37, 99, 196, 0.15)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--armanak-text-primary)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {service.highlight}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.85rem",
                        color: "var(--armanak-brand-blue)",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      CFO as a Service — flexibilní & efektivní
                    </p>
                  </div>
                )}
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {service.process ? (
                  <div>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.process.map((step, i) => (
                        <div
                          key={i}
                          className="bg-white p-6 rounded-2xl text-center transition-all hover:shadow-lg hover:-translate-y-1"
                          style={{
                            border: "1px solid var(--armanak-border)",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: "1.5rem",
                              fontWeight: 800,
                              background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {step.step}
                          </div>
                          <div
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "0.85rem",
                              color: "var(--armanak-text-secondary)",
                            }}
                          >
                            {step.description}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="bg-white p-6 rounded-2xl"
                      style={{
                        border: "1px solid var(--armanak-border)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--armanak-text-primary)",
                          marginBottom: "1rem",
                        }}
                      >
                        Deliverables:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables?.map((item, i) => (
                          <div
                            key={i}
                            className="px-4 py-2 rounded-full"
                            style={{
                              background: "#EFF6FF",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "0.85rem",
                              color: "var(--armanak-brand-blue)",
                              fontWeight: 500,
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-md">
                      <svg viewBox="0 0 400 300" className="w-full h-auto">
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "var(--armanak-brand-blue)", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "var(--armanak-brand-cyan)", stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <rect x="50" y="50" width="300" height="200" rx="16" fill="#EFF6FF" stroke={`url(#gradient-${index})`} strokeWidth="2" />
                        <text x="200" y="150" textAnchor="middle" fill="var(--armanak-brand-blue)" fontSize="80" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
                          {service.number}
                        </text>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        id="cta"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("cta")} relative overflow-hidden`}
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 50%, #EFF6FF 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 196, 0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--armanak-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Rezervujte si konzultaci
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              color: "var(--armanak-text-secondary)",
              marginBottom: "2rem",
            }}
          >
            Bezplatná. Nezávazná. Online nebo v Brně.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {[
              { icon: <Clock className="w-4 h-4" />, text: "30 minut" },
              { icon: <MessageCircle className="w-4 h-4" />, text: "Online nebo Brno" },
              { icon: <CheckCircle className="w-4 h-4" />, text: "Zdarma" },
            ].map((pill, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                style={{
                  background: "white",
                  border: "1px solid var(--armanak-border)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.88rem",
                  color: "var(--armanak-text-secondary)",
                }}
              >
                <span style={{ color: "var(--armanak-brand-blue)" }}>{pill.icon}</span>
                {pill.text}
              </div>
            ))}
          </div>

          <a
            href="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white text-center transition-all mb-4"
            style={{
              background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              boxShadow: "0 4px 12px rgba(37, 99, 196, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 196, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 196, 0.2)";
            }}
          >
            <Calendar className="w-5 h-5" />
            Vybrat termín
          </a>
          {/* DOPLŇ BOOKING LINK Z GOOGLE CALENDAR */}
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.88rem",
              color: "var(--armanak-text-secondary)",
            }}
          >
            nebo{" "}
            <Link
              to="/kontakt"
              style={{ color: "var(--armanak-brand-blue)" }}
              className="hover:underline"
            >
              napište nám →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
