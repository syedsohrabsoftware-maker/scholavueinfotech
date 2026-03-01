"use client";
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Mail, MapPin, 
  Linkedin, Twitter, Github 
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Scholadiv Master', href: '#' },
      { name: 'Hajiri Center', href: '#' },
      { name: 'Recycle ERP', href: '#' },
    ],
    services: [
      { name: 'App Development', href: '#' },
      { name: 'SEO & Marketing', href: '#' },
      { name: 'UI/UX Design', href: '#' },
    ],
    company: [
      { name: 'Our Story', href: '#' },
      { name: 'Architecture', href: '#' },
      { name: 'Contact', href: '#' },
    ]
  };

  return (
    <footer className="relative bg-[var(--bg-main)] border-t border-[var(--border-color)] pt-32 pb-12 overflow-hidden transition-colors duration-500">
      
      {/* --- Advanced Graph & Vertical Grid Background --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.07]">
        {/* Vertical Grid Lines (Architectural Grid) */}
        <div className="absolute inset-0 flex justify-between px-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-[var(--text-main)]" />
          ))}
        </div>
        
        {/* Animated Graph Line SVG (SaaS Growth Vibe) */}
        <svg className="absolute bottom-0 left-0 w-full h-80 overflow-visible opacity-50">
          <motion.path
            d="M0,150 Q200,80 400,180 T800,100 T1200,220 T1600,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          
          {/* Brand Identity - Slim but Sharp Weight */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-8 text-[14px] text-[var(--text-soft)] font-light tracking-wide leading-relaxed max-w-sm">
              Engineering next-generation digital ecosystems through precision architecture and clean aesthetics.
            </p>
            
            <div className="mt-12 flex gap-8">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, opacity: 1, color: "var(--brand-accent)" }}
                  className="text-[var(--text-main)] opacity-30 transition-all"
                >
                  <Icon size={18} strokeWidth={1.2} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Light Weight */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.5em] mb-10">
                  {title}
                </h4>
                <ul className="space-y-5">
                  {links.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[13px] font-light tracking-wide text-[var(--text-soft)] hover:text-brand-accent transition-all flex items-center gap-1 group">
                        {link.name}
                        <ArrowUpRight size={11} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact - Minimalist Layout */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.5em] mb-10">Location</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={15} strokeWidth={1.2} className="text-brand-accent mt-1" />
                <p className="text-[12px] font-light text-[var(--text-soft)] tracking-wider leading-relaxed">
                  GURUGRAM<br />HARYANA, INDIA.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={15} strokeWidth={1.2} className="text-brand-accent" />
                <p className="text-[12px] font-light text-[var(--text-soft)] tracking-wider lowercase hover:text-brand-accent transition-colors">
                  hello@scholavue.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-light uppercase tracking-[0.4em] text-[var(--text-soft)] opacity-40">
            © {currentYear} ScholaVue Infotech. All Rights Reserved.
          </p>
          
          <div className="flex gap-10">
            {['Privacy', 'Terms', 'Security'].map(item => (
              <a key={item} href="#" className="text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--text-soft)] opacity-40 hover:opacity-100 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large Background Decorative Text */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <h2 className="text-[22vw] font-black uppercase tracking-tighter leading-none translate-y-20">
          SCHOLAVUE
        </h2>
      </div>
    </footer>
  );
}