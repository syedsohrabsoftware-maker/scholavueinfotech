"use client";
import { motion } from "framer-motion";
import { 
  ArrowRight, Sparkles, Globe, Layers, Database, Cloud, Palette, TrendingUp 
} from "lucide-react";

export default function ServicesOverview() {
  const services = [
    { id: "01", title: "Web Architecture", desc: "Next-gen web ecosystems built for speed and SEO mastery.", icon: <Globe size={20} /> },
    { id: "02", title: "Mobile Engineering", desc: "Native-first iOS and Android apps with fluid user journeys.", icon: <Layers size={20} /> },
    { id: "03", title: "Enterprise ERP", desc: "Automating complex business logic with custom scalable systems.", icon: <Database size={20} /> },
    { id: "04", title: "Cloud & DevOps", desc: "Zero-downtime infrastructure and automated deployment pipelines.", icon: <Cloud size={20} /> },
    { id: "05", title: "UI/UX Design", desc: "Minimalist aesthetics combined with conversion-focused research.", icon: <Palette size={20} /> },
    { id: "06", title: "Organic Growth", desc: "Strategic SEO to dominate search rankings and brand visibility.", icon: <TrendingUp size={20} /> },
  ];

  return (
    <section className="py-4 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Classy Studio Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2">
              <Sparkles size={12} className="text-brand-accent opacity-60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-accent">Studio Services</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-normal tracking-tighter text-[var(--text-main)] leading-[0.8]">
              Crafting <br />
              <span className="opacity-20 italic font-light">Precision.</span>
            </h2>
          </div>
          <p className="max-w-[300px] text-[13px] leading-relaxed text-[var(--text-soft)] opacity-50 font-normal">
            A boutique approach to digital engineering. We build software that feels as good as it looks.
          </p>
        </div>

        {/* Studio Row Design */}
        <div className="border-t border-[var(--border-color)]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 border-b border-[var(--border-color)] hover:bg-white/[0.01] transition-all duration-500 cursor-pointer"
            >
              {/* Vertical ID */}
              <div className="hidden md:block mr-16">
                <span className="text-[10px] font-medium text-brand-accent tracking-widest rotate-180 [writing-mode:vertical-lr] opacity-40 group-hover:opacity-100 transition-opacity">
                  ID — {service.id}
                </span>
              </div>

              {/* Icon - Minimalist */}
              <div className="mb-6 md:mb-0 mr-0 md:mr-16 text-[var(--text-main)] opacity-30 group-hover:text-brand-accent group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              {/* Title & Description */}
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl md:text-4xl font-normal tracking-tight text-[var(--text-main)] group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-[14px] text-[var(--text-soft)] opacity-40 group-hover:opacity-80 transition-opacity max-w-xl font-normal">
                  {service.desc}
                </p>
              </div>

              {/* Action - Studio Style */}
              <div className="mt-8 md:mt-0 flex items-center gap-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-brand-accent">
                  Inquiry
                </span>
                <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-500">
                  <ArrowRight size={16} strokeWidth={1.5} />
                </div>
              </div>

              {/* Hover Background Splash */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}