"use client";
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesDropdown from '@/components/Services-Overview';
import Features from '@/components/Features';
import CaseStudies from '@/components/CaseStudies';
import TrustStats from '@/components/TrustStats';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <main className="bg-[var(--bg-main)] transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. Hero Section - Full Width Architecture */}
      <Hero />
      
      {/* 2. Content Container for Features */}
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Features Section - Bento Grid Logic Inside */}
        <section className="py-12 mb-2">
          <About />
          <ServicesDropdown />
          
          <Features />
          <CaseStudies />
          <TrustStats />
          <Process />
          <Testimonials />
          <Faq />
        </section>

      </div>
    </main>
  );
}