"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Features() {
  const features = [
    { 
      title: "Smart Attendance", 
      desc: "Real-time automated tracking system for modern institutions.",
      icon: <CheckCircle2 size={20} />,
      tag: "Automated"
    },
    { 
      title: "Fee Management", 
      desc: "Architecting secure digital payment gateways and invoicing.",
      icon: <ShieldCheck size={20} />,
      tag: "Secure"
    },
    { 
      title: "SEO Optimized", 
      desc: "Advanced search algorithms to dominate digital rankings.",
      icon: <Zap size={20} />,
      tag: "High-Rank"
    },
  ];

  return (
    <section className="py-32 bg-[var(--bg-main)] transition-colors duration-500 relative">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Modern SaaS Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block"
            >
              System Capabilities
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-[1000] uppercase tracking-tighter text-[var(--text-main)] leading-[0.9]">
              Core <span className="opacity-20 italic">Features.</span>
            </h2>
          </div>
          <p className="text-[13px] text-[var(--text-soft)] max-w-[300px] leading-relaxed font-medium border-l border-[var(--border-color)] pl-6">
            Engineering excellence through next-gen software architecture and clean UX.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[32px] border border-[var(--border-color)] bg-[var(--bg-card)]/50 backdrop-blur-sm hover:border-brand-accent/50 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-brand-accent/5 hover:-translate-y-2"
            >
              {/* Floating Tag */}
              <div className="absolute top-8 right-8 text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md border border-[var(--border-color)] group-hover:border-brand-accent/30 group-hover:text-brand-accent transition-colors">
                {f.tag}
              </div>

              {/* Icon Glass Container */}
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/5 flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-inner">
                {f.icon}
              </div>

              <h3 className="text-[18px] font-black uppercase tracking-tight text-[var(--text-main)] flex items-center gap-2">
                {f.title}
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-40 group-hover:translate-y-0 transition-all" />
              </h3>
              
              <p className="text-[13px] text-[var(--text-soft)] mt-4 leading-relaxed font-medium group-hover:text-[var(--text-main)] transition-colors">
                {f.desc}
              </p>

              {/* Advanced Decorative Grid Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none bg-cubic-grid transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}