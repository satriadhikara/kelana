import FeatureCard from "@/components/feature-card"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function WhyKelana() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Desktop parallax: moves more dramatically
  const xDesktop = useTransform(scrollYProgress, [0, 1], [-300, 100])
  
  // Mobile parallax: moves less dramatically to prevent overflow
  const xMobile = useTransform(scrollYProgress, [0, 1], [-50, 50])
  
  const features = [
    {
      emoji: "🕹️",
      title: "Petualangan yang Tak Terlupakan",
      subtitle: "Unforgettable Adventure",
      description:
        "Jelajahi warisan budaya Indonesia layaknya bermain game! Setiap kunjungan adalah misi baru, setiap penemuan adalah hadiah. Kumpulkan poin dan jadilah eksplorator budaya sejati!",
      englishDesc:
        "Explore Indonesia's cultural heritage like never before! Every visit is a new mission, every discovery is a reward. Collect points and become a true cultural explorer!",
    },
    {
      emoji: "🧠",
      title: "Teknologi AR & AI Terdepan",
      subtitle: "Cutting-Edge AR & AI",
      description:
        "Hidupkan sejarah di depan mata Anda! Arahkan kamera ke artefak bersejarah dan saksikan masa lalu bangkit dalam pengalaman 3D yang memukau. Belajar tak pernah semenarik ini!",
      englishDesc:
        "Bring history to life before your eyes! Point your camera at historical artifacts and watch the past come alive in stunning 3D. Learning has never been this captivating!",
    },
    {
      emoji: "👥",
      title: "Komunitas Pecinta Budaya",
      subtitle: "Vibrant Cultural Community",
      description:
        "Bergabunglah dengan ribuan pencinta budaya Indonesia! Bagikan pengalaman unikmu, ikuti event eksklusif, dan bersama-sama lestarikan warisan bangsa untuk generasi mendatang.",
      englishDesc:
        "Join thousands of Indonesian culture enthusiasts! Share your unique experiences, attend exclusive events, and together preserve our heritage for future generations.",
    },
    {
      emoji: "🎫",
      title: "Hemat Biaya, Maksimal Pengalaman",
      subtitle: "Save Money, Maximize Experience",
      description:
        "Raih reward dari setiap eksplorasi! Tukarkan poin dengan tiket gratis, diskon menarik, dan akses eksklusif ke destinasi budaya. Perjalananmu jadi lebih hemat dan bermakna!",
      englishDesc:
        "Earn rewards from every exploration! Redeem points for free tickets, amazing discounts, and exclusive access to cultural destinations. Your journey becomes more economical and meaningful!",
    },
  ]

  return (
    <main id="why-kelana" ref={ref} className="min-h-screen relative flex lg:flex-row flex-col items-center justify-center px-6 lg:px-12 py-10 gap-8 lg:gap-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/why-kelana-bg.png')",
        }}
      />
      
      {/* Optional overlay for better text readability */}
      <div 
        className="absolute inset-0 h-1/6"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 144, 109, 0.9) 0%, rgba(255, 144, 109, 0.6) 80%, transparent 100%)'
        }}
      />

      {/* Desktop version with full parallax */}
      <motion.div
        className="hidden lg:block relative z-10"
        style={{ x: xDesktop }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
      >
        <img src="/character.svg" alt="Kelana Logo" className="w-full h-auto object-cover" />
      </motion.div>

      {/* Mobile version with subtle parallax */}
      <motion.div
        className="lg:hidden relative z-10"
        style={{ x: xMobile }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
      >
        <img src="/character.svg" alt="Kelana Logo" className="w-64 h-auto object-cover" />
      </motion.div>

      <div className="flex flex-col gap-15 relative z-10">
        {/* Header Section */}
        <div className="pt-16 pb-5 px-3 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-balance">
            Mengapa Memilih Kelana?
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-semibold text-balance">
            Transformasi cara Anda menjelajahi dan menghargai kekayaan budaya Indonesia
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
