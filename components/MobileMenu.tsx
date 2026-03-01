"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Terminal, Globe2, Code2, LayoutGrid, Zap } from "lucide-react";

const navLinks = [
  { name: 'School ERP', slug: 'erp', icon: <Terminal size={18} /> },
  { name: 'App Development', slug: 'app', icon: <Code2 size={18} /> },
  { name: 'SEO & Marketing', slug: 'seo', icon: <Zap size={18} /> },
  { name: 'Graphic Designing', slug: 'graphics', icon: <LayoutGrid size={18} /> },
  { name: 'Company Portfolio', slug: 'portfolio', icon: <Globe2 size={18} /> },
];

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-[var(--bg-main)] flex flex-col p-8 overflow-hidden"
        >
          {/* 1. Background Architecture Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-cubic-grid" />
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-brand-accent/20 blur-[100px] rounded-full" />
          </div>

          {/* 2. Top Header inside Menu */}
          <div className="flex justify-between items-center relative z-10 mb-16">
            <span className="text-xl font-[1000] tracking-tighter uppercase text-[var(--text-main)]">
              ScholaVue<span className="text-brand-accent italic">.</span>
            </span>
            <button 
              onClick={onClose} 
              className="p-3 bg-[var(--text-main)]/5 rounded-full border border-[var(--text-main)]/10 text-[var(--text-main)] hover:rotate-90 transition-transform duration-300"
            >
              <X size={20} />
            </button>
          </div>

          {/* 3. Staggered Menu Links */}
          <nav className="relative z-10 flex-1">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.slug}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="group relative"
                  onClick={onClose}
                >
                  <a href={`#${link.slug}`} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-5">
                      {/* Architectural Icon Container */}
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--text-main)]/5 border border-[var(--text-main)]/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                        {link.icon}
                      </div>
                      <span className="text-2xl font-black uppercase tracking-tighter text-[var(--text-main)] group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-40 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[var(--text-main)]" />
                  </a>
                  {/* Subtle Divider */}
                  <div className="h-[1px] w-full bg-[var(--text-main)]/5 mt-2" />
                </motion.div>
              ))}
            </div>
          </nav>

          {/* 4. Bottom Action Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-auto relative z-10 space-y-4"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-soft)] text-center mb-6">
              Engineering the Future
            </p>
            <button className="w-full bg-[var(--text-main)] text-[var(--bg-main)] py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
              Request a Demo <ArrowRight size={16} />
            </button>
            <div className="flex justify-center gap-8 pt-4">
               {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                 <span key={social} className="text-[10px] font-black uppercase tracking-widest text-[var(--text-soft)] hover:text-brand-accent cursor-pointer transition-colors">
                   {social}
                 </span>
               ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}