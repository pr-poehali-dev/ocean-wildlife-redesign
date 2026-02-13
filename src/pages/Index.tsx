import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import KeyInfoSection from "@/components/KeyInfoSection";
import ContentSections from "@/components/ContentSections";
import VideoHighlight from "@/components/VideoHighlight";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <HeroSection />
      <KeyInfoSection />
      <ContentSections />
      <VideoHighlight />
      <ContactSection />
      <SiteFooter />
      <StickyCTA />
    </div>
  );
};

export default Index;
