"use client";
import { motion } from "framer-motion";
import { Plus, ArrowRight, Code2, Cpu, Globe, Layers, Sparkles } from "lucide-react";

export default function ExperienceMatrix() {
  const capabilities = [
    { title: "Bespoke Systems", id: "01", icon: <Code2 strokeWidth={1} />, desc: "Proprietary architectures for complex logic." },
    { title: "Cloud Scale", id: "02", icon: <Cpu strokeWidth={1} />, desc: "High-concurrency infrastructure engineering." },
    { title: "Next-Gen Web", id: "03", icon: <Globe strokeWidth={1} />, desc: "Sub-second LCP with Next.js 15." },
    { title: "Native Mobile", id: "04", icon: <Layers strokeWidth={1} />, desc: "Hardware-accelerated mobile journeys." },
  ];

  return (
    <section className="py-6 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Abstract Floating Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2">
              <Sparkles size={10} className="text-brand-accent opacity-50" />
              <span className="text-brand-accent text-[9px] font-semibold uppercase tracking-[0.5em]">Creative Engineering</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-normal tracking-tighter text-[var(--text-main)] leading-[0.8]">
              Elite <br />
              <span className="opacity-15 italic font-light">Solutions.</span>
            </h2>
          </div>
          <div className="lg:pt-24 space-y-6 border-l border-brand-accent/20 pl-10">
            <p className="text-[13px] leading-relaxed text-[var(--text-soft)] opacity-40 font-normal max-w-[280px]">
              We transcend standard development by engineering high-performance digital ecosystems.
            </p>
            <div className="flex gap-4">
               <div className="h-[1px] w-12 bg-brand-accent/40 mt-3" />
               <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold italic">Available 2026</span>
            </div>
          </div>
        </div>

        {/* The Matrix Cards - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-32">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className={`group relative ${i % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              {/* Floating ID Mark */}
              <div className="flex items-center gap-4 mb-6">
                 <span className="text-[10px] font-medium text-brand-accent/40 group-hover:text-brand-accent transition-colors">ID — {cap.id}</span>
                 <div className="h-[1px] w-0 group-hover:w-12 bg-brand-accent/40 transition-all duration-700" />
              </div>

              {/* Minimal Card Glass */}
              <div className="relative p-10 rounded-[48px] border border-[var(--border-color)] bg-[var(--bg-card)]/20 backdrop-blur-xl overflow-hidden hover:border-brand-accent/40 transition-all duration-700 group-hover:-translate-y-2">
                <div className="mb-12 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500">
                    {cap.icon}
                  </div>
                  <Plus size={14} strokeWidth={1} className="text-[var(--text-soft)] opacity-20 group-hover:rotate-90 group-hover:opacity-100 transition-all duration-500" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-normal tracking-tight text-[var(--text-main)] leading-none">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] text-[var(--text-soft)] leading-relaxed font-normal opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-3 text-brand-accent opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   <span className="text-[10px] font-bold uppercase tracking-widest">Inquire</span>
                   <ArrowRight size={14} strokeWidth={1.5} />
                </div>

                {/* Aesthetic Bottom Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Kinetic Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-[var(--text-main)] opacity-[0.01] pointer-events-none select-none tracking-tighter">
        MATRIX
      </div>
    </section>
  );
}