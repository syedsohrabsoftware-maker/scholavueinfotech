"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Command, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: "01",
      name: "Adrian Thorne",
      role: "CTO, HealthStack",
      quote: "The architecture delivered was beyond expectations. Precision in the Next.js 15 implementation ensured sub-second latency.",
      impact: "Core Web Vitals: 100/100",
      align: "start"
    },
    {
      id: "02",
      name: "Sarah Jenkins",
      role: "Founder, EduFlow",
      quote: "ScholaDiv Master is robust and aesthetically minimal. It’s rare to find an ERP that respects both logic and design.",
      impact: "12k+ Active Users",
      align: "end"
    },
    {
      id: "03",
      name: "Michael Chen",
      role: "Operations, Recycle ERP",
      quote: "Zero-downtime migration of legacy data. The engineering depth shown during the transition was remarkable.",
      impact: "45% Operational Speed",
      align: "center"
    }
  ];

  return (
    <section className="py-32 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Header - Extreme Contrast Typography */}
        <div className="mb-32 flex flex-col items-start border-l border-brand-accent/20 pl-8 space-y-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2">
            <Command size={10} className="text-brand-accent opacity-60" />
            <span className="text-brand-accent text-[9px] font-bold uppercase tracking-[0.6em]">Validation Archive</span>
          </motion.div>
          <h2 className="text-7xl md:text-9xl font-extralight tracking-tighter text-[var(--text-main)] leading-none">
            Voices <br />
            <span className="opacity-10 italic">of Authority.</span>
          </h2>
          <div className="pt-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-brand-accent/40" />
            <p className="text-[10px] uppercase tracking-widest text-[var(--text-soft)] opacity-40 font-bold">
              Engineering Trust since 2020
            </p>
          </div>
        </div>

        {/* Asymmetric Floating Testimonials */}
        <div className="space-y-40 relative">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`flex w-full ${
                item.align === "end" ? "justify-end" : 
                item.align === "center" ? "justify-center" : "justify-start"
              }`}
            >
              <div className="group relative max-w-2xl">
                {/* Floating Index Mark */}
                <div className="absolute -top-12 left-0 flex items-center gap-4">
                   <span className="text-[11px] font-mono text-brand-accent tracking-widest">{item.id}</span>
                   <div className="h-[1px] w-0 group-hover:w-16 bg-brand-accent/30 transition-all duration-700" />
                </div>

                {/* The "Paper-Thin" Editorial Card */}
                <div className="relative p-12 md:p-16 rounded-[60px] border border-[var(--border-color)] bg-[var(--bg-card)]/10 backdrop-blur-3xl transition-all duration-1000 group-hover:border-brand-accent/20">
                  <Quote size={32} strokeWidth={0.5} className="text-brand-accent opacity-10 mb-10 group-hover:opacity-40 transition-opacity" />
                  
                  <h3 className="text-2xl md:text-4xl font-light leading-tight tracking-tight text-[var(--text-main)] opacity-60 group-hover:opacity-100 transition-opacity duration-700 italic">
                    {item.quote}
                  </h3>

                  <div className="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-medium text-[var(--text-main)] uppercase tracking-tighter">{item.name}</h4>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-soft)] opacity-30">{item.role}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end border-l md:border-l-0 md:border-r border-brand-accent/20 pl-4 md:pl-0 md:pr-4">
                       <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-brand-accent opacity-40 mb-1 italic">Technical Impact</span>
                       <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-main)] opacity-60 group-hover:text-brand-accent transition-colors">
                         {item.impact}
                       </span>
                    </div>
                  </div>

                  {/* Corner Call to Action */}
                  <div className="absolute bottom-10 right-10 w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition-all duration-700">
                    <ArrowUpRight size={14} strokeWidth={1} className="text-brand-accent" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[60px] border border-brand-accent/[0.03] pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Kinetic Kinetic Background Markings */}
      <div className="absolute top-1/4 -right-20 text-[25vw] font-bold text-[var(--text-main)] opacity-[0.01] pointer-events-none select-none tracking-tighter leading-none -rotate-90">
        VALIDATION
      </div>
    </section>
  );
}