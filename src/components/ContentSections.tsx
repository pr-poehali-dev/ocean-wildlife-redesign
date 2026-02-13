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
    paragraphs: [
      "The trip to East Timor is a trip to the largest animals that have ever inhabited our planet. Being in the same element as a 25-meter-long blue whale is an incredible experience that cannot be properly described. Swimming with a blue whale has to be experienced to be believed!",
      "We take a small but comfortable boat directly from the capital Dili out onto the often mirror-smooth water every day to get close to the giants of the sea. Normally, we spend about 6 hours at sea. Before the wind often picks up in the late afternoon, we come back ashore to recover from our adventures at sea.",
      "During our time in Asia's youngest country, we are accommodated in a beautiful hotel right by the sea, just a few minutes from the jetty.",
      "We have also 1-2 smaller excursions planned for the later afternoons and evenings to introduce you to this exciting country and its cuisine.",
    ],
  },
  {
    id: "the-animals",
    icon: "Fish",
    title: "The Animals",
    paragraphs: [
      "The aim of this trip is to encounter the largest animal that has ever roamed our beautiful planet, the blue whale, in the water. Around 1,500 blue whales spend the southern winter in the Banda Sea to breed. To get to the feeding grounds in southern Australia, hundreds of animals use a current that runs southwest along the coast of East Timor every year. On a good day, we can observe up to 25 animals in small groups, sometimes just a few meters from the coast.",
      "Swimming with a blue whale is one of the most impressive things you can experience. These 25-metre-long colossi glide gently past us on their journey south.",
      "We also often see sperm whales, which live around the Indonesian islands all year round. When they appear off Dili, the largest toothed whales in the world often stay for a few days.",
      "There are also various species of dolphin (e.g. Borneo dolphins, bottlenose dolphins or spotted dolphins), as well as pilot whales and, rarely, orcas.",
      "Swimming with toothed whales and dolphins is a little more complicated than with the blue whales, as sperm whales in particular are still hunted in this region to this day and are correspondingly shy.",
      "Swimming with blue whales, on the other hand, is less difficult. The giants are not disturbed by us during their migration and often pass us by within a few meters.",
    ],
  },
  {
    id: "accommodation",
    icon: "Hotel",
    title: "Accommodation & Catering",
    paragraphs: [
      "Throughout our time in East Timor, we stay in one of the most beautiful hotels in East Timor, right on the coast of Dili. The rooms are pleasantly modern and also have air conditioning. The hotel also has a pool area and a small fitness studio.",
      "In the hotel's own restaurant, we enjoy a rich breakfast buffet every morning and occasionally also dinner.",
      "We also visit other selected restaurants in the evening to introduce you to Portuguese-Asian fusion cuisine.",
      "Lunch is taken at sea in the form of sandwiches and other cold dishes.",
    ],
  },
  {
    id: "daily-programme",
    icon: "Clock",
    title: "Daily Programme",
    paragraphs: [
      "Our day starts relatively early to make the most of the windless hours at sea. We arrive at the boats at around 8 a.m. to go in search of the giants of the sea.",
      "After a hopefully successful day, we return to land at around 2 pm. After a well-deserved break, we meet up at around 4 pm for a short excursion to a local attraction or a little later for a sundowner drink! We round off the day with a great dinner.",
    ],
  },
  {
    id: "equipment",
    icon: "Camera",
    title: "Equipment & Photography",
    paragraphs: [
      "East Timor has a tropical climate. The high temperatures invite us to wear short clothing. Even in the evening, short clothing is no problem, we recommend a polo shirt or a light shirt. Don't forget to pack suitable sun protection!",
      "We are happy to provide diving goggles, snorkels and fins for our excursions to the sea. However, we recommend that you bring your own equipment that you are used to. Swimming with whales is not scuba diving! If you wish you can free dive, but without a tank.",
      "Due to the pleasant water temperatures, a wetsuit is not necessary. However, we can also provide one if required.",
      "For photographers, we recommend lenses with a medium range above the water surface. Underwater, you can take excellent photos of blue whales with small lenses (up to 30mm). However, great photos and videos can also be taken with smaller cameras such as GoPros.",
    ],
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
                <AccordionContent className="pb-6 pl-14">
                  <div className="space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-[15px]">
                        {p}
                      </p>
                    ))}
                  </div>
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
