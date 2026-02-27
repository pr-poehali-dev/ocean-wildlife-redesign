import Icon from "@/components/ui/icon";

const seaTours = [
  "Swimming with Blue Whales in East Timor",
  "Swimming with Humpback Whales off La Réunion",
  "Swimming with Orcas & Humpback Whales in Norway",
  "Swimming with Humpback Whales in Tonga",
  "Big Whales off the Azores",
  "Dolphins & Whales off Madeira",
];

const landTours = [
  "Brown Bears in Slovenia",
  "Tigers, Leopards & Co. in India",
  "Bears, Wolves & Owls in Finland",
  "Orangutans in Sumatra",
  "Lynx, Vultures & Co. in Spain",
  "Gorillas, Chimpanzees & Safari in Uganda",
];

const HomeFooter = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center shrink-0">
                <Icon name="Waves" size={16} className="text-white" />
              </div>
              <span className="font-serif text-lg font-bold text-white leading-none">
                Moby Wildlife<br />
                <span className="text-[10px] font-sans font-medium text-ocean tracking-widest uppercase">Tours</span>
              </span>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
              Unforgettable wildlife expeditions with small groups and passionate guides. Experience nature at its most extraordinary.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-ocean/50 transition-all"
              >
                <Icon name="Facebook" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-ocean/50 transition-all"
              >
                <Icon name="Instagram" size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-ocean mb-4">
              Sea Tours
            </div>
            <ul className="space-y-2">
              {seaTours.map((tour) => (
                <li key={tour}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-ocean/50 shrink-0" />
                    {tour}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-[13px] text-ocean hover:text-ocean/80 transition-colors font-medium">
                  All Sea Tours →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-ocean mb-4">
              Land Tours
            </div>
            <ul className="space-y-2">
              {landTours.map((tour) => (
                <li key={tour}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-ocean/50 shrink-0" />
                    {tour}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-[13px] text-ocean hover:text-ocean/80 transition-colors font-medium">
                  All Land Tours →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-ocean mb-4">
              Contact
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <Icon name="Phone" size={14} className="text-ocean mt-0.5 shrink-0" />
                <a href="tel:+41765811893" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  +41 76 581 1893
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="Mail" size={14} className="text-ocean mt-0.5 shrink-0" />
                <a href="mailto:info@mobywildlifetours.com" className="text-[13px] text-gray-400 hover:text-white transition-colors break-all">
                  info@mobywildlifetours.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="MapPin" size={14} className="text-ocean mt-0.5 shrink-0" />
                <span className="text-[13px] text-gray-400 leading-relaxed">
                  5702 Niederlenz<br />Switzerland
                </span>
              </li>
            </ul>

            <div className="space-y-1.5">
              {["About Us", "Our Team", "Our Partners", "Blog", "Q&A"].map((link) => (
                <div key={link}>
                  <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-600 text-center md:text-left">
            Moby Dick Tours GmbH, 5702 Niederlenz, Switzerland &nbsp;|&nbsp; +41 76 581 1893 &nbsp;|&nbsp; info@mobywildlifetours.com
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[12px] text-gray-600 hover:text-gray-400 transition-colors">
              Terms & Conditions
            </a>
            <span className="text-gray-800">·</span>
            <a href="#" className="text-[12px] text-gray-600 hover:text-gray-400 transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
