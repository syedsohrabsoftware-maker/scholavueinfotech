"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Users, Rocket, Trophy, Star, BadgeCheck, Plus } from "lucide-react";
import { MouseEvent, useEffect, useRef } from "react";

export default function TrustStats() {
  const stats = [
    { label: "Success Rate", value: 99, suffix: "%", icon: <Star size={16} strokeWidth={1.5} /> },
    { label: "Delivered", value: 120, suffix: "+", icon: <Rocket size={16} strokeWidth={1.5} /> },
    { label: "Active Clients", value: 45, suffix: "+", icon: <Users size={16} strokeWidth={1.5} /> },
    { label: "Expertise", value: 6, suffix: "+ Yrs", icon: <Trophy size={16} strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-3 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Abstract Architectural Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Plus size={12} className="text-brand-accent opacity-40" />
              <span className="text-brand-accent text-[9px] font-semibold uppercase tracking-[0.4em]">Validation</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-normal tracking-tighter text-[var(--text-main)] leading-[0.8]">
              Proven <br />
              <span className="opacity-15 italic font-light">Authority.</span>
            </h2>
          </div>
          <p className="max-w-[240px] text-[12px] leading-relaxed text-[var(--text-soft)] opacity-40 font-normal border-l border-brand-accent/20 pl-6">
            Measured engineering excellence backed by consistent delivery and client trust.
          </p>
        </div>

        {/* Stats Grid - Ultra Clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>

      {/* Background Subtle Watermark */}
      <div className="absolute -bottom-20 right-10 text-[20vw] font-black text-[var(--text-main)] opacity-[0.01] pointer-events-none select-none tracking-tighter">
        TRUST
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const countRef = useRef<HTMLSpanElement>(null);

  // Counter Animation Logic
  useEffect(() => {
    const node = countRef.current;
    if (node) {
      const controls = animate(0, stat.value, {
        duration: 2,
        delay: index * 0.1,
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [stat.value, index]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative p-10 rounded-[40px] border border-[var(--border-color)] bg-[var(--bg-card)]/20 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-brand-accent/40"
    >
      {/* Light Mode Spotlight (Fantasy Feel) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: useMotionTemplate`
            radial-gradient(150px circle at ${mouseX}px ${mouseY}px, var(--brand-accent-alpha), transparent 80%)
          `,
        }}
      />

      {/* Minimal Badge */}
      <div className="absolute top-8 right-8 text-brand-accent/20 group-hover:text-brand-accent group-hover:rotate-12 transition-all duration-700">
        <BadgeCheck size={14} strokeWidth={1.5} />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Icon - Clean Studio Style */}
        <div className="w-10 h-10 rounded-2xl bg-brand-accent/5 flex items-center justify-center text-brand-accent border border-brand-accent/10 mb-12 transition-transform duration-500 group-hover:scale-110">
          {stat.icon}
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-1">
            <span 
              ref={countRef}
              className="text-4xl md:text-5xl font-normal text-[var(--text-main)] tracking-tighter"
            >
              0
            </span>
            <span className="text-xl font-light text-brand-accent opacity-80">{stat.suffix}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-3 bg-brand-accent opacity-40 group-hover:w-6 transition-all duration-500" />
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-soft)] opacity-40 group-hover:opacity-100 transition-opacity">
              {stat.label}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}