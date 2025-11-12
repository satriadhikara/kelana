"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('./wallpaper-museum.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <main className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center flex-1 gap-16 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <BlurFade delay={0.1} inView>
            <h1 className="text-7xl lg:text-7xl font-bold text-[#FF5721] tracking-tight">
              Temukan Keajaiban Budaya di Sekitarmu!
            </h1>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto">
              Jelajahi situs bersejarah, mainkan tantangan budaya, dan rasakan
              pengalaman baru lewat Augmented Reality berbasis AI.
            </p>
          </BlurFade>
        </div>
      </main>

      {/* Learn More Arrow at Bottom */}
      <BlurFade delay={0.7} inView>
        <a
          href="#app-description"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('app-description')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="relative z-20 flex flex-col items-center gap-2 text-white hover:text-[#FF5721] transition-colors duration-300 cursor-pointer group pb-3"
        >
          <span className="text-sm font-medium">Learn More</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-[#FF5721]" />
        </a>
      </BlurFade>
    </div>
  );
}
