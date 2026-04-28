import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, Zap, Users } from "lucide-react";
import sylviePhoto from "../../imports/sylvie-riederova.jpg";
import pavlaPhoto from "../../imports/pavla-riederova.jpg";
import luciePhoto from "../../imports/lucie-profile.jpg";

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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                initials: "S",
                name: "Sylvie PhD.",
                role: "Zakladatelka & CFO poradkyně",
                bio: "Vede strategické finance, nastavuje finanční řízení a pomáhá firmám proměňovat čísla v rozhodnutí s dlouhodobým dopadem.",
                linkedin: "https://www.linkedin.com/in/sylvie-riederova/",
                photo: sylviePhoto,
                photoPosition: "center 18%",
                photoScale: 1.18,
                highlights: ["Strategie", "CFO", "Daně"],
              },
              {
                initials: "P",
                name: "Pavla",
                role: "Finanční specialistka",
                bio: "Propojuje účetnictví, mzdy a finanční systémy do funkčního celku. Dbá na přesnost, efektivitu a hladký chod každodenních procesů.",
                linkedin: "https://www.linkedin.com/in/pavla-riederova/",
                photo: pavlaPhoto,
                photoPosition: "center 24%",
                photoScale: 1.22,
                highlights: ["Účetnictví", "Mzdy", "Systémy"],
              },
              {
                initials: "V",
                name: "Vilém",
                role: "Finanční analytik",
                bio: "Převádí finanční data do přehledných analýz, reportů a doporučení. Pomáhá vedení rychleji vidět souvislosti i růstové příležitosti.",
                linkedin: "",
                photo: "",
                highlights: ["Analýzy", "Reporting", "BI"],
              },
              {
                initials: "L",
                name: "Lucie",
                role: "IT podpora & PR",
                bio: "Zajišťuje technické zázemí, digitální podporu a komunikaci značky. Pomáhá, aby ARMANAK fungoval spolehlivě uvnitř i srozumitelně navenek.",
                linkedin: "https://www.linkedin.com/in/lucie-riederov%C3%A1-346779392/",
                photo: luciePhoto,
                photoPosition: "26% 28%",
                photoScale: 1.3,
                highlights: ["IT podpora", "PR", "Komunikace"],
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white transition-all hover:-translate-y-1.5 hover:shadow-xl relative"
                style={{
                  border: "1px solid var(--armanak-border)",
                  boxShadow: "0 8px 28px rgba(15, 23, 42, 0.06), 0 2px 10px rgba(37, 99, 196, 0.04)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{
                    background: "linear-gradient(90deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                  }}
                />
                {member.photo ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        objectPosition: member.photoPosition,
                        transform: `scale(${member.photoScale ?? 1})`,
                      }}
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-24"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.82) 100%)",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="relative aspect-[16/11] flex items-center justify-center overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,99,196,0.08), rgba(6,182,212,0.12))",
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, rgba(37,99,196,0.12), transparent 45%)",
                      }}
                    />
                    <div
                      className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full"
                      style={{
                        background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
                        color: "white",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        boxShadow: "0 16px 36px rgba(37, 99, 196, 0.18)",
                      }}
                    >
                      {member.initials}
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  <h3
                    className="text-center mb-2"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "var(--armanak-text-primary)",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    className="text-center mb-5"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.84rem",
                      fontWeight: 700,
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

                  <div className="mb-5 flex flex-wrap justify-center gap-2">
                    {member.highlights.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(37, 99, 196, 0.06)",
                          border: "1px solid rgba(37, 99, 196, 0.08)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.78rem",
                          color: "var(--armanak-text-secondary)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-center mb-6 flex-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.95rem",
                      color: "var(--armanak-text-secondary)",
                      lineHeight: 1.75,
                    }}
                  >
                    {member.bio}
                  </p>

                  {member.linkedin ? (
                    <div className="text-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full px-6 py-2.5 transition-all"
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
                  ) : (
                    <div className="text-center">
                      <span
                        className="inline-block rounded-full px-6 py-2.5"
                        style={{
                          background: "rgba(37, 99, 196, 0.05)",
                          color: "var(--armanak-text-secondary)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.82rem",
                          fontWeight: 500,
                        }}
                      >
                        Součást týmu ARMANAK
                      </span>
                    </div>
                  )}
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
