"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-3xl h-2/3">
        <motion.div 
          className="backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #FFA270 0%, #FF906D 50%, #E83800 100%)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  scale: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  },
                  rotate: {
                    duration: 0.6
                  }
                }
              }}
            >
              <img
                src="/logo-k.svg"
                alt="Kelana Logo"
                className="w-22 h-22 object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Mulai Petualanganmu dengan <span className="text-yellow-300">Kelana</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-white/80 text-center text-lg mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Jelajahi budaya Indonesia dengan AR & AI. Dapatkan poin, tukar hadiah, dan temukan sejarah di sekitarmu!
          </motion.p>

          {/* Download Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Google Play Button */}
            <motion.a
              href="#"
              className="transition-all w-full sm:w-48 h-full"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="./play-store.svg" alt="Get it on Google Play" className="w-full h-full" />
            </motion.a>

            {/* Apple App Store Button */}
            <motion.a
              href="#"
              className="transition-all w-full sm:w-48 h-full"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="./app-store.svg" alt="Download on the App Store" className="w-full h-full" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}