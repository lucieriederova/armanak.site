import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { 
  TrendingUp, Users, Zap, Target, BarChart3, Coins, 
  UserCheck, LineChart, Settings, Briefcase, Star, 
  Clock, MessageCircle, CheckCircle, Calendar 
} from "lucide-react";
import { CursorTrail } from "../components/CursorTrail";
// Import nové 3D komponenty
import { RotatingLogo3D } from "../components/RotatingLogo3D";
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
      
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ background: "var(--armanak-bg-primary)" }}
      >
        {/* Background Orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{ background: "rgba(37, 99, 196, 0.06)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full"
          style={{ background: "rgba(6, 182, 212, 0.08)", filter: "blur(80px)" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT COLUMN - TEXT */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background: "linear-gradient(135deg, #EFF6FF, #ECFEFF)",
                  border: "1px solid rgba(37, 99, 196, 0.15)",
                }}
              >
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--armanak-brand-blue)",
                  textTransform: "uppercase",
                }}>
                  FINANČNÍ VEDENÍ FIREM · OD ROKU 1999
                </span>
              </div>

              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(3.5rem, 7vw, 6rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--armanak-text-primary)",
                marginBottom: "1.5rem",
              }}>
                Více než{" "}
                <span style={{
                  background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  účetnictví.
                </span>
              </h1>

              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.1rem",
                color: "var(--armanak-text-secondary)",
                lineHeight: 1.8,
                maxWidth: "540px",
                marginBottom: "2.5rem",
              }}>
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
                >
                  Naše služby →
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN - 3D LOGO (NAHRAZENO) */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div
                className="w-[550px] h-[550px] rounded-full flex items-center justify-center relative"
                style={{
                  background: "radial-gradient(circle, #EFF6FF 0%, #F8FAFC 100%)",
                  border: "1px solid #DBEAFE",
                  boxShadow: "inset 0 0 40px rgba(37, 99, 196, 0.03)"
                }}
              >
                {/* Zde voláme 3D komponentu */}
                <div className="w-full h-full">
                  <RotatingLogo3D />
                </div>

                {/* Jemný odlesk pod logem pro hloubku */}
                <div 
                  className="absolute bottom-1/4 w-32 h-8 rounded-[100%] blur-2xl opacity-20"
                  style={{ background: 'var(--armanak-brand-blue)' }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        className="py-6"
        style={{ background: "var(--armanak-bg-secondary)", borderTop: "1px solid var(--armanak-border)", borderBottom: "1px solid var(--armanak-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "var(--armanak-text-secondary)" }}>
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

      {/* STATS SECTION */}
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
              <div key={i} className="text-center transition-transform hover:scale-105" style={{ borderRight: i < 3 ? "1px solid var(--armanak-border)" : "none" }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "0.5rem",
                }}>
                  {stat.number}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--armanak-text-secondary)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZBYTEK KÓDU (Change, Services, Process, Why, Quote, Testimonials, CTA) zůstává stejný... */}
      {/* ... pro stručnost zde neuvádím, ale v souboru je ponech */}
    </div>
  );
}