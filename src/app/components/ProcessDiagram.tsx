import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

export function ProcessDiagram() {
  const steps = [
    {
      number: 1,
      title: "Audit stavu",
      description: "Analyzujeme vaši současnou finanční situaci",
      icon: <Search className="w-6 h-6" />,
      color: "#2563C4",
    },
    {
      number: 2,
      title: "Návrh systému",
      description: "Navrhneme optimální finanční procesy",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "#1e88e5",
    },
    {
      number: 3,
      title: "Implementace",
      description: "Nasadíme řešení a digitalizujeme procesy",
      icon: <Rocket className="w-6 h-6" />,
      color: "#0ea5e9",
    },
    {
      number: 4,
      title: "Průběžný CFO",
      description: "Poskytujeme pravidelné finanční řízení",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "#06B6D4",
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Pozadí s kruhem a grafem */}
      <div className="relative w-full aspect-square max-w-lg mx-auto mb-8">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#2563C4", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 0.3 }} />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#2563C4", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Velký kruh */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="url(#circleGradient)"
            stroke="url(#lineGradient)"
            strokeWidth="2"
          />

          {/* Růstová čára grafu */}
          <path
            d="M 80 280 L 140 220 L 200 200 L 260 140 L 320 100"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Body na čáře */}
          <circle cx="80" cy="280" r="8" fill="#2563C4" />
          <circle cx="140" cy="220" r="8" fill="#1e88e5" />
          <circle cx="200" cy="200" r="8" fill="#0ea5e9" />
          <circle cx="260" cy="140" r="8" fill="#0ea5e9" />
          <circle cx="320" cy="100" r="10" fill="#06B6D4" />

          {/* Šipka na konci */}
          <path
            d="M 320 100 L 315 105 M 320 100 L 325 105"
            stroke="#06B6D4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Popisky kroků umístěné kolem kruhu */}
        <div className="absolute top-[70%] left-[5%] transform -translate-x-1/2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            style={{ background: steps[0].color, fontSize: "1.2rem" }}
          >
            1
          </div>
        </div>
        <div className="absolute top-[45%] left-[20%] transform -translate-x-1/2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            style={{ background: steps[1].color, fontSize: "1.2rem" }}
          >
            2
          </div>
        </div>
        <div className="absolute top-[35%] left-[50%] transform -translate-x-1/2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            style={{ background: steps[2].color, fontSize: "1.2rem" }}
          >
            3
          </div>
        </div>
        <div className="absolute top-[10%] right-[10%] transform translate-x-1/2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            style={{ background: steps[3].color, fontSize: "1.2rem" }}
          >
            4
          </div>
        </div>
      </div>

      {/* Detailní popis kroků */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative bg-white p-6 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1"
            style={{
              border: "1px solid var(--armanak-border)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            {/* Číslo kroku */}
            <div
              className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${step.color}, ${steps[Math.min(i + 1, steps.length - 1)].color})`,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.1rem",
              }}
            >
              {step.number}
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${step.color}20`, color: step.color }}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <h4
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--armanak-text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--armanak-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>

            {/* Spojovací čára k dalšímu kroku (kromě posledního) */}
            {i < steps.length - 1 && i % 2 === 1 && (
              <div
                className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                style={{
                  width: "2px",
                  height: "32px",
                  background: `linear-gradient(180deg, ${step.color}, ${steps[i + 1].color})`,
                }}
              />
            )}
            {i < steps.length - 1 && i % 2 === 0 && (
              <div
                className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2"
                style={{
                  width: "32px",
                  height: "2px",
                  background: `linear-gradient(90deg, ${step.color}, ${steps[i + 1].color})`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Callout box */}
      <div
        className="mt-8 p-6 rounded-2xl"
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
  );
}
