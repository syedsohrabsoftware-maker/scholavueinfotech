"use client";
import { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Moon, ChevronDown, 
  LayoutDashboard, Cpu, Palette, Briefcase, 
  Code2, Smartphone, Search, Globe, ArrowRight,
  Zap, Sparkles, Mail, Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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
        { name: 'ScholaDiv Master', desc: 'School ERP', icon: <Globe size={11} strokeWidth={1.4} /> },
        { name: 'Hajiri Center', desc: 'Attendance AI', icon: <Globe size={11} strokeWidth={1.4} /> },
        { name: 'Recycle ERP', desc: 'Waste Systems', icon: <Globe size={11} strokeWidth={1.4} /> }
      ]
    },
    { 
      name: 'Services', 
      icon: <Code2 size={14} />,
      submenu: [
        { name: 'Web Dev', desc: 'Next.js 15', icon: <Code2 size={18} /> },
        { name: 'Mobile Apps', desc: 'React Native', icon: <Smartphone size={18} /> },
        { name: 'SEO', desc: 'High Ranking', icon: <Search size={18} /> }
      ]
    },
    { name: 'Portfolio', icon: <Briefcase size={14} />, href: '#' },
    { 
      name: 'Contact', 
      icon: <Mail size={14} />,
      submenu: [
        { name: 'Email Us', desc: 'support@scholavue.com', icon: <Mail size={18} /> },
        { name: 'Call Support', desc: '+91 000 000 0000', icon: <Phone size={18} /> }
      ]
    },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[100] transition-all duration-500 bg-[var(--bg-main)]/70 backdrop-blur-xl border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <Logo />
          
          {/* --- Desktop Navigation (Slim Fonts + Icons) --- */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-2 px-4"
                onMouseEnter={() => setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <motion.button 
                  className="text-[11px] font-medium uppercase tracking-[0.2em] flex items-center gap-2 text-[var(--text-main)] opacity-60 hover:opacity-100 transition-all cursor-pointer"
                >
                  <span className="text-brand-accent opacity-80">{link.icon}</span>
                  {link.name}
                  {link.submenu && (
                    <ChevronDown 
                      size={10} 
                      className={`transition-transform duration-300 opacity-40 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} 
                    />
                  )}
                </motion.button>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      className="absolute top-full left-0 w-72 p-2 mt-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl backdrop-blur-2xl"
                    >
                      {link.submenu.map((sub) => (
                        <div key={sub.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-accent/[0.05] border border-transparent hover:border-brand-accent/10 group transition-all cursor-pointer">
                          <div className="p-1.5 rounded-lg bg-brand-accent/8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                            {sub.icon}
                          </div>
                          <div>
                            <h4 className="text-[9.5px] font-medium tracking-wide  text-gray-900 dark:text-gray-500">{sub.name}</h4>
                            <p className="text-[8px] opacity-70 text-[var(--text-soft)]">{sub.desc}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* --- Right Actions --- */}
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-xl border border-[var(--border-color)] text-[var(--text-main)] hover:bg-brand-accent/5 transition-all">
              {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button className="hidden sm:flex bg-[var(--text-main)] text-[var(--bg-main)] px-6 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg">
              Start Project
            </button>

            <button className="lg:hidden p-2 text-[var(--text-main)] bg-[var(--text-main)]/5 rounded-lg" onClick={() => setIsMenuOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* --- Advanced Slim Mobile Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 h-full w-[85%] max-w-[300px] p-8 flex flex-col bg-[var(--bg-main)] border-l border-[var(--border-color)] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-[var(--text-main)]/5 rounded-full text-[var(--text-main)]">
                  <X size={20} />
                </button>
              </div>

              {/* Advanced Menu Links with Slim Font */}
              <div className="flex flex-col gap-10 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-4 opacity-40">
                      {link.icon}
                      <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[var(--text-main)]">
                        {link.name}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-4 pl-3 border-l border-[var(--border-color)]">
                      {link.submenu ? link.submenu.map(sub => (
                        <a key={sub.name} href="#" className="flex items-center justify-between group">
                          <span className="text-[15px] font-medium text-[var(--text-main)] group-hover:text-brand-accent transition-colors italic">
                            {sub.name}
                          </span>
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-accent" />
                        </a>
                      )) : (
                        <a href="#" className="text-[15px] font-medium text-[var(--text-main)] italic">
                          View Projects
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Feature Section */}
              <div className="mt-auto pt-8">
                <div className="mb-6 p-4 rounded-xl bg-brand-accent/5 border border-brand-accent/10">
                   <div className="flex items-center gap-2 text-brand-accent mb-1">
                     <Sparkles size={12} />
                     <span className="text-[9px] font-semibold uppercase tracking-widest">Innovation House</span>
                   </div>
                   <p className="text-[11px] text-[var(--text-soft)] italic leading-relaxed font-medium">Architecting the future with ScholaVue Infotech.</p>
                </div>
                <button className="w-full bg-[var(--text-main)] text-[var(--bg-main)] py-4 rounded-xl font-semibold text-[11px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                  Contact Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}