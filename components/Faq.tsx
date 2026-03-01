"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Command, ArrowUpRight } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const faqs = [
    {
      q: "Architectural Methodology?",
      a: "We utilize 'Edge-First' systems with Next.js 15, ensuring sub-second LCP and global scalability through distributed serverless logic."
    },
    {
      q: "Data Integrity & Security?",
      a: "Our ERP stacks implement Row-Level Security (RLS) with AES-256 encryption, maintaining strict proprietary confidentiality at every layer."
    },
    {
      q: "Post-Deployment Scaling?",
      a: "Built on Docker/Kubernetes, our infrastructures auto-scale from thousands to millions of users without manual intervention or downtime."
    },
    {
      q: "Development Lifecycle?",
      a: "A high-fidelity MVP typically spans 6-10 weeks, covering everything from Figma prototyping to full-stack deployment and QA."
    },
    {
      q: "Intelligence Integration?",
      a: "We deploy bespoke AI models specifically tuned to your business data for automated decision-making and predictive analytics."
    },
    {
      q: "Modular Customization?",
      a: "Our core engines (like ScholaDiv) are modular, allowing rapid adaptation to regional compliance, language, and specific business rules."
    }
  ];

  return (
    <section className="py-20 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Creative Studio Header - No Boldness */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3">
              <Command size={10} className="text-brand-accent opacity-60" />
              <span className="text-brand-accent text-[9px] font-semibold uppercase tracking-[0.5em]">Intellectual Core</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-normal tracking-tighter text-[var(--text-main)] leading-[0.8]">
              General <br />
              <span className="opacity-10 font-light italic text-brand-accent">Inquiries.</span>
            </h2>
          </div>
          <p className="max-w-[240px] text-[12px] leading-relaxed text-[var(--text-soft)] opacity-40 font-normal border-l border-brand-accent/20 pl-6">
            Technical clarifications regarding our architectural process and engineering protocols.
          </p>
        </div>

        {/* 2-Column Grid for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 border-t border-[var(--border-color)]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[var(--border-color)]">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full py-10 flex items-center justify-between text-left group transition-all"
              >
                <div className="flex items-start gap-6">
                   <span className="text-[9px] font-bold text-brand-accent opacity-20 mt-1.5 group-hover:opacity-100 transition-opacity tracking-widest">
                     Q — 0{i + 1}
                   </span>
                   <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[var(--text-main)] opacity-50 group-hover:opacity-100 transition-all">
                     {faq.q}
                   </h3>
                </div>
                
                <div className={`w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] transition-all duration-500 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent ${active === i ? 'rotate-180 bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20' : ''}`}>
                  {active === i ? <Minus size={14} strokeWidth={1} /> : <ArrowUpRight size={14} strokeWidth={1} />}
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-12 md:pl-16">
                      <p className="text-[13px] md:text-[14px] text-[var(--text-soft)] leading-relaxed font-normal opacity-50 max-w-lg border-l border-brand-accent/10 pl-6">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Abstract Aesthetic Watermark */}
      <div className="absolute -bottom-10 right-10 text-[18vw] font-black text-[var(--text-main)] opacity-[0.01] pointer-events-none select-none tracking-tighter uppercase">
        Knowledge
      </div>
    </section>
  );
}