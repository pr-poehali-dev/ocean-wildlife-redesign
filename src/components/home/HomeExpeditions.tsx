import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const allExpeditions = [
  {
    id: 1,
    title: "Blue Whale in Timor",
    location: "East Timor",
    type: "sea",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/81ee4229-ecd1-426f-bb33-74efb3ad00e1.jpg",
    tag: "In the water",
  },
  {
    id: 2,
    title: "Ibex in the Alps",
    location: "Switzerland",
    type: "land",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/eb24bf73-d657-4283-9e4f-4802b4214020.jpg",
    tag: "Land tour",
  },
  {
    id: 3,
    title: "Orangutan in Indonesia",
    location: "Sumatra",
    type: "land",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/4e1df3fb-de9f-4b14-b65e-e30c331cbf73.jpg",
    tag: "Land tour",
  },
  {
    id: 4,
    title: "Lynx in Spain",
    location: "Spain",
    type: "land",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/490e59b1-3f57-41fc-b0bc-d247478c6c6c.jpg",
    tag: "Land tour",
  },
  {
    id: 5,
    title: "Bear in Slovenia",
    location: "Slovenia",
    type: "land",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/e07b1b07-5a12-449a-b9fb-0c6e5994e2e2.jpg",
    tag: "Land tour",
  },
  {
    id: 6,
    title: "Wolf in Finland",
    location: "Finland",
    type: "land",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/c3337154-12f0-4591-917f-fdd22d809fd1.jpg",
    tag: "Land tour",
  },
  {
    id: 7,
    title: "Great Grey Owl in Finland",
    location: "Finland",
    type: "land",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/a77d9e1e-abc2-48c0-9aae-8aa2cb2c4d0a.jpg",
    tag: "Land tour",
  },
  {
    id: 8,
    title: "Blue Whale in the Azores",
    location: "Azores",
    type: "sea",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/a0d7aeef-9df7-4909-9522-caa09ad48c87.jpg",
    tag: "On the boat",
  },
  {
    id: 9,
    title: "Tigers in India",
    location: "India",
    type: "land",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/72bd939b-f677-4da3-ad59-843f992bb4c0.jpg",
    tag: "Land tour",
  },
];

type Filter = "all" | "sea" | "land";

const HomeExpeditions = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [fullscreen, setFullscreen] = useState<number | null>(null);

  const filtered = filter === "all" ? allExpeditions : allExpeditions.filter((e) => e.type === filter);

  return (
    <section className="py-24 bg-white" id="expeditions">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-ocean rounded-full" />
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
                Our Animal Expeditions
              </h2>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl ml-4">
              Swimming with blue whales? Orangutans in the rainforest? Ready for unforgettable days? Then take a look at the trips we offer here!
            </p>
          </div>

          <div className="flex items-center gap-2 ml-4 lg:ml-0">
            {(["all", "sea", "land"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                  filter === f
                    ? "bg-ocean text-white shadow-[0_2px_12px_rgba(14,116,144,0.3)]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon name={f === "all" ? "Globe2" : f === "sea" ? "Waves" : "TreePine"} size={15} />
                {f === "all" ? "All" : f === "sea" ? "Sea Tours" : "Land Tours"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((exp, i) => (
            <div
              key={exp.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                  exp.type === "sea"
                    ? "bg-ocean text-white"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
                }`}>
                  {exp.tag}
                </span>
              </div>

              <button
                onClick={() => setFullscreen(exp.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100"
              >
                <Icon name="Maximize2" size={14} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-white/60 text-[11px] uppercase tracking-wider mb-0.5 flex items-center gap-1">
                      <Icon name="MapPin" size={11} />
                      {exp.location}
                    </div>
                    <h3 className="text-white font-serif font-bold text-lg leading-tight">{exp.title}</h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <Button variant="outline" className="h-11 px-6 rounded-xl border-ocean text-ocean hover:bg-ocean hover:text-white gap-2 font-semibold transition-all">
            <Icon name="Waves" size={16} />
            All Sea Tours
          </Button>
          <Button variant="outline" className="h-11 px-6 rounded-xl border-ocean text-ocean hover:bg-ocean hover:text-white gap-2 font-semibold transition-all">
            <Icon name="TreePine" size={16} />
            All Land Tours
          </Button>
        </div>
      </div>

      {fullscreen !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setFullscreen(null)}
        >
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Icon name="X" size={20} />
          </button>
          {allExpeditions.find((e) => e.id === fullscreen) && (
            <img
              src={allExpeditions.find((e) => e.id === fullscreen)!.image}
              alt=""
              className="max-w-full max-h-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default HomeExpeditions;
