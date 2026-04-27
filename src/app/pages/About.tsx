import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, Zap, Users } from "lucide-react";

export function About() {
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

  return (
    <div className="bg-white">
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)" }}
      >
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: "rgba(37, 99, 196, 0.08)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full"
          style={{
            background: "rgba(6, 182, 212, 0.1)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
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
              O NÁS
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--armanak-text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Finanční jistota začíná partnerstvím.
          </h1>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.3rem",
              background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 600,
            }}
          >
            25 let · Brno & online · ARMANAK CZ
          </p>
        </div>
      </section>

      <section
        id="mission"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("mission")} relative overflow-hidden`}
        style={{ background: "#FFFFFF" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-32"
          style={{
            background: "linear-gradient(180deg, rgba(239, 246, 255, 0.5) 0%, transparent 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
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
                  NAŠE MISE
                </span>
              </div>
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
                Více než účetnictví.
              </h2>
              <div className="space-y-4">
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  V ARMANAK nepřistupujeme k účetnictví jako k povinnosti, ale jako k{" "}
                  <strong style={{ color: "var(--armanak-text-primary)" }}>
                    nástroji strategického řízení
                  </strong>
                  . Naším cílem není jen zpracovat čísla, ale přetvořit je v jasný jazyk,
                  kterému rozumíte.
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  Propojujeme všechny{" "}
                  <strong style={{ color: "var(--armanak-text-primary)" }}>
                    finanční služby pod jednou střechou
                  </strong>{" "}
                  — účetnictví, daně, mzdy, budgety, finanční systémy i CFO poradenství.
                  Díky tomu vidíme celý obraz vašich financí, ne jen dílčí fragmenty.
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  Věříme v{" "}
                  <strong style={{ color: "var(--armanak-text-primary)" }}>
                    proaktivní přístup a digitalizaci
                  </strong>
                  . Pomáháme firmám nejen spravovat, ale především plánovat, optimalizovat
                  a růst s jistotou.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="space-y-6">
                {[
                  { year: "1999", text: "Sylvie PhD. zakládá ARMANAK v Brně" },
                  { year: "2005–2010", text: "Rozšíření o daňové a mzdové služby" },
                  { year: "2015", text: "Pavla a digitalizace procesů" },
                  { year: "2019–2021", text: "Cloudová řešení, 100% digitalizace" },
                  { year: "2025", text: "25 let praxe, CFO as a Service" },
                ].map((milestone, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ background: "var(--armanak-brand-blue)" }}
                      />
                      {i < 4 && (
                        <div
                          className="w-0.5 h-full mt-2"
                          style={{
                            background: "linear-gradient(180deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                            minHeight: "60px",
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "1.3rem",
                          fontWeight: 800,
                          background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {milestone.year}
                      </div>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.95rem",
                          color: "var(--armanak-text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {milestone.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("team")} relative overflow-hidden`}
        style={{ background: "linear-gradient(135deg, rgba(37, 99, 196, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)" }}
      >
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 196, 0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
        />
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
                TÝM
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
              Lidé za ARMANAK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                initials: "S",
                name: "Sylvie PhD.",
                role: "Zakladatelka & CFO poradkyně",
                bio: "25 let v české finanční praxi. Expertka na strategické finanční řízení a daňovou optimalizaci. Pomáhá firmám růst s jasným finančním kompasem.",
              },
              {
                initials: "P",
                name: "Pavla",
                role: "Finanční specialistka",
                bio: "Odbornice na účetnictví, mzdy a finanční systémy. Specialistka na digitalizaci procesů a implementaci cloudových řešení pro maximální efektivitu.",
              },
              {
                initials: "V",
                name: "Vilém",
                role: "Finanční analytik",
                bio: "Expert na finanční analýzy a business intelligence. Transformuje data do strategických doporučení a pomáhá firmám identifikovat růstové příležitosti.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
                style={{
                  border: "1px solid var(--armanak-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{
                    background: "linear-gradient(90deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                  }}
                />
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                    color: "white",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                  }}
                >
                  {member.initials}
                </div>
                <h3
                  className="text-center mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--armanak-text-primary)",
                  }}
                >
                  {member.name}
                </h3>
                <div
                  className="text-center mb-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {member.role}
                </div>
                <p
                  className="text-center mb-6"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {member.bio}
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-6 py-2.5 rounded-full transition-all"
                    style={{
                      border: "1.5px solid var(--armanak-border)",
                      color: "var(--armanak-text-primary)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
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
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="values"
        data-animate
        className={`py-24 transition-all duration-700 ${animationClass("values")} relative overflow-hidden`}
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
          }}
        />
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
                NAŠE HODNOTY
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
              Proč nás klienti volí
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "Praxe",
                description: "25 let reálných zkušeností s českou ekonomikou. Známe prostředí, pravidla i výzvy českého byznysu.",
              },
              {
                icon: <Target className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "Komplexnost",
                description: "Vidíme celé finance firmy — vše propojeno v jednom systému. Jeden partner, jeden pohled.",
              },
              {
                icon: <Zap className="w-6 h-6" style={{ color: "var(--armanak-brand-blue)" }} />,
                title: "Technologie",
                description: "Cloudové nástroje, automatizace, digitalizace. Maximální efektivita bez zbytečné papírové administrativy.",
              },
              {
                icon: <Users className="w-6 h-6" style={{ color: "var(--armanak-brand-cyan)" }} />,
                title: "Jednoduchost",
                description: "Jeden kontakt, žádné přeposílání. Odpovídáme rychle, mluvíme lidsky, jste vždy v obraze.",
              },
            ].map((value, i) => (
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
                  {value.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--armanak-text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
