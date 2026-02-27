import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import HomeExpeditions from "@/components/home/HomeExpeditions";
import HomeAbout from "@/components/home/HomeAbout";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeSubscribe from "@/components/home/HomeSubscribe";
import HomeFooter from "@/components/home/HomeFooter";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeNav />
      <HomeHero />
      <HomeExpeditions />
      <HomeAbout />
      <HomeTestimonials />
      <HomeSubscribe />
      <HomeFooter />
    </div>
  );
};

export default HomePage;
