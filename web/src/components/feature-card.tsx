"use client"

import { motion } from "framer-motion"

interface FeatureCardProps {
  emoji: string
  title: string
  subtitle: string
  description: string
  englishDesc: string
  index?: number
}

export default function FeatureCard({ emoji, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div 
      className="flex flex-col items-start text-start p-6 pt-16 rounded-lg transition-all duration-300 shadow-lg relative overflow-visible"
      style={{
        background: 'linear-gradient(135deg, #FFB088 0%, #FFCBA4 50%, #FFE6D4 100%)',
        border: '2px solid rgba(255, 87, 33, 0.3)'
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(255, 87, 33, 0.4), 0 12px 20px -8px rgba(255, 87, 33, 0.3)",
        borderColor: "rgba(255, 87, 33, 0.6)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none rounded-lg"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 87, 33, 0.1) 0%, transparent 70%)'
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Emoji Icon - Positioned at top-left with half outside */}
      <motion.div
        className="flex items-center justify-center w-20 h-20 rounded-2xl absolute -top-10 left-6 z-20"
        style={{
          background: 'linear-gradient(135deg, #FF5721 0%, #FF7043 100%)',
          border: '2px solid #FF5721',
          boxShadow: '0 4px 6px rgba(255, 87, 33, 0.2)'
        }}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5,
          delay: index * 0.15 + 0.2,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        whileHover={{
          rotate: [0, -5, 5, -5, 0],
          scale: 1.1,
          boxShadow: '0 8px 16px rgba(255, 87, 33, 0.4)',
          transition: {
            rotate: {
              duration: 0.5,
              ease: "easeInOut"
            },
            scale: {
              type: "spring",
              stiffness: 400,
              damping: 15
            }
          }
        }}
      >
        <motion.div
          className='w-14 h-14 rounded-xl relative overflow-hidden flex items-center justify-center backdrop-blur-sm'
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)"
          }}
          whileHover={{
            scale: 1.15,
            rotate: 15,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 20
            }
          }}
        >
          <div className="w-full h-full inner-shadow absolute top-0 left-0"></div>
          <motion.div 
            className="flex justify-center items-center w-full h-full relative z-10"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
          >
            <span className="text-3xl filter drop-shadow-md">{emoji}</span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="w-full relative z-10">
        {/* Title */}
        <motion.h3 
          className="text-xl font-bold text-[#FF5721] mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.15 + 0.3,
            ease: "easeOut"
          }}
          whileHover={{ 
            x: 5,
            color: "#E64A19",
            textShadow: "0 2px 8px rgba(255, 87, 33, 0.3)",
            transition: { 
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-gray-800 text-sm leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.15 + 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            x: 3,
            color: "#1f2937",
            transition: { 
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}
