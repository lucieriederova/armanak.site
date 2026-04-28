// 1. Přidán import React (vyřeší chyby 'React' refers to a UMD global)
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Calendar } from "lucide-react";
import { GOOGLE_BOOKING_URL } from "../lib/booking";

// 2. Opravený import obrázku s @ts-ignore pro TypeScript
// @ts-ignore
import logoImg from "../../imports/arma.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { path: "/", label: "Úvod" },
    { path: "/o-nas", label: "O nás" },
    { path: "/sluzby", label: "Služby" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        isScrolled ? "shadow-lg backdrop-blur-xl" : "backdrop-blur-md"
      }`}
      style={{
        background: isScrolled
          ? "rgba(255, 255, 255, 0.4)"
          : "rgba(255, 255, 255, 0.15)",
        borderBottom: isScrolled ? "1px solid rgba(37, 99, 196, 0.1)" : "1px solid rgba(37, 99, 196, 0.03)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo kontejner */}
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
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--armanak-text-tertiary)", marginTop: "-2px" }}>
              Accounts Advisory
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.88rem",
                color: location.pathname === link.path ? "var(--armanak-text-primary)" : "var(--armanak-text-secondary)",
                fontWeight: location.pathname === link.path ? 500 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={GOOGLE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all"
          style={{
            background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.88rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            boxShadow: "0 4px 12px rgba(37, 99, 196, 0.2)",
          }}
          // @ts-ignore
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 196, 0.3)";
          }}
          // @ts-ignore
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 196, 0.2)";
          }}
        >
          <Calendar className="w-4 h-4" />
          Rezervovat
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          style={{ color: "var(--armanak-text-primary)" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobilní menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-xl" style={{ background: "rgba(239, 246, 255, 0.95)" }}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: location.pathname === link.path ? "var(--armanak-brand-blue)" : "var(--armanak-text-primary)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={GOOGLE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white mt-4"
            style={{
              background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            <Calendar className="w-5 h-5" />
            Rezervovat
          </a>
        </div>
      )}
    </nav>
  );
}
