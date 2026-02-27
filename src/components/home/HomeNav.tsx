import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const seaTours = [
  { category: "In the water", items: [
    "Swimming with Blue Whales in East Timor",
    "Swimming with Humpback Whales off La Réunion",
    "Swimming with Orcas & Humpback Whales in Norway",
    "Swimming with Humpback Whales in Tonga",
    "Whales & Leopards in Sri Lanka",
    "Swimming with Humpback Whales in the Dom. Rep.",
    "Whales & Fire in Vanuatu",
    "Humpback Whales & Whale Sharks in Mozambique",
    "Whale Sharks in St. Helena",
  ]},
  { category: "On the boat", items: [
    "Big Whales off the Azores",
    "Humpback Whale supergroups off South Africa",
    "Whales, Penguins and Sharks in South Africa",
    "Dolphins & Whales off Madeira",
    "Whales & Dolphins off La Gomera",
    "Humpback Whales in the Cape Verde Islands",
    "Dolphins & Whales off Tarifa, Spain",
  ]},
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center">
              <Icon name="Waves" size={16} className="text-white" />
            </div>
            <span className="font-serif text-lg font-bold text-gray-900 leading-none">
              Moby Wildlife<br />
              <span className="text-[11px] font-sans font-medium text-ocean tracking-widest uppercase">Tours</span>
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-1">
            {["About Us", "Our Team", "Our Partners"].map((item) => (
              <a key={item} href="#" className="px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-ocean transition-colors rounded-lg hover:bg-gray-50">
                {item}
              </a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("sea")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-ocean transition-colors rounded-lg hover:bg-gray-50">
                Sea Tours <Icon name="ChevronDown" size={14} />
              </button>
              {activeMenu === "sea" && (
                <div className="absolute top-full left-0 mt-1 w-[680px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-6 grid grid-cols-2 gap-6">
                  <a href="#" className="col-span-2 text-[12px] font-semibold uppercase tracking-widest text-ocean hover:underline mb-1">All Sea Tours →</a>
                  {seaTours.map((group) => (
                    <div key={group.category}>
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">{group.category}</div>
                      <ul className="space-y-1">
                        {group.items.map((tour) => (
                          <li key={tour}>
                            <a href="#" className="text-[13px] text-gray-700 hover:text-ocean transition-colors flex items-center gap-1.5 py-0.5">
                              <span className="w-1 h-1 rounded-full bg-ocean/30 shrink-0" />
                              {tour}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("land")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-ocean transition-colors rounded-lg hover:bg-gray-50">
                Land Tours <Icon name="ChevronDown" size={14} />
              </button>
              {activeMenu === "land" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-5">
                  <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-ocean hover:underline block mb-3">All Land Tours →</a>
                  <ul className="space-y-1">
                    {landTours.map((tour) => (
                      <li key={tour}>
                        <a href="#" className="text-[13px] text-gray-700 hover:text-ocean transition-colors flex items-center gap-1.5 py-0.5">
                          <span className="w-1 h-1 rounded-full bg-ocean/30 shrink-0" />
                          {tour}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {["Blog", "Q&A"].map((item) => (
              <a key={item} href="#" className="px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-ocean transition-colors rounded-lg hover:bg-gray-50">
                {item}
              </a>
            ))}

            <a href="#" className="px-3 py-2 text-[13px] font-medium text-gray-400 hover:text-gray-600 transition-colors">
              Deutsch
            </a>

            <div className="flex items-center gap-1 ml-2">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-ocean hover:bg-gray-50 transition-colors">
                <Icon name="Facebook" size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-ocean hover:bg-gray-50 transition-colors">
                <Icon name="Instagram" size={16} />
              </a>
            </div>

            <Button className="ml-2 bg-ocean hover:bg-ocean/90 text-white h-9 px-4 text-[13px] font-semibold rounded-xl">
              Contact us
            </Button>
          </nav>

          <button
            className="xl:hidden p-2 text-gray-600 hover:text-ocean"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {["About Us", "Our Team", "Our Partners", "Sea Tours", "Land Tours", "Blog", "Q&A"].map((item) => (
            <a key={item} href="#" className="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-50">
              {item}
            </a>
          ))}
          <Button className="w-full mt-3 bg-ocean hover:bg-ocean/90 text-white">Contact us</Button>
        </div>
      )}
    </header>
  );
};

export default HomeNav;
