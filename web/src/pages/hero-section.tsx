"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col px-6 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('./wallpaper-museum.jpg')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <main className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center flex-1 gap-16 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <BlurFade delay={0.1} inView>
            <motion.h1
              className="text-7xl lg:text-7xl font-bold text-[#FF5721] tracking-tight"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(255, 87, 33, 0.5)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              Temukan Keajaiban Budaya di Sekitarmu!
            </motion.h1>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <motion.p
              className="text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto"
              whileHover={{
                color: "#ffffff",
                scale: 1.02,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              Jelajahi situs bersejarah, mainkan tantangan budaya, dan rasakan
              pengalaman baru lewat Augmented Reality berbasis AI.
            </motion.p>
          </BlurFade>
        </div>
      </main>

      {/* Learn More Arrow at Bottom */}
      <BlurFade delay={0.7} inView>
        <motion.a
          href="#app-description"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="relative z-20 flex flex-col items-center gap-2 text-white transition-colors duration-300 cursor-pointer group pb-3"
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 20,
            },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="text-sm font-medium"
            whileHover={{
              color: "#FF5721",
              letterSpacing: "0.05em",
              transition: { duration: 0.2 },
            }}
          >
            Learn More
          </motion.span>
          <motion.div
            whileHover={{
              y: [0, 5, 0],
              transition: {
                repeat: Infinity,
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
          >
            <ChevronDown className="w-6 h-6 text-white group-hover:text-[#FF5721] transition-colors" />
          </motion.div>
        </motion.a>
      </BlurFade>
    </div>
  );
}
