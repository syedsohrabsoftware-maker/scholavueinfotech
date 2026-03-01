"use client";
import { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Moon, ChevronDown, 
  LayoutDashboard, Code2, Smartphone, Search, Globe, ArrowRight,
  Sparkles, Mail, Phone, Briefcase, Command, Zap
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// --- LOGO COMPONENT ---
const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="w-8 h-8 rounded-xl bg-brand-accent flex items-center justify-center text-white shadow-lg shadow-brand-accent/20 group-hover:rotate-[15deg] transition-transform duration-500">
      <Command size={18} strokeWidth={2.5} />
    </div>
    <span className="text-[15px] font-medium tracking-tighter text-[var(--text-main)] uppercase">
      Schola<span className="opacity-40 italic font-light lowercase">vue</span>
    </span>
  </div>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { scrollY } = useScroll();

  const headerBg = useTransform(scrollY, [0, 50], ["rgba(var(--bg-rgb), 0)", "rgba(var(--bg-rgb), 0.8)"]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const navLinks = [
    { 
      name: 'Products', 
      icon: <LayoutDashboard size={12} />,
      submenu: [
        { name: 'ScholaDiv Master', desc: 'Enterprise School ERP', icon: <Globe size={13} /> },
        { name: 'Hajiri Center', desc: 'AI Attendance Stack', icon: <Zap size={13} /> },
        { name: 'Recycle ERP', desc: 'Waste Logistics System', icon: <Briefcase size={13} /> }
      ]
    },
    { 
      name: 'Services', 
      icon: <Code2 size={12} />,
      submenu: [
        { name: 'Web Architecture', desc: 'Next.js 15 & React', icon: <Code2 size={13} /> },
        { name: 'Mobile Systems', desc: 'Native Experiences', icon: <Smartphone size={13} /> },
        { name: 'Search Opt.', desc: 'Authority & Growth', icon: <Search size={13} /> }
      ]
    },
    { name: 'Portfolio', icon: <Briefcase size={12} />, href: '#' },
    { name: 'Contact', icon: <Mail size={12} />, href: '#' },
  ];

  return (
    <>
      <motion.header 
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 w-full z-[100] transition-all duration-300 backdrop-blur-xl border-b border-[var(--border-color)] h-16"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Logo />
          
          {/* --- Right Actions & Navigation --- */}
          <div className="flex items-center gap-4 lg:gap-8">
            
            {/* Navlinks shifted to Right Side */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative py-2 px-2"
                  onMouseEnter={() => setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <button className="text-[11px] font-medium uppercase tracking-[0.2em] flex items-center gap-2 text-[var(--text-main)] opacity-50 hover:opacity-100 transition-all cursor-pointer">
                    <span className="text-brand-accent opacity-80">{link.icon}</span>
                    {link.name}
                    {link.submenu && <ChevronDown size={10} className={`opacity-40 transition-transform ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />}
                  </button>

                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        className="absolute top-full right-0 w-64 pt-4"
                      >
                        <div className="p-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl backdrop-blur-3xl overflow-hidden">
                          {link.submenu.map((sub) => (
                            <div key={sub.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-accent/5 group transition-all cursor-pointer">
                              <div className="w-8 h-8 rounded-lg bg-brand-accent/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                                {sub.icon}
                              </div>
                              <div>
                                <h4 className="text-[10px] font-bold tracking-wide text-[var(--text-main)]">{sub.name}</h4>
                                <p className="text-[8px] opacity-50 text-[var(--text-soft)]">{sub.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3 border-l border-[var(--border-color)] pl-6">
              <button onClick={toggleTheme} className="p-2 rounded-xl text-[var(--text-main)] opacity-50 hover:opacity-100 transition-all">
                {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button className="hidden sm:flex bg-[var(--text-main)] text-[var(--bg-main)] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest active:scale-95 transition-all shadow-lg">
                Start Project
              </button>
              <button className="lg:hidden p-2 text-[var(--text-main)] opacity-60" onClick={() => setIsMenuOpen(true)}>
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* --- REFINED MOBILE MENU: STUDIO STYLE --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="absolute right-0 h-full w-[85%] max-w-[340px] p-10 flex flex-col bg-[var(--bg-main)] border-l border-[var(--border-color)]"
            >
              <div className="flex justify-between items-center mb-16">
                <Logo />
                <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)]">
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Minimalist Navigation Links */}
              <div className="flex flex-col gap-12">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-brand-accent opacity-50 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-main)] opacity-30 group-hover:opacity-100 transition-opacity">
                          {link.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-5 pl-7 border-l border-[var(--border-color)]">
                      {link.submenu ? link.submenu.map(sub => (
                        <a key={sub.name} href="#" className="flex items-center justify-between group/item">
                          <span className="text-3xl font-light tracking-tighter text-[var(--text-main)] opacity-50 group-hover/item:opacity-100 group-hover/item:translate-x-2 transition-all italic">
                            {sub.name}
                          </span>
                          <ArrowRight size={16} strokeWidth={1} className="opacity-0 group-hover/item:opacity-100 text-brand-accent transition-all" />
                        </a>
                      )) : (
                        <a href="#" className="text-3xl font-light tracking-tighter text-[var(--text-main)] opacity-50 hover:opacity-100 transition-all italic">
                          Explore {link.name}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Clean Footer Section - No extra contact junk */}
              <div className="mt-auto pt-10 border-t border-[var(--border-color)]">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--text-soft)] opacity-20 mb-6">
                  Architecture 2026
                </p>
                <button className="w-full py-4 border border-brand-accent/30 text-brand-accent rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-all active:scale-95">
                  Get in touch
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}