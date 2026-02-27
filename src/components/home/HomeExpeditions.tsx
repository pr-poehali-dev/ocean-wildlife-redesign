import { useState } from "react";
import Icon from "@/components/ui/icon";

const allExpeditions = [
  {
    id: 1,
    title: "Swimming with Blue Whales",
    location: "East Timor",
    description: "Dive alongside the largest animals on Earth in crystal-clear tropical waters.",
    type: "sea" as const,
    tag: "In the water",
    duration: "10 days",
    groupSize: "Max 8",
    season: "Mar – Jun",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/81ee4229-ecd1-426f-bb33-74efb3ad00e1.jpg",
  },
  {
    id: 8,
    title: "Big Whales off the Azores",
    location: "Azores",
    description: "Encounter sperm whales and fin whales from a traditional Azorean whale-watch boat.",
    type: "sea" as const,
    tag: "On the boat",
    duration: "8 days",
    groupSize: "Max 8",
    season: "Apr – Jul",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/a0d7aeef-9df7-4909-9522-caa09ad48c87.jpg",
  },
  {
    id: 2,
    title: "Ibex in the Alps",
    location: "Switzerland",
    description: "Track mountain ibex through pristine Alpine landscapes with expert naturalists.",
    type: "land" as const,
    tag: "Land tour",
    duration: "5 days",
    groupSize: "Max 8",
    season: "Jun – Sep",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/eb24bf73-d657-4283-9e4f-4802b4214020.jpg",
  },
  {
    id: 3,
    title: "Orangutans in the Rainforest",
    location: "Sumatra",
    description: "Witness wild orangutans in their natural habitat deep in Sumatran jungle.",
    type: "land" as const,
    tag: "Land tour",
    duration: "9 days",
    groupSize: "Max 8",
    season: "Jun – Oct",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/4e1df3fb-de9f-4b14-b65e-e30c331cbf73.jpg",
  },
  {
    id: 4,
    title: "Lynx & Vultures in Spain",
    location: "Spain",
    description: "Spot the elusive Iberian lynx and soaring griffon vultures in southern Spain.",
    type: "land" as const,
    tag: "Land tour",
    duration: "7 days",
    groupSize: "Max 8",
    season: "Feb – May",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/490e59b1-3f57-41fc-b0bc-d247478c6c6c.jpg",
  },
  {
    id: 5,
    title: "Brown Bears in Slovenia",
    location: "Slovenia",
    description: "Observe brown bears from hides in the ancient Slovenian forest. Truly wild encounters.",
    type: "land" as const,
    tag: "Land tour",
    duration: "5 days",
    groupSize: "Max 8",
    season: "Apr – Oct",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/e07b1b07-5a12-449a-b9fb-0c6e5994e2e2.jpg",
  },
  {
    id: 6,
    title: "Wolves & Owls in Finland",
    location: "Finland",
    description: "Night vigils for great grey owls and rare glimpses of the Finnish wolf pack.",
    type: "land" as const,
    tag: "Land tour",
    duration: "6 days",
    groupSize: "Max 8",
    season: "Feb – Apr",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/c3337154-12f0-4591-917f-fdd22d809fd1.jpg",
  },
  {
    id: 7,
    title: "Great Grey Owl",
    location: "Finland",
    description: "An intimate encounter with Finland's mythical great grey owl in boreal forest.",
    type: "land" as const,
    tag: "Land tour",
    duration: "4 days",
    groupSize: "Max 8",
    season: "Mar – Apr",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/a77d9e1e-abc2-48c0-9aae-8aa2cb2c4d0a.jpg",
  },
  {
    id: 9,
    title: "Tigers & Leopards in India",
    location: "India",
    description: "Safari expeditions in tiger reserves for face-to-face moments with big cats.",
    type: "land" as const,
    tag: "Land tour",
    duration: "10 days",
    groupSize: "Max 8",
    season: "Nov – Mar",
    image: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/72bd939b-f677-4da3-ad59-843f992bb4c0.jpg",
  },
];

type Filter = "all" | "sea" | "land";

const SEA_ACCENT = "#00468C";
const LAND_ACCENT = "#166534";
const SEA_BG = "#F2F8FD";
const LAND_BG = "#F7FDF2";

