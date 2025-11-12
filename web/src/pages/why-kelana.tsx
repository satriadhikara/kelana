import FeatureCard from "@/components/feature-card"

export default function WhyKelana() {
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
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="pt-16 pb-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF5721] mb-4 text-balance">
          Jelajahi Budaya dengan Cara Baru! 🗺️
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto text-balance">
          Temukan fitur-fitur seru yang membuat petualangan budaya Anda tak terlupakan
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </main>
  )
}
