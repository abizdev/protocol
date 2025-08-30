import { useTranslations } from 'next-intl';
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <InfoSection />
        <Footer />
      </main>
    </>
  );
}
