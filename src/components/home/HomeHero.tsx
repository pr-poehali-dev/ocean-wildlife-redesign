import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/9f7b4614-aefa-4b71-88b7-052e539b7d3c.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-ocean animate-pulse" />
            <span className="text-white/80 text-[12px] font-medium uppercase tracking-widest">Premium Wildlife Expeditions</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
            Swim with Sperm and Blue whales, come face to face with Bears and Wolves or be surrounded by elegant Tiger sharks
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-4 max-w-xl">
            Come with us on unforgettable journeys and experience magical encounters with the most fascinating animals on earth in a respectful way!
          </p>

          <p className="text-white/60 text-[15px] leading-relaxed mb-10 max-w-xl">
            Small groups, enthusiastic guides, great accommodations, interesting local food, and customer-focused service—we do everything we can to make our shared dreams come true.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-ocean hover:bg-ocean/90 text-white h-12 px-7 text-[15px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(14,116,144,0.4)] gap-2">
              <Icon name="Waves" size={18} />
              Sea Tours
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 h-12 px-7 text-[15px] font-semibold rounded-xl gap-2">
              <Icon name="TreePine" size={18} />
              Land Tours
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/15">
            {[
              { value: "20+", label: "Destinations" },
              { value: "Max 8", label: "Per group" },
              { value: "15+", label: "Years of experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white font-serif">{stat.value}</div>
                <div className="text-white/50 text-[12px] uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center">
          <Icon name="ChevronDown" size={16} className="text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