const HomeExpeditions = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [fullscreen, setFullscreen] = useState<number | null>(null);

  const filtered =
    filter === "all" ? allExpeditions : allExpeditions.filter((e) => e.type === filter);

  const tabConfig = [
    { key: "all" as Filter, label: "All Expeditions", icon: "Globe2", activeColor: SEA_ACCENT, activeBg: SEA_BG },
    { key: "sea" as Filter, label: "Sea Tours", icon: "Waves", activeColor: SEA_ACCENT, activeBg: SEA_BG },
    { key: "land" as Filter, label: "Land Tours", icon: "TreePine", activeColor: LAND_ACCENT, activeBg: LAND_BG },
  ];

  return (
    <section className="py-24 bg-white" id="expeditions">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-1 h-7 bg-[#00468C] rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00468C]">
                Expeditions
              </span>
            </div>
            <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#001345] ml-4 leading-[1.15]">
              Our Animal Expeditions
            </h2>
            <p className="text-[#4F5C71] text-[15px] leading-relaxed max-w-[480px] ml-4 mt-2">
              Swimming with blue whales? Orangutans in the rainforest? Take a look at the trips we offer.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 ml-4 lg:ml-0 p-1 bg-slate-50 rounded-2xl border border-slate-100">
            {tabConfig.map((tab) => {
              const isActive = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: "white",
                          color: tab.activeColor,
                          boxShadow: "0 2px 8px rgba(0,19,69,0.08)",
                        }
                      : { color: "#4F5C71" }
                  }
                >
                  <Icon name={tab.icon} size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((exp) => {
            const isSea = exp.type === "sea";
            const chipColor = isSea ? SEA_ACCENT : LAND_ACCENT;
            const chipBg = isSea ? "#EBF3FC" : "#E8F5E9";
            const borderAccent = isSea ? SEA_ACCENT : LAND_ACCENT;

            return (
              <div
                key={exp.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_2px_12px_rgba(0,19,69,0.05)] hover:shadow-[0_8px_32px_rgba(0,19,69,0.10)] transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Category chip */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: chipBg, color: chipColor }}
                    >
                      <Icon name={isSea ? "Waves" : "TreePine"} size={11} />
                      {exp.tag}
                    </span>
                  </div>

                  {/* Fullscreen */}
                  <button
                    onClick={() => setFullscreen(exp.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/85 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-500 hover:text-[#001345] transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                  >
                    <Icon name="Maximize2" size={13} />
                  </button>
                </div>

                {/* Card body */}
                <div
                  className="flex flex-col flex-1 p-5"
                  style={{ borderTop: `2px solid ${borderAccent}` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif font-bold text-[#001345] text-[17px] leading-snug">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-[#4F5C71] text-[13px] leading-relaxed mb-4 flex-1">
                    {exp.description}
                  </p>

                  {/* Key facts row */}
                  <div className="flex items-center gap-3 mb-4 pt-3 border-t border-slate-80">
                    <div className="flex items-center gap-1 text-[12px] text-[#4F5C71]">
                      <Icon name="MapPin" size={12} className="shrink-0" style={{ color: chipColor }} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1 text-[12px] text-[#4F5C71]">
                      <Icon name="Clock" size={12} className="shrink-0" style={{ color: chipColor }} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 text-[12px] text-[#4F5C71]">
                      <Icon name="Users" size={12} className="shrink-0" style={{ color: chipColor }} />
                      {exp.groupSize}
                    </div>
                    <div className="flex items-center gap-1 text-[12px] text-[#4F5C71]">
                      <Icon name="Calendar" size={12} className="shrink-0" style={{ color: chipColor }} />
                      {exp.season}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
                    style={{ color: chipColor }}
                  >
                    View expedition
                    <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTAs */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border-2 text-[13px] font-semibold transition-all hover:text-white"
            style={{ borderColor: SEA_ACCENT, color: SEA_ACCENT }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = SEA_ACCENT;
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = SEA_ACCENT;
            }}
          >
            <Icon name="Waves" size={15} />
            All Sea Tours
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border-2 text-[13px] font-semibold transition-all"
            style={{ borderColor: LAND_ACCENT, color: LAND_ACCENT }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = LAND_ACCENT;
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = LAND_ACCENT;
            }}
          >
            <Icon name="TreePine" size={15} />
            All Land Tours
          </a>
        </div>
      </div>

      {/* Fullscreen modal */}
      {fullscreen !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#001345]/92 flex items-center justify-center p-4"
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
