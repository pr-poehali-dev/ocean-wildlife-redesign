import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import HomeExpeditions from "@/components/home/HomeExpeditions";
import HomeAbout from "@/components/home/HomeAbout";
import HomeTestimonialsPlaceholder from "@/components/home/HomeTestimonialsPlaceholder";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeNav />
      <HomeHero />
      <HomeExpeditions />
      <HomeAbout />
      <HomeTestimonialsPlaceholder />
    </div>
  );
};

export default HomePage;
