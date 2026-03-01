"use client";
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main className="bg-[var(--bg-main)] transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. Hero Section - Full Width Architecture */}
      <Hero />
      
      {/* 2. Content Container for Features */}
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Features Section - Bento Grid Logic Inside */}
        <section className="py-24 mb-20">
          <Features />
        </section>

      </div>
    </main>
  );
}