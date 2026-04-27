import { useEffect, useRef, useState } from "react";

interface Symbol {
  id: number;
  x: number;
  y: number;
  content: string;
  color: string;
  rotation: number;
  size: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export function CursorTrail() {
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const symbolIdRef = useRef(0);
  const rippleIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  const symbolPool = [
    "+247%", "+89%", "+156%", "+312%", "+45%", "+123%", "+67%", "+198%",
    "$", "€", "Kč", "£", "¥",
    "↗", "↑", "→",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  ];

  const colorPalette = [
    "#1e3a8a", // tmavě modrá
    "#2563eb", // sytě modrá
    "#06b6d4", // tyrkysová
    "#22d3ee", // světle tyrkysová
  ];

  useEffect(() => {
    // Detekce touch zařízení
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Detekce prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lastX = 0;
    let lastY = 0;
    let accumulatedDistance = 0;
    const threshold = Math.random() * 50 + 100; // 100-150px

    let rippleAccumulatedDistance = 0;
    const rippleThreshold = 60; // Ripple každých 60px pro dramatičtější efekt

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Vypočítej vzdálenost od poslední pozice
      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      accumulatedDistance += distance;
      rippleAccumulatedDistance += distance;

      // Vytvoř ripple efekt
      if (rippleAccumulatedDistance >= rippleThreshold) {
        rippleAccumulatedDistance = 0;

        const newRipple: Ripple = {
          id: rippleIdRef.current++,
          x: clientX,
          y: clientY,
          rotation: Math.random() * 360,
          scaleX: Math.random() * 0.5 + 0.8, // 0.8-1.3
          scaleY: Math.random() * 0.5 + 0.8, // 0.8-1.3
        };

        setRipples((prev) => [...prev, newRipple]);

        // Odstraň ripple po 1.7 sekundách
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 1700);
      }

      // Vytvoř symbol
      if (accumulatedDistance >= threshold) {
        accumulatedDistance = 0;

        const newSymbol: Symbol = {
          id: symbolIdRef.current++,
          x: clientX,
          y: clientY,
          content: symbolPool[Math.floor(Math.random() * symbolPool.length)],
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          rotation: Math.random() * 360,
          size: Math.random() * 6 + 14, // 14-20px
        };

        setSymbols((prev) => [...prev, newSymbol]);

        // Odstraň symbol po 1.5 sekundách
        setTimeout(() => {
          setSymbols((prev) => prev.filter((s) => s.id !== newSymbol.id));
        }, 1500);
      }

      lastX = clientX;
      lastY = clientY;
      lastPositionRef.current = { x: clientX, y: clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Cleanup starých symbolů a ripples (fail-safe)
  useEffect(() => {
    const interval = setInterval(() => {
      setSymbols((prev) => {
        if (prev.length > 50) {
          return prev.slice(-30);
        }
        return prev;
      });
      setRipples((prev) => {
        if (prev.length > 30) {
          return prev.slice(-20);
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {ripples.map((ripple) => (
        <div
          key={`ripple-${ripple.id}`}
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              borderRadius: "60% 40% 65% 35% / 45% 55% 45% 55%",
              background: "radial-gradient(ellipse at 30% 30%, rgba(37, 99, 196, 0.6) 0%, rgba(6, 182, 212, 0.4) 25%, rgba(34, 211, 238, 0.2) 50%, transparent 75%)",
              pointerEvents: "none",
              animation: `waterInkExpand1 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              willChange: "transform, opacity, filter",
              transform: `translate(-50%, -50%) rotate(${ripple.rotation}deg)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "35px",
              height: "35px",
              borderRadius: "45% 55% 50% 50% / 60% 40% 60% 40%",
              background: "radial-gradient(ellipse at 60% 50%, rgba(6, 182, 212, 0.5) 0%, rgba(34, 211, 238, 0.3) 30%, transparent 70%)",
              pointerEvents: "none",
              animation: `waterInkExpand2 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              willChange: "transform, opacity, filter",
              transform: `translate(-50%, -50%) rotate(${ripple.rotation + 90}deg)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              borderRadius: "55% 45% 45% 55% / 50% 50% 50% 50%",
              background: "radial-gradient(ellipse at 70% 70%, rgba(34, 211, 238, 0.4) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 75%)",
              pointerEvents: "none",
              animation: `waterInkExpand3 1.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              willChange: "transform, opacity, filter",
              transform: `translate(-50%, -50%) rotate(${ripple.rotation + 180}deg)`,
            }}
          />
        </div>
      ))}
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          style={{
            position: "absolute",
            left: symbol.x,
            top: symbol.y,
            color: symbol.color,
            fontSize: `${symbol.size}px`,
            fontFamily: symbol.content.includes("%") || /[0-9]/.test(symbol.content)
              ? "'Plus Jakarta Sans', sans-serif"
              : "inherit",
            fontWeight: symbol.content.includes("%") ? 700 : 400,
            transform: `translate(-50%, -50%) rotate(${symbol.rotation}deg)`,
            pointerEvents: "none",
            userSelect: "none",
            animation: "cursorTrailFade 1.5s ease-out forwards",
            willChange: "transform, opacity",
          }}
        >
          {symbol.content}
        </div>
      ))}

      <style>{`
        @keyframes cursorTrailFade {
          0% {
            opacity: 0.9;
            transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-30px) scale(0.8);
          }
        }

        @keyframes waterInkExpand1 {
          0% {
            width: 40px;
            height: 40px;
            opacity: 0.7;
            filter: blur(1px);
          }
          30% {
            width: 140px;
            height: 110px;
            opacity: 0.5;
            filter: blur(5px);
          }
          60% {
            width: 200px;
            height: 160px;
            opacity: 0.25;
            filter: blur(10px);
          }
          100% {
            width: 240px;
            height: 190px;
            opacity: 0;
            filter: blur(15px);
          }
        }

        @keyframes waterInkExpand2 {
          0% {
            width: 35px;
            height: 35px;
            opacity: 0.6;
            filter: blur(1px);
          }
          25% {
            width: 100px;
            height: 130px;
            opacity: 0.5;
            filter: blur(4px);
          }
          55% {
            width: 170px;
            height: 210px;
            opacity: 0.3;
            filter: blur(9px);
          }
          100% {
            width: 210px;
            height: 250px;
            opacity: 0;
            filter: blur(14px);
          }
        }

        @keyframes waterInkExpand3 {
          0% {
            width: 30px;
            height: 30px;
            opacity: 0.5;
            filter: blur(2px);
          }
          35% {
            width: 120px;
            height: 95px;
            opacity: 0.4;
            filter: blur(6px);
          }
          65% {
            width: 180px;
            height: 140px;
            opacity: 0.2;
            filter: blur(11px);
          }
          100% {
            width: 220px;
            height: 170px;
            opacity: 0;
            filter: blur(16px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes cursorTrailFade {
            0% { opacity: 0.9; }
            100% { opacity: 0; }
          }
          @keyframes waterInkExpand1,
          @keyframes waterInkExpand2,
          @keyframes waterInkExpand3 {
            0% { opacity: 0.5; }
            100% { opacity: 0; }
          }
        }
      `}</style>
    </div>
  );
}
