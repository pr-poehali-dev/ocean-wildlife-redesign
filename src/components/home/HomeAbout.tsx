import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const guides = [
  {
    name: "Alex Brenner",
    role: "Lead Wildlife Guide",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/b796faea-739f-49ea-b6bc-a8ddeb8915cf.jpg",
  },
  {
    name: "Kevin Keiser",
    role: "Marine Expedition Guide",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/2671fa96-ae8a-4b73-8efa-6776acf20b12.jpg",
  },
  {
    name: "Lukas Fischer",
    role: "Wildlife Photographer & Guide",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/a25fab00-e462-4500-b015-490fa7677bdf.jpg",
  },
];

const HomeAbout = () => {
  return (
    <section className="py-24 bg-gray-50" id="about">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-ocean rounded-full" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-ocean">About us</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-5 ml-4">
              About Moby Wildlife Tours
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 ml-4">
              Find out more about your tour guides, our passion and our partners
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 ml-4">
              {[
                { icon: "Users", text: "Small groups max. 8 people" },
                { icon: "Heart", text: "Passionate & experienced guides" },
                { icon: "ShieldCheck", text: "Ethical wildlife encounters" },
                { icon: "Star", text: "Premium accommodations" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-ocean-light flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={15} className="text-ocean" />
                  </div>
                  <span className="text-[13px] text-gray-600 leading-snug mt-0.5">{item.text}</span>
                </div>
              ))}
            </div>

            <Button className="ml-4 bg-ocean hover:bg-ocean/90 text-white h-11 px-6 text-[14px] font-semibold rounded-xl gap-2 shadow-[0_2px_12px_rgba(14,116,144,0.3)]">
              Learn more
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>

          <div className="flex gap-4">
            {guides.map((guide, i) => (
              <div
                key={guide.name}
                className={`relative flex-1 rounded-2xl overflow-hidden group ${
                  i === 1 ? "mt-8" : i === 2 ? "mt-16" : ""
                }`}
              >
                <div className="aspect-[3/4] w-full">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-semibold text-[14px] leading-tight">{guide.name}</div>
                  <div className="text-white/60 text-[11px] mt-0.5">{guide.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
