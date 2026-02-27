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

const features = [
  { icon: "Users", text: "Small groups, max. 8 people" },
  { icon: "Heart", text: "Passionate & experienced guides" },
  { icon: "ShieldCheck", text: "Ethical wildlife encounters" },
  { icon: "Star", text: "Premium accommodations" },
];

const HomeAbout = () => {
  return (
    <section className="py-24 bg-[#F2F8FD]" id="about">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left: text content */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-1 h-7 bg-[#00468C] rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00468C]">
                About us
              </span>
            </div>

            <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#001345] ml-4 mb-4 leading-[1.15]">
              About Moby Wildlife Tours
            </h2>

            <p className="text-[#4F5C71] text-[15px] leading-relaxed mb-8 ml-4 max-w-[460px]">
              We are a small, dedicated team of wildlife specialists and expedition guides with over 15 years of experience. Our mission is to connect people with nature through responsible, small-group encounters — from the deep ocean to the wildest forests.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3.5 mb-9 ml-4">
              {features.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-[#001345]/6 shadow-[0_1px_4px_rgba(0,19,69,0.04)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EBF3FC] flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={15} className="text-[#00468C]" />
                  </div>
                  <span className="text-[13px] text-[#4F5C71] leading-snug mt-0.5 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="ml-4 inline-flex items-center gap-2 h-11 px-6 bg-[#00468C] hover:bg-[#001345] text-white text-[14px] font-semibold rounded-xl shadow-[0_2px_12px_rgba(0,70,140,0.25)] transition-all"
            >
              Meet our team
              <Icon name="ArrowRight" size={15} />
            </a>
          </div>

          {/* Right: guide cards */}
          <div className="flex gap-4">
            {guides.map((guide, i) => (
              <div
                key={guide.name}
                className={`relative flex-1 rounded-2xl overflow-hidden group cursor-pointer ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#001345]/72 via-[#001345]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-semibold text-[14px] leading-tight">{guide.name}</div>
                  <div className="text-[#D7EBFF]/70 text-[11px] mt-0.5">{guide.role}</div>
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
