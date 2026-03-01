"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe2, Sparkles, Terminal, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const [particles, setParticles] = useState<
  { top: string; left: string }[]
>([]);
  const [techIndex, setTechIndex] = useState(0);

  const techs = [
    "TypeScript",
    "Next.js 15",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techs.length);
    }, 2000);
    return () => clearInterval(timer);
 }, [techs.length]);
useEffect(() => {
  const generated = Array.from({ length: 8 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));
  setParticles(generated);
}, []);
  const rotateY = useTransform(scrollY, [0, 1000], [0, 360]);
  const svOpacity = useTransform(scrollY, [0, 300], [0.05, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 50]);

  const orbitItems = [
    "AI",
    "Cloud",
    "API",
    "SSR",
    "DevOps",
    "Security",
    "UI/UX",
    "Analytics",
  ];

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-10 py-20 lg:py-0 overflow-hidden bg-[var(--bg-main)]">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-cubic-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />
      </div>

      {/* ================= CUBE SECTION ================= */}
      <div className="order-1 lg:order-2 flex flex-col items-center justify-center perspective-[1200px] mb-16 lg:mb-0 lg:mr-10 relative">

        {/* Premium Glow */}
        <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-brand-accent/20 blur-[120px] animate-pulse" />

        {/* Orbiting Tech Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[420px] h-[420px] hidden md:block">
            {orbitItems.map((item, i) => {
              const angle = (i / orbitItems.length) * 360;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 text-xs font-mono font-bold text-brand-accent tracking-widest"
                  style={{
                    transform: `
                      rotate(${angle}deg)
                      translate(200px)
                      rotate(-${angle}deg)
                    `,
                    transformOrigin: "0 0",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-12 lg:-top-20 z-20 px-4 lg:px-6 py-2 lg:py-3 bg-[var(--bg-card)]/80 backdrop-blur-xl border border-brand-accent/30 rounded-2xl shadow-2xl flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[10px] lg:text-[12px] font-mono font-bold text-[var(--text-main)]">
            stack : <span className="text-brand-accent">{techs[techIndex]}</span>
          </span>
        </motion.div>

        {/* Floating Particles */}
       {particles.map((pos, i) => (
  <motion.div
    key={i}
    animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
    transition={{ duration: 4 + i, repeat: Infinity }}
    className="absolute w-2 h-2 bg-brand-accent rounded-full opacity-40"
    style={pos}
  />
))}

        {/* 3D Cube */}
        <motion.div
          style={{ rotateY }}
          animate={{ rotateX: [0, 360], rotateZ: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] preserve-3d"
        >
          {[
            { pos: "rotateY(0deg) translateZ(190px)", content: "ScholaVue" },
            { pos: "rotateY(90deg) translateZ(190px)", content: "NEXT.JS" },
            { pos: "rotateY(180deg) translateZ(190px)", content: "ERP v3.0" },
            { pos: "rotateY(-90deg) translateZ(190px)", content: "TYPESCRIPT" },
            { pos: "rotateX(90deg) translateZ(190px)", content: "SEO" },
            { pos: "rotateX(-90deg) translateZ(190px)", content: "</CODE>" },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-brand-accent/20 bg-[var(--bg-card)]/40 backdrop-blur-md flex items-center justify-center text-[var(--text-main)] font-mono text-lg lg:text-2xl font-black shadow-[0_0_50px_rgba(139,92,246,0.15)]"
              style={{ transform: face.pos, backfaceVisibility: "hidden" }}
            >
              <span className="tracking-[0.1em]">{face.content}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= TEXT SECTION ================= */}
      <motion.div
        style={{ y: textY }}
        className="order-2 lg:order-1 z-10 max-w-2xl relative text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--text-main)]/5 border border-[var(--text-main)]/10 backdrop-blur-md rounded-full mb-6"
        >
          <Terminal size={12} className="text-brand-accent" />
          <span className="text-[var(--text-main)] text-[10px] font-bold uppercase tracking-[0.2em]">
            Digital Architecture House
          </span>
          <Sparkles size={12} className="text-brand-accent animate-pulse" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-[var(--text-main)] leading-[1.1] tracking-[-0.04em] uppercase">
          Engineering <br />
          <span className="text-brand-accent italic opacity-90">
            The Future.
          </span>
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group relative bg-[var(--text-main)] text-[var(--bg-main)] px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest overflow-hidden shadow-2xl"
          >
            <span className="flex items-center gap-3">
              Deploy Solution <ArrowRight size={16} />
            </span>
          </motion.button>

          <button className="flex items-center gap-3 text-[var(--text-main)] text-[11px] font-black uppercase tracking-widest border-b border-transparent hover:border-brand-accent transition-all pb-1">
            <Globe2 size={16} />
            View Portfolio
          </button>
        </div>
      </motion.div>

      {/* Background SV */}
      <motion.div
        style={{ opacity: svOpacity }}
        className="absolute -bottom-32 -right-16 text-[450px] font-black text-[var(--text-main)] -z-10 select-none hidden lg:block"
      >
        SV
      </motion.div>
    </section>
  );
}