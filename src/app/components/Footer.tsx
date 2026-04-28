// 1. Přidán import React
import React from "react";
import { Link } from "react-router";

// 2. Import loga (cesta by měla být stejná jako u navigace)
// @ts-ignore
import logoImg from "../../imports/arma.png";

export function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: "1px solid var(--armanak-border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <a
            href="mailto:armanak.info@gmail.com"
            className="inline-block gradient-text-hover transition-all"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            info@armanak.cz
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* NAHRAZENO: SVG logo za IMG */}
              <div className="w-11 h-11 flex items-center justify-center">
                <img 
                  src={logoImg} 
                  alt="ARMANAK Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--armanak-text-primary)" }}>
                  ARMANAK
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--armanak-text-tertiary)" }}>
                  Accounts Advisory
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "var(--armanak-text-secondary)", lineHeight: 1.6 }}>
              Finanční partner firem od roku 1999
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "var(--armanak-text-primary)", marginBottom: "1rem" }}>
              Navigace
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { path: "/", label: "Úvod" },
                { path: "/o-nas", label: "O nás" },
                { path: "/sluzby", label: "Služby" },
                { path: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem",
                    color: "var(--armanak-text-secondary)",
                  }}
                  className="hover:text-[var(--armanak-brand-blue)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "var(--armanak-text-primary)", marginBottom: "1rem" }}>
              Služby
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Účetnictví",
                "Daně & DPH",
                "Mzdy & HR",
                "Budgety & Prognózy",
                "Finanční systémy",
                "CFO Poradenství",
              ].map((service) => (
                <Link
                  key={service}
                  to="/sluzby"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem",
                    color: "var(--armanak-text-secondary)",
                  }}
                  className="hover:text-[var(--armanak-brand-blue)] transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "var(--armanak-text-primary)", marginBottom: "1rem" }}>
              Kontakt
            </h4>
            <div className="flex flex-col gap-3">
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "var(--armanak-text-tertiary)", marginBottom: "0.25rem" }}>
                  Email
                </div>
                <a
                  href="mailto:info@armanak.cz"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem",
                    color: "var(--armanak-text-secondary)",
                  }}
                  className="hover:text-[var(--armanak-brand-blue)] transition-colors"
                >
                  info@armanak.cz
                </a>
              </div>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "var(--armanak-text-tertiary)", marginBottom: "0.25rem" }}>
                  Sídlo
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "var(--armanak-text-secondary)" }}>
                  Brno, Česká republika
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: "1px solid var(--armanak-border)" }}>
          <div className="text-center" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "var(--armanak-text-tertiary)" }}>
            © {new Date().getFullYear()} ARMANAK Accounts Advisory CZ. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
}