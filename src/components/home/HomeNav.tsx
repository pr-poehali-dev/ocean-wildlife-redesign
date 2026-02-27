import { useState } from "react";
import Icon from "@/components/ui/icon";

const seaTours = [
  {
    category: "In the water",
    items: [
      "Swimming with Blue Whales in East Timor",
      "Swimming with Humpback Whales off La Réunion",
      "Swimming with Orcas & Humpback Whales in Norway",
      "Swimming with Humpback Whales in Tonga",
      "Whales & Leopards in Sri Lanka",
      "Swimming with Humpback Whales in the Dom. Rep.",
      "Whales & Fire in Vanuatu",
      "Humpback Whales & Whale Sharks in Mozambique",
      "Whale Sharks in St. Helena",
    ],
  },
  {
    category: "On the boat",
    items: [
      "Big Whales off the Azores",
      "Humpback Whale supergroups off South Africa",
      "Whales, Penguins and Sharks in South Africa",
      "Dolphins & Whales off Madeira",
      "Whales & Dolphins off La Gomera",
      "Humpback Whales in the Cape Verde Islands",
      "Dolphins & Whales off Tarifa, Spain",
    ],
  },
];

const landTours = [
  "Brown Bears in Slovenia",
  "Tigers, Leopards & Co. in India",
  "Bears, Wolves & Owls in Finland",
  "Orangutans in Sumatra",
  "Lynx, Vultures & Co. in Spain",
  "Owls & Migratory Birds in England",
  "Ibexes, beavers & co. in Switzerland",
  "Gorillas, Chimpanzees & Safari in Uganda",
];

const HomeNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_0_rgba(0,19,69,0.06)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-full bg-[#00468C] flex items-center justify-center shadow-[0_2px_8px_rgba(0,70,140,0.25)]">
              <Icon name="Waves" size={17} className="text-white" />
            </div>
            <div className="leading-none">
              <div className="font-serif text-[17px] font-bold text-[#001345] leading-tight">Moby Wildlife</div>
              <div className="text-[10px] font-semibold text-[#00468C] tracking-[0.18em] uppercase">Tours</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {["About Us", "Our Team", "Our Partners"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3.5 py-2 text-[13px] font-medium text-[#4F5C71] hover:text-[#00468C] transition-colors rounded-lg hover:bg-[#F2F8FD]"
              >
                {item}
              </a>
            ))}

            {/* Sea Tours dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("sea")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                  activeMenu === "sea"
                    ? "text-[#00468C] bg-[#F2F8FD]"
                    : "text-[#4F5C71] hover:text-[#00468C] hover:bg-[#F2F8FD]"
                }`}
              >
                <Icon name="Waves" size={14} className="text-[#00468C]" />
                Sea Tours
                <Icon name="ChevronDown" size={13} className={`transition-transform ${activeMenu === "sea" ? "rotate-180" : ""}`} />
              </button>
              {activeMenu === "sea" && (
                <div className="absolute top-full left-0 mt-1.5 w-[700px] bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,19,69,0.12)] border border-slate-100 p-6">
                  <a href="#" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#00468C] hover:text-[#001345] mb-4 transition-colors">
                    All Sea Tours <Icon name="ArrowRight" size={12} />
                  </a>
                  <div className="grid grid-cols-2 gap-6">
                    {seaTours.map((group) => (
                      <div key={group.category}>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">{group.category}</div>
                        <ul className="space-y-0.5">
                          {group.items.map((tour) => (
                            <li key={tour}>
                              <a
                                href="#"
                                className="text-[13px] text-[#4F5C71] hover:text-[#00468C] transition-colors flex items-center gap-2 py-1 group/item"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#00468C]/25 group-hover/item:bg-[#00468C] transition-colors shrink-0" />
                                {tour}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Land Tours dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("land")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                  activeMenu === "land"
                    ? "text-[#166534] bg-[#F7FDF2]"
                    : "text-[#4F5C71] hover:text-[#166534] hover:bg-[#F7FDF2]"
                }`}
              >
                <Icon name="TreePine" size={14} className="text-[#166534]" />
                Land Tours
                <Icon name="ChevronDown" size={13} className={`transition-transform ${activeMenu === "land" ? "rotate-180" : ""}`} />
              </button>
              {activeMenu === "land" && (
                <div className="absolute top-full left-0 mt-1.5 w-72 bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,19,69,0.12)] border border-slate-100 p-5">
                  <a href="#" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#166534] hover:text-[#003610] mb-3.5 transition-colors">
                    All Land Tours <Icon name="ArrowRight" size={12} />
                  </a>
                  <ul className="space-y-0.5">
                    {landTours.map((tour) => (
                      <li key={tour}>
                        <a
                          href="#"
                          className="text-[13px] text-[#4F5C71] hover:text-[#166534] transition-colors flex items-center gap-2 py-1 group/item"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#166534]/25 group-hover/item:bg-[#166534] transition-colors shrink-0" />
                          {tour}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {["Blog", "Q&A"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3.5 py-2 text-[13px] font-medium text-[#4F5C71] hover:text-[#00468C] transition-colors rounded-lg hover:bg-[#F2F8FD]"
              >
                {item}
              </a>
            ))}

            <div className="w-px h-5 bg-slate-200 mx-1" />

            <a href="#" className="px-3 py-2 text-[12px] font-medium text-slate-400 hover:text-[#001345] transition-colors">
              DE
            </a>

            <div className="flex items-center gap-0.5 ml-1">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#00468C] hover:bg-[#F2F8FD] transition-colors">
                <Icon name="Facebook" size={15} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#00468C] hover:bg-[#F2F8FD] transition-colors">
                <Icon name="Instagram" size={15} />
              </a>
            </div>

            <a
              href="#"
              className="ml-2 inline-flex items-center gap-1.5 h-9 px-5 bg-[#00468C] hover:bg-[#001345] text-white text-[13px] font-semibold rounded-xl shadow-[0_2px_12px_rgba(0,70,140,0.3)] transition-all"
            >
              <Icon name="Phone" size={13} />
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 text-[#4F5C71] hover:text-[#00468C] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {[
            { label: "About Us" },
            { label: "Our Team" },
            { label: "Our Partners" },
            { label: "Sea Tours", color: "#00468C" },
            { label: "Land Tours", color: "#166534" },
            { label: "Blog" },
            { label: "Q&A" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-2 py-2.5 text-[14px] font-medium text-[#001345] border-b border-slate-50"
            >
              {item.color && (
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
              )}
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="flex items-center justify-center gap-2 mt-3 h-11 bg-[#00468C] text-white text-[14px] font-semibold rounded-xl"
          >
            <Icon name="Phone" size={15} />
            Contact us
          </a>
        </div>
      )}
    </header>
  );
};

export default HomeNav;
