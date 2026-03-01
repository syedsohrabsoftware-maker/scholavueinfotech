"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[var(--bg-main)] relative overflow-hidden font-sans">
      {/* Subtle Background Glows - Theme Consistent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-20 rounded-[48px] border border-[var(--border-color)] bg-[var(--bg-card)]/30 backdrop-blur-xl overflow-hidden text-center"
        >
          {/* Animated Decorative Element */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10 mb-8">
            <Sparkles size={12} className="text-brand-accent opacity-80" />
            <span className="text-brand-accent text-[10px] font-medium uppercase tracking-[0.3em]">Next Step</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-[var(--text-main)] leading-tight mb-6">
            Ready to architect <br />
            <span className="opacity-30 font-normal">your digital legacy?</span>
          </h2>

          <p className="text-[14px] md:text-[16px] text-[var(--text-soft)] max-w-lg mx-auto leading-relaxed font-normal opacity-60 mb-12">
            Let's transform your vision into a high-performance reality with our modern engineering approach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group w-full sm:w-auto px-10 py-4 bg-brand-accent text-white rounded-2xl font-medium text-[12px] uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-3">
              Start Conversation 
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 text-[var(--text-main)] border border-white/10 rounded-2xl font-medium text-[12px] uppercase tracking-widest transition-all hover:bg-white/10 flex items-center justify-center gap-2">
              Book a Demo
            </button>
          </div>

          {/* Clean Floating Shapes */}
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-brand-accent/5 blur-[60px] rounded-full" />
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-accent/5 blur-[60px] rounded-full" />
        </motion.div>

        {/* Bottom Social Proof - Very Subtle */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-medium text-[var(--text-soft)] uppercase tracking-[0.4em] opacity-30">
            Trusted by innovators worldwide
          </p>
        </div>
      </div>
    </section>
  );
}