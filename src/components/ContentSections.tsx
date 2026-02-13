import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sections = [
  {
    id: "the-trip",
    icon: "Compass",
    title: "The Trip",
    content:
      "Detailed itinerary and expedition overview will be displayed here. Day-by-day breakdown of the journey from arrival to departure.",
  },
  {
    id: "the-animals",
    icon: "Fish",
    title: "The Animals",
    content:
      "Information about Blue whales, Sperm whales, and other marine wildlife you may encounter during the expedition.",
  },
  {
    id: "accommodation",
    icon: "Hotel",
    title: "Accommodation & Catering",
    content:
      "Details about lodging facilities, meal plans, dietary accommodations, and the overall comfort experience on-site.",
  },
  {
    id: "daily-programme",
    icon: "Clock",
    title: "Daily Programme",
    content:
      "Typical daily schedule from morning briefings to evening activities. Times are approximate and weather-dependent.",
  },
  {
    id: "equipment",
    icon: "Camera",
    title: "Equipment & Photography",
    content:
      "Recommended gear, what we provide, underwater camera rental options, and photography tips for whale encounters.",
  },
];

const ContentSections = () => {
  return (
    <section className="py-20 bg-gray-50/50" id="details">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-ocean rounded-full" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Tour Details
          </h2>
        </div>

        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="space-y-3">
            {sections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="bg-white rounded-xl border border-gray-100 px-6 overflow-hidden data-[state=open]:border-ocean/20 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="py-5 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean-light flex items-center justify-center shrink-0 group-hover:bg-ocean/10 transition-colors">
                      <Icon
                        name={section.icon}
                        size={20}
                        className="text-ocean"
                      />
                    </div>
                    <span className="text-lg font-semibold text-gray-900 text-left">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 text-gray-600 leading-relaxed">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContentSections;
