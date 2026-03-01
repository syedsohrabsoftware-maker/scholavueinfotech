"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe2, Sparkles, Terminal, Command } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const [particles, setParticles] = useState<{ top: string; left: string }[]>([]);
  const [techIndex, setTechIndex] = useState(0);

  const techs = ["Next.js 15", "TypeScript", "PostgreSQL", "Cloud Architecture", "AI Integration"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techs.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [techs.length]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(generated);
  }, []);

  const rotateY = useTransform(scrollY, [0, 1000], [0, 360]);
  const textY = useTransform(scrollY, [0, 500], [0, 80]);
  const cubeScale = useTransform(scrollY, [0, 500], [1, 0.85]);

  const orbitItems = ["SCALABLE", "SECURE", "ELITE", "ROBUST"];

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 py-20 lg:py-0 overflow-hidden bg-[var(--bg-main)] font-sans">
      
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-accent/[0.03] blur-[120px] rounded-full" />
      </div>

      {/* ================= CONTENT SECTION (LEFT) ================= */}
      <motion.div
        style={{ y: textY }}
        className="order-2 lg:order-1 z-10 max-w-4xl lg:pr-10 text-center lg:text-left pt-12 lg:pt-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/20 mb-10"
        >
          <Sparkles size={12} className="text-brand-accent" />
          <span className="text-brand-accent text-[9px] font-bold uppercase tracking-[0.4em]">
            Next-Gen Digital Studio
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-normal tracking-tighter text-[var(--text-main)] leading-[0.8] mb-10">
          Precision <br />
          <span className="opacity-20 font-light italic">Engineering.</span>
        </h1>

        <p className="text-[13px] md:text-[15px] text-[var(--text-soft)] max-w-[460px] leading-relaxed font-normal opacity-50 mb-12 mx-auto lg:mx-0">
          We curate high-performance ecosystems through sophisticated software architecture and modern technical protocols.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="group px-12 py-4.5 bg-brand-accent text-white rounded-2xl font-medium text-[11px] uppercase tracking-[0.25em] shadow-2xl shadow-brand-accent/30 flex items-center gap-4 transition-all"
          >
            Start Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <button className="flex items-center gap-3 text-[var(--text-main)] text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all">
            <Globe2 size={16} strokeWidth={1.5} />
            The Matrix
          </button>
        </div>
      </motion.div>

      {/* ================= 3D GLASS CORE (RIGHT) ================= */}
      <motion.div 
        style={{ scale: cubeScale }}
        className="order-1 lg:order-2 relative flex items-center justify-center perspective-[2000px] w-full lg:w-1/2 h-[450px] lg:h-screen"
      >
        {/* Abstract Orbiting Path */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute w-[400px] h-[400px] border border-brand-accent/10 rounded-full hidden lg:flex items-center justify-center"
        >
          {orbitItems.map((item, i) => (
            <div
              key={i}
              className="absolute text-[8px] font-bold text-brand-accent tracking-[0.4em] opacity-20"
              style={{
                transform: `rotate(${(i * 360) / orbitItems.length}deg) translate(200px) rotate(-${(i * 360) / orbitItems.length}deg)`,
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* Floating Intelligence Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 lg:top-24 z-30 px-6 py-2.5 bg-[var(--bg-card)]/30 backdrop-blur-2xl border border-[var(--border-color)] rounded-full flex items-center gap-3 shadow-xl"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[9px] font-bold tracking-[0.2em] text-[var(--text-main)] uppercase opacity-60">
            Stack: <span className="text-brand-accent opacity-100">{techs[techIndex]}</span>
          </span>
        </motion.div>

        {/* 3D Glass Matrix Cube - Lines Fixed for Light Mode */}
        <motion.div
          style={{ rotateY }}
          animate={{ rotateX: [0, 360], rotateZ: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] preserve-3d"
        >
          {[
            { pos: "rotateY(0deg) translateZ(130px)", icon: <Command size={32} strokeWidth={1} /> },
            { pos: "rotateY(90deg) translateZ(130px)", icon: <Globe2 size={32} strokeWidth={1} /> },
            { pos: "rotateY(180deg) translateZ(130px)", icon: <Terminal size={32} strokeWidth={1} /> },
            { pos: "rotateY(-90deg) translateZ(130px)", icon: <Sparkles size={32} strokeWidth={1} /> },
            { pos: "rotateX(90deg) translateZ(130px)", icon: <span className="text-lg font-light">V15</span> },
            { pos: "rotateX(-90deg) translateZ(130px)", icon: <span className="text-lg font-light">TS</span> },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-brand-accent/20 bg-brand-accent/[0.02] backdrop-blur-md flex items-center justify-center text-brand-accent/40 shadow-[inset_0_0_30px_rgba(var(--brand-accent-rgb),0.05)] transition-all group hover:text-brand-accent hover:bg-brand-accent/5 hover:border-brand-accent/40"
              style={{ transform: face.pos, backfaceVisibility: "hidden" }}
            >
              <div className="group-hover:scale-110 transition-transform duration-700">
                {face.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Aesthetic Background Typography */}
      <div className="absolute bottom-0 left-0 text-[20vw] font-bold text-[var(--text-main)] opacity-[0.02] select-none pointer-events-none tracking-tighter leading-none">
        STUDIO
      </div>
    </section>
  );
}