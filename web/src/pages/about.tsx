"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main id="about" className="lg:h-[90vh] min-h-screen flex flex-col lg:flex-row bg-white px-6 lg:px-12 py-10 relative gap-8 lg:gap-12 overflow-hidden">
        {/* Left Side - Logo */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img 
            src="/logo.svg" 
            alt="Kelana Logo" 
            className="w-64 h-64 lg:w-96 lg:h-96 object-contain"
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
                  duration: 0.6,
                  ease: "easeInOut"
                }
              }
            }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        {/* Right Side - Description */}
        <motion.div 
          className="w-full lg:w-2/5 flex flex-col items-start justify-center text-left z-5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-[#FF5721] mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              color: "#E64A19",
              textShadow: "0 4px 12px rgba(255, 87, 33, 0.3)",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          >
            Tentang Kelana
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              x: 5,
              color: "#1f2937",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
              Kelana adalah aplikasi mobile inovatif yang dirancang untuk memperkaya pengalaman budaya Anda melalui kekuatan Augmented Reality (AR) dan Artificial Intelligence (AI). Misi kami adalah menghubungkan pengguna dengan situs bersejarah, landmark budaya, dan tradisi lokal dengan cara yang menarik dan interaktif.
          </motion.p>
          
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ 
              x: 5,
              color: "#1f2937",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
              Dengan memanfaatkan teknologi canggih, Kelana menawarkan pengalaman AR yang imersif yang menghidupkan sejarah.
          </motion.p>
        </motion.div>
        
        <motion.img 
          src="/image-bottom.svg" 
          alt="Kelana Logo" 
          className="absolute -bottom-1 left-0 right-0 w-full h-auto object-cover pointer-events-none"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
    </main>
  );
}