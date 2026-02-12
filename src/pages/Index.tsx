import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="theme-dark bg-background text-foreground min-h-screen">
    <Navbar />
    <HeroCarousel />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
