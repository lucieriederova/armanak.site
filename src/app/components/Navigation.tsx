import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Calendar } from "lucide-react";
import { GOOGLE_BOOKING_URL } from "../lib/booking";

// @ts-ignore
import logoImg from "../../imports/arma.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const links = [
    { path: "/", label: "Úvod" },
    { path: "/o-nas", label: "O nás" },
    { path: "/sluzby", label: "Služby" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md backdrop-blur-xl" : "backdrop-blur-md"
        }`}
        style={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.55)"
            : "rgba(255, 255, 255, 0.15)",
          borderBottom: isScrolled
            ? "1px solid rgba(37, 99, 196, 0.12)"
            : "1px solid rgba(37, 99, 196, 0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src={logoImg} alt="ARMANAK Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "var(--armanak-text-primary)" }}>
                ARMANAK
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "var(--armanak-text-tertiary)", marginTop: "-2px", letterSpacing: "0.05em" }}>
                Accounts Advisory
              </div>
            </div>
          </Link>

          {/* Desktop links */}
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

          {/* Desktop CTA */}
          <a
            href={GOOGLE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all"
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

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all"
            style={{
              background: isOpen ? "rgba(37, 99, 196, 0.08)" : "transparent",
              color: "var(--armanak-text-primary)",
            }}
            aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            <span
              className="transition-all duration-200"
              style={{ display: "flex", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          top: "64px",
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-8px)",
          background: "rgba(246, 250, 255, 0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col px-6 pt-8 pb-10 h-full">
          {/* Nav links */}
          <div className="flex flex-col">
            {links.map((link, i) => (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  className="flex items-center justify-between py-4 transition-colors"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: location.pathname === link.path ? 700 : 500,
                    color: location.pathname === link.path
                      ? "var(--armanak-brand-blue)"
                      : "var(--armanak-text-primary)",
                  }}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--armanak-brand-blue)" }}
                    />
                  )}
                </Link>
                {i < links.length - 1 && (
                  <div style={{ height: "1px", background: "rgba(37, 99, 196, 0.08)" }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA button */}
          <div className="mt-auto pt-8">
            <a
              href={GOOGLE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white"
              style={{
                background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(37, 99, 196, 0.25)",
              }}
            >
              <Calendar className="w-5 h-5" />
              Rezervovat konzultaci
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
