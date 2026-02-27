import { useState } from "react";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Yvonne Cremanns",
    country: "Germany",
    initials: "YC",
    quote:
      "I have now been on 3 trips with MWT (2 x Réunion, 1 x Timor) and it was always breathtaking! Professional guides, fantastic locations and many whale encounters that I will never forget! The guide and group spirit makes the trip even more special. I often try to find the right words to describe the experiences - but I often have the feeling that words are not enough. It's much better to experience it for yourself!!! :)",
  },
  {
    name: "Georg Fuchs",
    country: "Austria",
    initials: "GF",
    quote:
      "We spent two wonderful weeks on La Reunion. The second week was the highlight of our trip with Moby Wildlife Tours. Alex, our tour guide, organized everything perfectly. The focus was of course on humpback whale watching - above and below the water. Of course, it takes several attempts before you get to see the gentle giants up close, but then it is overwhelming and unforgettable! We didn't have to worry about anything, Alex took care of everything and was also very skilled at managing problems. This second week was not cheap but well worth the money!",
  },
  {
    name: "Leslie Chaney",
    country: "USA",
    initials: "LC",
    quote:
      "Our trip with Moby Wildlife to Timor Leste to see and swim with blue whales was an experience of a lifetime. We were so lucky to also see sperm whales, a large ray, and many dolphins. Alex and Kevin were amazing guides and every aspect of the trip was well planned. Alex captured every aspect of our adventure in photos both underwater and via drone so we could completely relax and enjoy the experience. We definitely recommend this trip and will for sure travel with this crew again, maybe a Tiger Safari next???",
  },
  {
    name: "Sabine Wirtz, PhD",
    country: "Switzerland",
    initials: "SW",
    quote:
      "An unforgettable trip to Timor Leste with Moby Wildlife Tours. Thanks to the whole team for countless encounters with the gentle giants of the sea. It is very fascinating to be so close to the migrating blue whales and to be able to follow them a little way on their journey south. The resident sperm whales were also spotted and it remains an indescribable feeling when you glide off the boat and encounter these animals. Simply fantastic. The whole stay was super organized, interesting conversations and good food with a view of the sea included!",
  },
  {
    name: "Cornelia Schmid",
    country: "Germany / Peru",
    initials: "CS",
    quote:
      "Being close to the humpback whales and experiencing an underwater encounter was almost unimaginable for me. With Moby Wildlife Tours, however, this dream came true. Alex took excellent care of the small tour group and we became a little family for this time. The great moments with the whales, the shared meals and excursions, including by helicopter, made us grow together. New friendships were formed. Not only were the boat trips and snorkeling a highlight, but the beautiful hotel with a garden right by the sea was also a perfect choice. Thank you very much for this wonderful experience.",
  },
];

const avatarColors = [
  "bg-ocean text-white",
  "bg-teal-700 text-white",
  "bg-cyan-700 text-white",
  "bg-slate-600 text-white",
  "bg-ocean/80 text-white",
];

const HomeTestimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-ocean/30" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-ocean">
              Reviews
            </span>
            <div className="h-px w-12 bg-ocean/30" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Guests Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_4px_32px_rgba(0,0,0,0.06)] p-8 lg:p-12 min-h-[280px]">
            <Icon name="Quote" size={36} className="text-ocean/15 mb-4" />

            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed mb-8">
              "{testimonials[active].quote}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[13px] shrink-0 ${avatarColors[active]}`}>
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-[14px]">
                    {testimonials[active].name}
                  </div>
                  <div className="text-[12px] text-gray-400 flex items-center gap-1 mt-0.5">
                    <Icon name="MapPin" size={11} />
                    {testimonials[active].country}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-amber-400" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-ocean hover:text-ocean transition-colors bg-white"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2.5 bg-ocean"
                      : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-ocean hover:text-ocean transition-colors bg-white"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-5 gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-xl p-3 text-center transition-all duration-200 border ${
                  i === active
                    ? "border-ocean/30 bg-ocean/5 shadow-[0_2px_8px_rgba(14,116,144,0.1)]"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[11px] mx-auto mb-1.5 ${avatarColors[i]}`}>
                  {t.initials}
                </div>
                <div className="text-[10px] font-medium text-gray-600 leading-tight line-clamp-2">
                  {t.name.split(",")[0]}
                </div>
                <div className="text-[9px] text-gray-400 mt-0.5">{t.country}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
