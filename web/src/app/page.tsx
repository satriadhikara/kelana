"use client";

import { Iphone } from "@/components/ui/iphone";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#242528] flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        ease={80}
        color="#FF5721"
        refresh={false}
      />

      <main className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 py-20">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <BlurFade delay={0.1} inView>
            <h1 className="text-7xl lg:text-9xl font-bold text-white tracking-tight">
              kelana
            </h1>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-2xl lg:text-3xl text-gray-400 max-w-lg mx-auto lg:mx-0">
              Your journey starts here
            </p>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#"
                className="group px-10 py-5 bg-[#FF5721] text-white text-lg font-semibold rounded-full hover:bg-[#ff6a3a] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF5721]/20 hover:scale-105"
              >
                Download Now
              </a>
              <a
                href="#"
                className="px-10 py-5 border-2 border-[#FF5721] text-[#FF5721] text-lg font-semibold rounded-full hover:bg-[#FF5721] hover:text-white transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </BlurFade>
        </div>

        {/* Right Content - iPhone Mockup */}
        <BlurFade
          delay={0.7}
          inView
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="w-[300px] lg:w-[380px]">
            <Iphone
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 800'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF5721;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff8a5a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='800' fill='url(%23grad)'/%3E%3Ctext x='200' y='420' font-family='system-ui' font-size='72' font-weight='bold' fill='white' opacity='0.3' text-anchor='middle'%3Ekelana%3C/text%3E%3C/svg%3E"
              className="drop-shadow-2xl"
            />
          </div>
        </BlurFade>
      </main>
    </div>
  );
}
