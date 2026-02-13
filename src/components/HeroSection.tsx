import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const images = [
  {
    src: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/c11b82a4-ab67-4e53-a2e3-06d42f2d74ba.jpg",
    alt: "Blue whale in East Timor, swimming with blue whales",
  },
  {
    src: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/d634e5d8-44b6-437e-9a9f-0963a78346ce.jpg",
    alt: "Swimming with Sperm whales in East Timor",
  },
  {
    src: "https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/e2bb2395-85af-461c-b992-2d1c04b6b965.jpg",
    alt: "Dili in Timor Leste",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <>
      <section className="pt-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-16 pb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center gap-2 text-sm font-medium text-ocean">
                <Icon name="Waves" size={16} />
                <span>Sea Tours / In the water</span>
              </div>

              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900 tracking-tight">
                Swimming with Blue and Sperm whales in East Timor
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-ocean hover:bg-ocean/90 text-white h-14 px-10 text-base font-medium rounded-lg gap-2">
                  <Icon name="Mail" size={18} />
                  Contact us
                </Button>
                <Button
                  variant="outline"
                  className="border-ocean text-ocean hover:bg-ocean-light h-14 px-10 text-base font-medium rounded-lg gap-2"
                >
                  <Icon name="Calendar" size={18} />
                  View dates
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === current ? "bg-white w-6" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setFullscreen(true)}
                    className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-black/60 transition-colors"
                  >
                    <Icon name="Maximize2" size={14} />
                    Display in full screen mode
                  </button>
                </div>

                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                >
                  <Icon name="ChevronLeft" size={20} className="text-gray-700" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                >
                  <Icon name="ChevronRight" size={20} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {fullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onClick={() => setFullscreen(false)}
        >
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Icon name="X" size={24} className="text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Icon name="ChevronLeft" size={24} className="text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Icon name="ChevronRight" size={24} className="text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default HeroSection;