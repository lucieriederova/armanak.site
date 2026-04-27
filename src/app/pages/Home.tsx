import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Check, TrendingUp, Users, Zap, Target, BarChart3, Coins, UserCheck, LineChart, Settings, Briefcase, Star, Clock, MessageCircle, CheckCircle, Calendar } from "lucide-react";
import { CursorTrail } from "../components/CursorTrail";
import { ProcessDiagram } from "../components/ProcessDiagram";
import { FlipCard } from "../components/FlipCard";

export function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => heroObserver.disconnect();
  }, []);

  const animationClass = (id: string) =>
    isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <div className="bg-white">
      {isHeroVisible && <CursorTrail />}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ background: "var(--armanak-bg-primary)" }}
      >
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: "rgba(37, 99, 196, 0.06)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full"
          style={{
            background: "rgba(6, 182, 212, 0.08)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
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
                  FINANČNÍ VEDENÍ FIREM · OD ROKU 1999
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--armanak-text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Více než{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  účetnictví.
                </span>
              </h1>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.1rem",
                  color: "var(--armanak-text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "540px",
                  marginBottom: "2.5rem",
                }}
              >
                Přetváříme strohou abecedu účetnictví v jasný jazyk vašich financí.
                Jako váš finanční partner vám pomáháme rozhodovat se s jistotou.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  to="/kontakt"
                  className="px-7 py-4 rounded-full text-white text-center transition-all"
                  style={{
                    background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem",
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
                  Domluvit konzultaci
                </Link>
                <Link
                  to="/sluzby"
                  className="px-7 py-4 rounded-full text-center transition-all"
                  style={{
                    background: "transparent",
                    border: "1.5px solid var(--armanak-border)",
                    color: "var(--armanak-text-primary)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--armanak-brand-blue)";
                    e.currentTarget.style.color = "var(--armanak-brand-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--armanak-border)";
                    e.currentTarget.style.color = "var(--armanak-text-primary)";
                  }}
                >
                  Naše služby →
                </Link>
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.82rem",
                  color: "var(--armanak-text-tertiary)",
                }}
              >
                nebo{" "}
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--armanak-brand-blue)" }}
                  className="hover:underline"
                >
                  rezervujte termín přímo →
                </a>
                {/* DOPLŇ BOOKING LINK Z GOOGLE CALENDAR */}
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div
                className="w-[500px] h-[500px] rounded-full flex items-center justify-center"
                style={{
                  background: "#EFF6FF",
                  border: "1px solid #DBEAFE",
                }}
              >
                <div className="grid grid-cols-2 gap-4 p-8">
                  {[
                    { label: "Revenue", value: "+247%", color: "var(--armanak-brand-blue)" },
                    { label: "Cash Flow", value: "+89%", color: "var(--armanak-brand-cyan)" },
                    { label: "Profit", value: "+156%", color: "var(--armanak-success)" },
                    { label: "Growth", value: "+312%", color: "var(--armanak-brand-blue)" },
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-2xl transition-transform hover:scale-105"
                      style={{
                        border: "1px solid var(--armanak-border)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.7rem",
                          color: "var(--armanak-text-tertiary)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {metric.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "1.8rem",
                          fontWeight: 800,
                          color: metric.color,
                        }}
                      >
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-6"
        style={{ background: "var(--armanak-bg-secondary)", borderTop: "1px solid var(--armanak-border)", borderBottom: "1px solid var(--armanak-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.88rem",
              color: "var(--armanak-text-secondary)",
            }}
          >
            <span style={{ fontWeight: 600 }}>Finanční partner firem od roku 1999</span>
            <span className="mx-4" style={{ color: "var(--armanak-text-tertiary)" }}>·</span>
            <span>25+ let praxe</span>
            <span className="mx-4" style={{ color: "var(--armanak-text-tertiary)" }}>·</span>
            <span>100% digitalizace</span>
            <span className="mx-4" style={{ color: "var(--armanak-text-tertiary)" }}>·</span>
            <span>Brno & online</span>
          </div>
        </div>
      </section>

      <section
        id="stats"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("stats")}`}
        style={{ background: "var(--armanak-bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25", label: "Let praxe" },
              { number: "360°", label: "Pohled na finance" },
              { number: "100%", label: "Digitalizace" },
              { number: "1", label: "Finanční partner" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center transition-transform hover:scale-105"
                style={{
                  borderRight: i < 3 ? "1px solid var(--armanak-border)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--armanak-text-secondary)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="change"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("change")}`}
        style={{ background: "var(--armanak-bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
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
                NOVÝ POHLED
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--armanak-text-primary)",
              }}
            >
              Finanční přehled jako konkurenční výhoda.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                old: "Účetnictví = povinnost",
                new: "Finanční přehled = konkurenční výhoda",
              },
              {
                old: "Zpětný pohled na data",
                new: "Plánování a prognózování do budoucna",
              },
              {
                old: "Specialista pro jednu oblast",
                new: "Komplexní finanční partner firmy",
              },
            ].map((item, i) => (
              <FlipCard key={i} oldText={item.old} newText={item.new} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("services")}`}
        style={{ background: "var(--armanak-bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
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
                SLUŽBY & KOMPETENCE
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
              Celý finanční ekosystém pod jednou střechou.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.1rem",
                color: "var(--armanak-text-secondary)",
              }}
            >
              Všechny služby fungují dohromady — jeden integrovaný pohled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "Účetnictví",
                description: "Vedení účtu, uzávěrky, vykaznictví, kontroling",
              },
              {
                icon: <Coins className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "Daně & DPH",
                description: "Daňové plánování, optimalizace, přiznání",
              },
              {
                icon: <UserCheck className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "Mzdy & HR",
                description: "Výpočet mezd, odvody, mzdové audity",
              },
              {
                icon: <LineChart className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "Budgety & Prognózy",
                description: "Roční plány, cash-flow, scénáře",
              },
              {
                icon: <Settings className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "Finanční systémy",
                description: "SW, digitalizace, automatizace",
              },
              {
                icon: <Briefcase className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "CFO Poradenství",
                description: "Strategické rozhodování, investice",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  border: "1px solid var(--armanak-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#EFF6FF" }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--armanak-text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/sluzby"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                color: "var(--armanak-brand-blue)",
                fontWeight: 500,
              }}
              className="hover:underline"
            >
              Zobrazit všechny služby →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="process"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("process")}`}
        style={{ background: "var(--armanak-bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--armanak-text-primary)",
                  marginBottom: "2rem",
                }}
              >
                Od chaosu k systémové finanční jasnosti.
              </h2>

              <div className="space-y-6 mb-8">
                {[
                  { step: "1", title: "Audit stavu", description: "Analyzujeme vaši současnou finanční situaci" },
                  { step: "2", title: "Návrh systému", description: "Navrhneme optimální finanční procesy" },
                  { step: "3", title: "Implementace", description: "Nasadíme řešení a digitalizujeme procesy" },
                  { step: "4", title: "Průběžný CFO", description: "Poskytujeme pravidelné finanční řízení" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                        color: "white",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "var(--armanak-text-primary)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--armanak-text-secondary)",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "#EFF6FF",
                  borderLeft: "3px solid transparent",
                  borderImage: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan)) 1",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--armanak-text-primary)",
                    lineHeight: 1.6,
                  }}
                >
                  Finanční data, která chápete, a která vám říkají, co dělat dál.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <svg viewBox="0 0 400 400" className="w-full h-auto">
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#2563C4", stopOpacity: 0.15 }} />
                      <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 0.15 }} />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: "#2563C4", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>

                  {/* Velký kruh pozadí */}
                  <circle cx="200" cy="200" r="180" fill="url(#circleGradient)" stroke="url(#lineGradient)" strokeWidth="2" />

                  {/* Růstová křivka */}
                  <path
                    d="M 70 320 Q 120 260, 150 220 T 250 140 T 330 80"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Body s popisky kroků */}
                  <g>
                    <circle cx="70" cy="320" r="10" fill="#2563C4" />
                    <text x="70" y="355" textAnchor="middle" fill="#2563C4" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">1</text>
                  </g>

                  <g>
                    <circle cx="150" cy="220" r="10" fill="#1e88e5" />
                    <text x="150" y="255" textAnchor="middle" fill="#1e88e5" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">2</text>
                  </g>

                  <g>
                    <circle cx="250" cy="140" r="10" fill="#0ea5e9" />
                    <text x="250" y="175" textAnchor="middle" fill="#0ea5e9" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">3</text>
                  </g>

                  <g>
                    <circle cx="330" cy="80" r="12" fill="#06B6D4" />
                    <text x="330" y="115" textAnchor="middle" fill="#06B6D4" fontSize="14" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">4</text>

                    {/* Šipka nahoru */}
                    <path d="M 330 60 L 325 70 M 330 60 L 335 70" stroke="#06B6D4" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("why")}`}
        style={{ background: "linear-gradient(135deg, #EFF6FF, #ECFEFF)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-flex px-4 py-2 rounded-full mb-6"
              style={{
                background: "white",
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
                PROČ NÁS KLIENTI VOLÍ
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--armanak-text-primary)",
              }}
            >
              Finanční jistota začíná partnerstvím.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "PRAXE",
                description: "25 let reálných zkušeností s českou ekonomikou",
              },
              {
                icon: <Target className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "KOMPLEXNOST",
                description: "Vidíme celé finance firmy — vše propojeno",
              },
              {
                icon: <Zap className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "TECHNOLOGIE",
                description: "Cloudové nástroje, automatizace, digitalizace",
              },
              {
                icon: <Users className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "JEDNODUCHOST",
                description: "Jeden kontakt, žádné přeposílání",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  border: "1px solid var(--armanak-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#EFF6FF" }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "var(--armanak-text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quote"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("quote")}`}
        style={{ background: "var(--armanak-bg-primary)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            style={{
              fontSize: "5rem",
              background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 0.5,
              marginBottom: "2rem",
            }}
          >
            "
          </div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.6rem",
              fontStyle: "italic",
              color: "var(--armanak-text-primary)",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Správná čísla jsou pro nás základ, ale náš cíl je vyšší. V Armanaku
            přetváříme strohou abecedu účetnictví v jasný jazyk vašich financí.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
              }}
            >
              SR
            </div>
            <div className="text-left">
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--armanak-text-primary)",
                }}
              >
                Sylvie PhD.
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.88rem",
                  color: "var(--armanak-text-secondary)",
                }}
              >
                zakladatelka ARMANAK
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("testimonials")}`}
        style={{ background: "var(--armanak-bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
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
                CO ŘÍKAJÍ NAŠI KLIENTI
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--armanak-text-primary)",
              }}
            >
              Důvěra našich klientů
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Martin Novák",
                role: "CEO, TechStart s.r.o.",
                text: "ARMANAK pro nás znamenal revoluci ve financích. Konečně rozumíme číslům a víme, kam firma míří. Jejich CFO poradenství nám pomohlo růst o 150%.",
                rating: 5,
              },
              {
                name: "Jana Svobodová",
                role: "Majitelka, Design Studio",
                text: "Kompletní servis pod jednou střechou. Účetnictví, daně, mzdy - vše funguje naprosto hladce. Můžu se konečně věnovat svému byznysu.",
                rating: 5,
              },
              {
                name: "Petr Dvořák",
                role: "CFO, InnoGroup a.s.",
                text: "Proaktivní přístup a digitalizace, kterou ARMANAK přinesl, nám ušetřila stovky hodin ročně. Jejich reporting je nejlepší, jaký jsem kdy viděl.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  border: "1px solid var(--armanak-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      style={{ fill: "var(--armanak-brand-cyan)", color: "var(--armanak-brand-cyan)" }}
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    color: "var(--armanak-text-primary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                      color: "white",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--armanak-text-primary)",
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.85rem",
                        color: "var(--armanak-text-secondary)",
                      }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("cta")}`}
        style={{ background: "linear-gradient(135deg, #EFF6FF, #ECFEFF)" }}
      >
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
