import { useState } from "react";

interface FlipCardProps {
  oldText: string;
  newText: string;
}

export function FlipCard({ oldText, newText }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-80 cursor-pointer"
      style={{ perspective: "1500px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Přední strana - DŘÍVE */}
        <div
          className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8"
          style={{
            border: "1px solid var(--armanak-border)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.03), 0 8px 20px rgba(0,0,0,0.06)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
            style={{ background: "var(--armanak-border)" }}
          />

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "var(--armanak-bg-secondary)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--armanak-text-tertiary)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--armanak-text-tertiary)" }}
            />
            Dříve
          </div>

          <p
            className="text-center mb-8"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.15rem",
              color: "var(--armanak-text-secondary)",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            {oldText}
          </p>

          <div
            className="text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              color: "var(--armanak-text-tertiary)",
            }}
          >
            Najeďte myší pro nový pohled →
          </div>
        </div>

        {/* Zadní strana - NYNÍ */}
        <div
          className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-8"
          style={{
            background: "linear-gradient(135deg, rgba(37, 99, 196, 0.08), rgba(6, 182, 212, 0.08))",
            border: "2px solid var(--armanak-brand-cyan)",
            boxShadow: "0 8px 12px rgba(6, 182, 212, 0.2), 0 16px 40px rgba(37, 99, 196, 0.15)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
            style={{
              background: "linear-gradient(90deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
            }}
          />

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(37, 99, 196, 0.2), rgba(6, 182, 212, 0.2))",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--armanak-brand-blue)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{
                background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
              }}
            />
            Nyní s ARMANAK
          </div>

          <p
            className="text-center px-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              background: "linear-gradient(135deg, var(--armanak-brand-blue), var(--armanak-brand-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.5,
            }}
          >
            {newText}
          </p>

          <div
            className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-3xl"
            style={{
              background: "linear-gradient(90deg, var(--armanak-brand-cyan), var(--armanak-brand-blue))",
            }}
          />
        </div>
      </div>
    </div>
  );
}
