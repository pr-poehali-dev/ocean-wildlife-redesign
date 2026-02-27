import Icon from "@/components/ui/icon";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[68px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/9f7b4614-aefa-4b71-88b7-052e539b7d3c.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001345]/82 via-[#001345]/50 to-[#001345]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001345]/55 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-24">
        <div className="max-w-[640px]">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/18 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D7EBFF] animate-pulse" />
            <span className="text-[#D7EBFF] text-[11px] font-semibold uppercase tracking-[0.18em]">
              Premium Wildlife Expeditions
            </span>
          </div>

          {/* H1 — short and clear */}
          <h1 className="font-serif text-[42px] lg:text-[54px] xl:text-[62px] font-bold text-white leading-[1.08] mb-6">
            Wildlife Expeditions<br />
            <span className="text-[#D7EBFF]">at Sea & on Land</span>
          </h1>

          <p className="text-white/80 text-[17px] leading-relaxed mb-3 max-w-[520px]">
            Small groups, expert guides, unforgettable ethical encounters.
          </p>

          <p className="text-white/55 text-[14px] leading-relaxed mb-10 max-w-[500px]">
            From swimming with blue whales in East Timor to tracking tigers in India — we do everything to make our shared dreams come true.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#expeditions"
              className="inline-flex items-center gap-2 h-12 px-7 bg-[#00468C] hover:bg-[#003A78] text-white text-[15px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(0,70,140,0.45)] transition-all"
            >
              <Icon name="Waves" size={17} />
              Explore Sea Tours
            </a>
            <a
              href="#expeditions"
              className="inline-flex items-center gap-2 h-12 px-7 bg-white/10 hover:bg-white/18 backdrop-blur-sm text-white border border-white/28 text-[15px] font-semibold rounded-xl transition-all"
            >
              <Icon name="TreePine" size={17} />
              Land Tours
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/12">
            {[
              { value: "20+", label: "Destinations" },
              { value: "Max 8", label: "Per group" },
              { value: "15+", label: "Years experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[26px] font-bold text-white font-serif leading-none">{stat.value}</div>
                <div className="text-[#D7EBFF]/60 text-[11px] uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center">
          <Icon name="ChevronDown" size={15} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
