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
      title: "Seru untuk Dijelajahi",
      subtitle: "Fun to Explore",
      description:
        "Rasakan pengalaman eksplorasi budaya seperti bermain game! Kunjungi tempat bersejarah, selesaikan misi, dan kumpulkan poin.",
      englishDesc:
        "Experience cultural exploration like playing a game! Visit historical sites, complete missions, and collect points.",
    },
    {
      emoji: "🧠",
      title: "Teknologi AR + AI Canggih",
      subtitle: "Advanced AR + AI Technology",
      description:
        "Arahkan kamera ke benda bersejarah dan lihat kisahnya hidup dalam 3D interaktif. Belajar sejarah kini lebih nyata dan menyenangkan.",
      englishDesc:
        "Point your camera at historical objects and see their stories come alive in interactive 3D. Learning history is now more real and fun.",
    },
    {
      emoji: "👥",
      title: "Komunitas Eksplorator Budaya",
      subtitle: "Cultural Explorer Community",
      description:
        "Bergabunglah dengan sesama pencinta budaya. Bagikan penemuanmu, ikuti event budaya, dan tumbuhkan semangat pelestarian bersama.",
      englishDesc:
        "Join fellow culture enthusiasts. Share your discoveries, join cultural events, and grow preservation spirit together.",
    },
    {
      emoji: "🎫",
      title: "Reward & Integrasi Perjalanan",
      subtitle: "Rewards & Travel Integration",
      description:
        "Dapatkan poin, tukarkan tiket, dan temukan rute terbaik menuju lokasi budaya. Setiap perjalanan jadi lebih hemat dan bermakna!",
      englishDesc:
        "Earn points, redeem tickets, and find the best routes to cultural sites. Every journey becomes more economical and meaningful!",
    },
  ]

  return (
    <main id="why-kelana" ref={ref} className="lg:h-[70vh] min-h-screen relative flex lg:flex-row flex-col items-center justify-center px-6 lg:px-12 py-10 gap-8 lg:gap-12 overflow-hidden">
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
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 text-balance">
            Keuntungan Kelana
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto text-balance">
            Temukan fitur-fitur seru yang membuat petualangan budaya Anda tak terlupakan
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
