"use client";
import HeroSection from "@/pages/hero-section";
import AboutPage from "@/pages/about";
import WhyKelana from "@/pages/why-kelana";
import Description from "@/pages/description";
import GetStartedPage from "@/pages/get-started";
import Footer from "@/pages/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <WhyKelana />
      <Description />
      <GetStartedPage />
      <Footer />
    </>
  );
} 
