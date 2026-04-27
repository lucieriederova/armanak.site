import { useState } from "react";
import { User, MapPin, Globe, Clock, Check, Zap, Gift, Key, MessageCircle, CheckCircle, Calendar } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    gdpr: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        gdpr: false,
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="bg-white">
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #EFF6FF, #ECFEFF)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
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
            Rezervujte si konzultaci
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.2rem",
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
              fontSize: "1.1rem",
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
              fontSize: "0.95rem",
              color: "var(--armanak-text-secondary)",
            }}
          >
            Raději napište ↓
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--armanak-bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div
              className="bg-white p-10 rounded-3xl"
              style={{
                border: "1px solid var(--armanak-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--armanak-text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Napište nám
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  color: "var(--armanak-text-secondary)",
                  marginBottom: "2rem",
                }}
              >
                Ozveme se do 24 hodin.
              </p>

              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "var(--armanak-success)", opacity: 0.9 }}
                  >
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--armanak-text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Děkujeme!
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                      color: "var(--armanak-text-secondary)",
                    }}
                  >
                    Ozveme se do 24 hodin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.88rem",
                          color: "var(--armanak-text-primary)",
                          fontWeight: 500,
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all"
                        style={{
                          border: "1.5px solid var(--armanak-border)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--armanak-text-primary)",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-brand-blue)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-border)";
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.88rem",
                          color: "var(--armanak-text-primary)",
                          fontWeight: 500,
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Firma
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all"
                        style={{
                          border: "1.5px solid var(--armanak-border)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--armanak-text-primary)",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-brand-blue)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-border)";
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.88rem",
                          color: "var(--armanak-text-primary)",
                          fontWeight: 500,
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all"
                        style={{
                          border: "1.5px solid var(--armanak-border)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--armanak-text-primary)",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-brand-blue)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-border)";
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.88rem",
                          color: "var(--armanak-text-primary)",
                          fontWeight: 500,
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all"
                        style={{
                          border: "1.5px solid var(--armanak-border)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--armanak-text-primary)",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-brand-blue)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--armanak-border)";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.88rem",
                        color: "var(--armanak-text-primary)",
                        fontWeight: 500,
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Jak vám můžeme pomoci?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl transition-all resize-none"
                      style={{
                        border: "1.5px solid var(--armanak-border)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.95rem",
                        color: "var(--armanak-text-primary)",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--armanak-brand-blue)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--armanak-border)";
                      }}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdpr"
                      name="gdpr"
                      required
                      checked={formData.gdpr}
                      onChange={handleChange}
                      className="mt-1"
                      style={{ accentColor: "var(--armanak-brand-blue)" }}
                    />
                    <label
                      htmlFor="gdpr"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.85rem",
                        color: "var(--armanak-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      Souhlasím se{" "}
                      <a
                        href="#"
                        style={{ color: "var(--armanak-brand-blue)" }}
                        className="hover:underline"
                      >
                        zpracováním osobních údajů
                      </a>{" "}
                      za účelem zodpovězení dotazu. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-full text-white text-center transition-all"
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
                    Odeslat zprávu
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--armanak-text-primary)",
                  marginBottom: "2rem",
                }}
              >
                Kontaktní informace
              </h2>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <User className="w-5 h-5" style={{ color: "var(--armanak-brand-blue)" }} />,
                    label: "Tým",
                    value: "Sylvie PhD., Pavla & Vilém",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" style={{ color: "var(--armanak-brand-cyan)" }} />,
                    label: "Sídlo",
                    value: "Brno, Česká republika (+ online)",
                  },
                  {
                    icon: <Globe className="w-5 h-5" style={{ color: "var(--armanak-brand-blue)" }} />,
                    label: "Web",
                    value: "armanak.cz",
                  },
                  {
                    icon: <Clock className="w-5 h-5" style={{ color: "var(--armanak-brand-cyan)" }} />,
                    label: "Hodiny",
                    value: "Po–Pá 8:00–17:00",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#EFF6FF" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.8rem",
                          color: "var(--armanak-text-tertiary)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--armanak-text-primary)",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #EFF6FF, #ECFEFF)",
                  border: "1px solid rgba(37, 99, 196, 0.15)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--armanak-text-primary)",
                    lineHeight: 1.5,
                    marginBottom: "1rem",
                  }}
                >
                  25 let praxe | Brno & online
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  Jeden kontakt pro vše. Odpovíme do 24 hodin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ background: "var(--armanak-bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--armanak-text-primary)",
                marginBottom: "1rem",
              }}
            >
              Proč nás kontaktovat
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "Rychlá odpověď",
                description: "Odpovíme do 24 hodin, většinou mnohem dříve",
              },
              {
                icon: <Gift className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "Zdarma",
                description: "První konzultace bez závazků a poplatků",
              },
              {
                icon: <Key className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "Jeden partner",
                description: "Žádné přeposílání, komunikujete přímo s odborníky",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl text-center transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  border: "1px solid var(--armanak-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#EFF6FF" }}
                >
                  {benefit.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--armanak-text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {benefit.title}
                </h4>
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
    </div>
  );
}
