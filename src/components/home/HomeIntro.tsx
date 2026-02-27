import Icon from "@/components/ui/icon";

const perks = [
  { icon: "Users", label: "Small groups" },
  { icon: "Heart", label: "Enthusiastic guides" },
  { icon: "BedDouble", label: "Great accommodations" },
  { icon: "UtensilsCrossed", label: "Local food & culture" },
  { icon: "HeadphonesIcon", label: "Customer-focused service" },
];

const HomeIntro = () => {
  return (
    <section className="py-16 bg-[#F2F8FD] border-b border-[#001345]/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="font-serif text-[22px] lg:text-[26px] text-[#001345] leading-[1.55] font-medium">
            Come with us on unforgettable journeys and experience magical encounters with the most fascinating animals on earth — in a respectful way!
          </p>
          <p className="text-[#4F5C71] text-[15px] mt-4 leading-relaxed">
            We do everything we can to make our shared dreams come true.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {perks.map((perk) => (
            <div
              key={perk.label}
              className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-[#001345]/6 shadow-[0_1px_6px_rgba(0,19,69,0.05)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EBF3FC] flex items-center justify-center shrink-0">
                <Icon name={perk.icon} size={15} className="text-[#00468C]" />
              </div>
              <span className="text-[13px] font-semibold text-[#001345] whitespace-nowrap">
                {perk.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
