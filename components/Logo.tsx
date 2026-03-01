// components/Logo.tsx
export default function Logo() {
  return (
    <div className="flex items-center gap-4 group cursor-pointer select-none py-2">
      {/* 1. Large Geometric Icon */}
      <div className="flex items-center -space-x-1.5 transition-transform duration-500 group-hover:scale-110">
        <span className="text-[32px] font-extralight text-brand-accent transition-all duration-300 group-hover:-translate-x-1 group-hover:rotate-[-12deg]">
          {"{"}
        </span>
        {/* Neon Core Dot */}
        <div className="w-2.5 h-2.5 bg-brand-accent rounded-full shadow-[0_0_15px_#8B5CF6] animate-pulse relative z-10" />
        <span className="text-[32px] font-extralight text-brand-accent transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[12deg]">
          {"}"}
        </span>
      </div>

      {/* 2. Bold Brand Typography */}
      <div className="flex flex-col leading-none border-l-2 border-current/10 pl-4">
        <span className="text-[22px] font-[1000] uppercase tracking-[-0.05em] transition-all duration-500 group-hover:tracking-[0.05em]">
          ScholaVue<span className="text-brand-accent">.</span>
        </span>
        {/* Expanded Tech Tagline */}
        
      </div>
    </div>
  );
}