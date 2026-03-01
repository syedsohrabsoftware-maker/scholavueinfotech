"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, CheckCircle2 } from "lucide-react";

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      title: "Discovery & Analysis",
      desc: "Deep diving into your business logic and user requirements to map out the perfect architecture.",
      icon: <Search size={18} />,
    },
    {
      title: "Strategy & UX Design",
      desc: "Crafting clean, premium interfaces with a focus on intuitive user journeys and modern aesthetics.",
      icon: <PenTool size={18} />,
    },
    {
      title: "Clean Engineering",
      desc: "Developing scalable full-stack solutions using Next.js 15, TypeScript, and robust database models.",
      icon: <Code2 size={18} />,
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing protocols to ensure zero-downtime and high-performance security standards.",
      icon: <CheckCircle2 size={18} />,
    },
    {
      title: "Deployment & Scale",
      desc: "Launching your digital product to the global market with automated CI/CD and cloud scaling.",
      icon: <Rocket size={18} />,
    },
  ];

  return (
    <section className="py-4 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative">
        
        {/* Header - Small & Normal Font */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-brand-accent text-[10px] font-semibold uppercase tracking-[0.3em] block mb-2">Workflow</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)]">
            How we build <span className="opacity-30">the future.</span>
          </h2>
        </div>

        {/* Process Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Vertical Progress Line (Static Background) */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-white/5" />
          
          {/* Animated Scrolling Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-brand-accent origin-top shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10"
          />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Connector Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--bg-main)] border border-brand-accent z-20 shadow-[0_0_10px_rgba(139,92,246,0.3)]" />

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                >
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end md:flex-row-reverse"}`}>
                    <div className="p-2 rounded-lg bg-brand-accent/5 text-brand-accent border border-brand-accent/10">
                      {step.icon}
                    </div>
                    <span className="text-brand-accent text-[9px] font-bold uppercase tracking-widest">Step 0{i + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-soft)] leading-relaxed opacity-70 font-normal">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}