"use client";
import { motion } from "framer-motion";
import { Rocket, Target, Award, ArrowRight, Sparkles, Command, Plus } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Precision Builds", value: "150+", icon: <Rocket size={14} strokeWidth={1} /> },
    { label: "Global Partners", value: "80+", icon: <Command size={14} strokeWidth={1} /> },
    { label: "Tech Architects", value: "25+", icon: <Award size={14} strokeWidth={1} /> },
    { label: "Years of Logic", value: "06+", icon: <Target size={14} strokeWidth={1} /> },
  ];

  return (
    <section className="py-24 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      
      {/* Background Watermark - High End Studio Style */}
      <div className="absolute top-20 -right-20 text-[25vw] font-bold text-[var(--text-main)] opacity-[0.02] select-none pointer-events-none tracking-tighter leading-none">
        STUDIO
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= SECTION 01: THE MANIFESTO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-10"
          >
            <div className="flex items-center gap-4">
              <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.5em]">The Origin</span>
              <div className="h-[1px] w-20 bg-brand-accent/20" />
            </div>
            
            <h2 className="text-6xl md:text-9xl font-extralight tracking-tighter text-[var(--text-main)] leading-[0.8]">
              Engineering <br />
              <span className="opacity-15 italic">Digital Souls.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
              <p className="text-[14px] text-[var(--text-soft)] leading-relaxed font-normal opacity-50 border-l border-brand-accent/20 pl-6">
                ScholaVue is not a factory; it's a laboratory. We curate high-performance ecosystems where structural integrity meets aesthetic minimalism.
              </p>
              <p className="text-[14px] text-[var(--text-soft)] leading-relaxed font-normal opacity-50">
                Every line of code is a brick in a legacy. We don't just build for 2026; we architect for the next decade of digital evolution.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 lg:pt-20"
          >
            <div className="relative p-10 rounded-[60px] border border-[var(--border-color)] bg-[var(--bg-card)]/10 backdrop-blur-3xl overflow-hidden group">
               <div className="absolute top-8 right-8 text-brand-accent opacity-20 group-hover:rotate-90 group-hover:opacity-100 transition-all duration-700">
                  <Plus size={20} strokeWidth={1} />
               </div>
               <div className="space-y-12">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-end justify-between border-b border-[var(--border-color)] pb-4 group/item">
                       <div className="space-y-1">
                          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--text-soft)] opacity-40">{stat.label}</p>
                          <h4 className="text-3xl font-light tracking-tighter text-[var(--text-main)] group-hover/item:text-brand-accent transition-colors">{stat.value}</h4>
                       </div>
                       <div className="text-brand-accent opacity-20 group-hover/item:opacity-100 transition-opacity">
                          {stat.icon}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>

        {/* ================= SECTION 02: CORE VALUES (ASIMMETRIC) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 md:p-16 rounded-[60px] border border-[var(--border-color)] bg-brand-accent/[0.01] hover:bg-brand-accent/[0.03] transition-all duration-700 group relative overflow-hidden"
          >
            <span className="text-[9px] font-bold text-brand-accent uppercase tracking-[0.5em] block mb-12 italic">Precision Mission</span>
            <h3 className="text-3xl md:text-5xl font-light text-[var(--text-main)] mb-8 tracking-tighter leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
              To architect software <br /> that <span className="italic opacity-40">breathes</span>.
            </h3>
            <p className="text-[13px] text-[var(--text-soft)] leading-relaxed opacity-40 group-hover:opacity-60 transition-opacity max-w-sm">
              We focus on zero-latency architectures and human-centric logic. Integrity over speed, always.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-12 md:p-16 rounded-[60px] border border-[var(--border-color)] bg-[var(--bg-card)]/20 hover:border-brand-accent/20 transition-all duration-700 group relative overflow-hidden"
          >
             <span className="text-[9px] font-bold text-brand-accent uppercase tracking-[0.5em] block mb-12 italic">The Vision</span>
            <h3 className="text-3xl md:text-5xl font-light text-[var(--text-main)] mb-8 tracking-tighter leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
              Redefining the <br /> <span className="italic opacity-40">Digital Craft</span>.
            </h3>
            <p className="text-[13px] text-[var(--text-soft)] leading-relaxed opacity-40 group-hover:opacity-60 transition-opacity max-w-sm">
              A future where high-ticket engineering meets effortless simplicity. One pixel, one function at a time.
            </p>
          </motion.div>
        </div>

        {/* ================= SECTION 03: THE CALL ================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-20 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
        >
          <div className="space-y-6">
            <h3 className="text-4xl md:text-7xl font-extralight tracking-tighter text-[var(--text-main)] leading-none">
              Initiate <br />
              <span className="opacity-10 italic">Conversation.</span>
            </h3>
            <p className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.4em] italic">Open for collaborations — Q2 2026</p>
          </div>
          
          <button className="group flex items-center gap-6 p-2 pr-10 rounded-full border border-[var(--border-color)] hover:border-brand-accent transition-all duration-500 overflow-hidden relative">
            <div className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <ArrowRight size={20} strokeWidth={1} />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-main)]">Establish Connection</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}