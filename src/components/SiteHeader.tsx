import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const seaToursWater = [
  "Swimming with Blue Whales in East Timor",
  "Swimming with Humpback Whales off La Reunion",
  "Swimming with Orcas & Humpback Whales in Norway",
  "Swimming with Humpback Whales in Tonga",
  "Whales & Leopards in Sri Lanka",
  "Swimming with Humpback Whales in the Dom. Rep.",
  "Whales & Fire in Vanuatu",
  "Humpback Whales & Whale Sharks in Mozambique",
  "Whale Sharks in St. Helena",
];

const seaToursBoat = [
  "Big Whales off the Azores",
  "Humpback Whale supergroups off South Africa",
  "Whales, Penguins and Sharks in South Africa",
  "Dolphins & Whales off Madeira",
  "Whales & Dolphins off La Gomera",
  "Humpback Whales in the Cape Verde Islands",
  "Dolphins & Whales off Tarifa, Spain",
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

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ocean flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">M</span>
            </div>
            <span className="font-serif font-semibold text-xl tracking-tight text-gray-900">
              Moby Wildlife Tours
            </span>
          </a>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-0.5">
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-ocean transition-colors cursor-pointer">
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-ocean transition-colors cursor-pointer">
                  Our Team
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-ocean transition-colors cursor-pointer">
                  Our Partners
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-ocean bg-transparent">
                  Sea Tours
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[540px] p-5">
                    <a className="block px-3 py-2 text-sm font-semibold text-ocean hover:bg-ocean-light rounded-md transition-colors cursor-pointer mb-3">
                      All Sea Tours
                    </a>
                    <div className="grid grid-cols-2 gap-x-8">
                      <div>
                        <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          In the water
                        </div>
                        {seaToursWater.map((tour) => (
                          <a
                            key={tour}
                            className="block px-3 py-1.5 text-[13px] text-gray-700 hover:text-ocean hover:bg-ocean-light rounded-md transition-colors cursor-pointer leading-snug"
                          >
                            {tour}
                          </a>
                        ))}
                      </div>
                      <div>
                        <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          On the boat
                        </div>
                        {seaToursBoat.map((tour) => (
                          <a
                            key={tour}
                            className="block px-3 py-1.5 text-[13px] text-gray-700 hover:text-ocean hover:bg-ocean-light rounded-md transition-colors cursor-pointer leading-snug"
                          >
                            {tour}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-ocean bg-transparent">
                  Land Tours
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] p-4">
                    <a className="block px-3 py-2 text-sm font-semibold text-ocean hover:bg-ocean-light rounded-md transition-colors cursor-pointer mb-1">
                      All Land Tours
                    </a>
                    {landTours.map((tour) => (
                      <a
                        key={tour}
                        className="block px-3 py-1.5 text-[13px] text-gray-700 hover:text-ocean hover:bg-ocean-light rounded-md transition-colors cursor-pointer leading-snug"
                      >
                        {tour}
                      </a>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-ocean transition-colors cursor-pointer">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-ocean transition-colors cursor-pointer">
                  Q&A
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-ocean transition-colors">
              <Icon name="Globe" size={16} />
              English
            </button>
            <Button className="bg-ocean hover:bg-ocean/90 text-white px-6 h-10 text-sm font-medium">
              Contact us
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {["About Us", "Our Team", "Our Partners", "Sea Tours", "Land Tours", "Blog", "Q&A"].map(
            (item) => (
              <a key={item} className="block text-base text-gray-700 hover:text-ocean cursor-pointer">
                {item}
              </a>
            )
          )}
          <Button className="w-full bg-ocean hover:bg-ocean/90 text-white mt-4">
            Contact us
          </Button>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
