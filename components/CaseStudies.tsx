"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

export default function CaseStudies() {
  const projects = [
    {
      title: "Unified Health Stack",
      category: "Healthcare Architecture",
      desc: "Architecting secure video-consultation systems with encrypted EMR logic.",
      metric: "99.9% Uptime",
      size: "lg:col-span-2",
    },
    {
      title: "Scholadiv Master",
      category: "EdTech ERP",
      desc: "Premium 360° ecosystem for modern institutional management.",
      metric: "12k+ Users",
      size: "lg:col-span-1",
    },
    {
      title: "Recycle ERP v3.0",
      category: "Logistics",
      desc: "Optimizing supply chain transparency with real-time fleet tracking.",
      metric: "45% Fast",
      size: "lg:col-span-1",
    },
    {
      title: "Apex Smart Control",
      category: "IoT Automation",
      desc: "Full-stack IoT solution for emerging smart home markets.",
      metric: "50ms Latency",
      size: "lg:col-span-2",
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Header - Ultra Modern Typography */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-4"
            >
              <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.5em]">Engineering Matrix</span>
              <div className="h-[1px] w-16 bg-brand-accent/30" />
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-normal tracking-tighter text-[var(--text-main)] leading-[0.8]">
              Selected <br />
              <span className="opacity-10 font-light italic">Releases.</span>
            </h2>
          </div>
          <p className="text-[13px] text-[var(--text-soft)] max-w-[260px] leading-relaxed opacity-40 font-normal border-l border-brand-accent/20 pl-6">
            Curating high-performance digital products with architectural precision.
          </p>
        </div>

        {/* Bento Grid with Classy Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative p-10 md:p-14 rounded-[48px] border border-[var(--border-color)] bg-[var(--bg-card)]/30 backdrop-blur-md ${project.size} overflow-hidden flex flex-col justify-between min-h-[400px] transition-all duration-700 hover:border-brand-accent/40 hover:shadow-2xl hover:shadow-brand-accent/5`}
            >
              {/* Abstract Corner Identifier */}
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700">
                <Plus size={18} className="text-brand-accent" strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-[9px] font-bold text-brand-accent uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-normal text-[var(--text-main)] tracking-tighter mb-6 leading-tight group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] text-[var(--text-soft)] leading-relaxed font-normal opacity-50 max-w-sm group-hover:opacity-100 transition-opacity">
                  {project.desc}
                </p>
              </div>

              <div className="mt-12 flex items-end justify-between relative z-10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--text-soft)] opacity-30 mb-2 font-bold">Metrics</p>
                  <p className="text-2xl font-normal tracking-tight text-brand-accent">{project.metric}</p>
                </div>
                
                <div className="w-14 h-14 rounded-full border border-[var(--border-color)] bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-main)] group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-500">
                  <ArrowUpRight size={20} strokeWidth={1} />
                </div>
              </div>

              {/* Dynamic Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Watermark - Minimalist Style */}
      <div className="absolute -bottom-20 -left-20 text-[20vw] font-bold text-[var(--text-main)] opacity-[0.02] select-none pointer-events-none tracking-tighter uppercase">
        Projects
      </div>
    </section>
  );
}