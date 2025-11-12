"use client"

import { motion } from "framer-motion"

interface FeatureCardProps {
  emoji: string
  title: string
  subtitle: string
  description: string
  englishDesc: string
}

export default function FeatureCard({ emoji, title, subtitle, description }: FeatureCardProps) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        borderColor: "#FF5721",
        boxShadow: "0 20px 25px -5px rgba(255, 87, 33, 0.1), 0 10px 10px -5px rgba(255, 87, 33, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
    >
      {/* Icon Container - matching description.tsx design */}
      <motion.div
        className="flex items-center justify-center w-20 h-20 rounded-2xl mb-4"
        style={{
          background: `#FFE6D4`,
          border: '2px solid #FF5721'
        }}
        whileHover="hover"
        initial="initial"
        animate="initial"
      >
        <motion.div
          className='bg-[#FF5721] w-12 h-12 rounded-xl relative overflow-hidden flex items-center justify-center'
          variants={{
            initial: {
              scale: 1,
              rotate: 0,
            },
            hover: {
              scale: 1.1,
              rotate: 10,
            }
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15
          }}
        >
          <div className="w-full h-full inner-shadow absolute top-0 left-0"></div>
          <div className="flex justify-center items-center w-full h-full relative z-10">
            <span className="text-2xl">{emoji}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="text-xl font-bold text-gray-900 mb-2"
        whileHover={{ 
          color: "#FF5721",
          transition: { duration: 0.2 }
        }}
      >
        {title}
      </motion.h3>

      {/* Subtitle */}
      <motion.p 
        className="text-sm text-[#FF5721] font-medium mb-3"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {subtitle}
      </motion.p>

      {/* Description */}
      <motion.p 
        className="text-gray-600 text-sm leading-relaxed"
        whileHover={{ 
          color: "#1f2937",
          transition: { duration: 0.2 }
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
