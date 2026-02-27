import { useState } from "react";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Yvonne Cremanns",
    country: "Germany",
    initials: "YC",
    tour: "La Réunion & East Timor",
    quote:
      "I have now been on 3 trips with MWT (2 × Réunion, 1 × Timor) and it was always breathtaking! Professional guides, fantastic locations and many whale encounters that I will never forget! I often try to find the right words to describe the experiences — but words are simply not enough. It's much better to experience it for yourself!",
  },
  {
    name: "Georg Fuchs",
    country: "Austria",
    initials: "GF",
    tour: "La Réunion",
    quote:
      "We spent two wonderful weeks on La Réunion. Alex organized everything perfectly. The focus was on humpback whale watching — above and below the water. When you finally get to see the gentle giants up close, it is overwhelming and unforgettable. This trip was not cheap but well worth every cent.",
  },
  {
    name: "Leslie Chaney",
    country: "USA",
    initials: "LC",
    tour: "East Timor",
    quote:
      "Our trip with Moby Wildlife to Timor Leste to swim with blue whales was an experience of a lifetime. We also saw sperm whales, a large ray, and many dolphins. Alex captured every moment in photos and via drone so we could completely relax and enjoy. We will for sure travel with this crew again.",
  },
  {
    name: "Sabine Wirtz, PhD",
    country: "Switzerland",
    initials: "SW",
    tour: "East Timor",
    quote:
      "An unforgettable trip to Timor Leste. Thanks to the whole team for countless encounters with the gentle giants of the sea. It remains an indescribable feeling when you glide off the boat and encounter these animals. The whole stay was super organized with interesting conversations and good food with a view of the sea.",
  },
  {
    name: "Cornelia Schmid",
    country: "Germany / Peru",
    initials: "CS",
    tour: "La Réunion",
    quote:
      "Being close to the humpback whales and experiencing an underwater encounter was almost unimaginable for me — with Moby Wildlife this dream came true. Alex took excellent care of our small tour group and we became a little family. New friendships were formed. Thank you very much for this wonderful experience.",
  },
];

const HomeTestimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const avatarBg = ["#00468C", "#003A78", "#001345", "#0A5878", "#00468C"];

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#00468C]/20" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00468C]">
              Guest Reviews
            </span>
            <div className="h-px w-10 bg-[#00468C]/20" />
          </div>
          <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#001345]">
            What Our Guests Say
          </h2>
          <p className="text-[#4F5C71] text-[15px] mt-3 max-w-[400px] mx-auto">
            Real experiences from real expeditions.
          </p>
        </div>

        <div className="max-w-[860px] mx-auto">

          {/* Main testimonial card */}
          <div className="relative bg-[#F2F8FD] rounded-3xl border border-[#001345]/6 shadow-[0_4px_32px_rgba(0,19,69,0.05)] p-8 lg:p-12">

            {/* Large quote mark */}
            <div
              className="absolute top-8 right-10 font-serif text-[120px] leading-none font-bold select-none pointer-events-none"
              style={{ color: "rgba(0,70,140,0.06)" }}
            >
              "
            </div>

            {/* Tour tag */}
            <div className="inline-flex items-center gap-1.5 bg-[#EBF3FC] rounded-full px-3 py-1 mb-6">
              <Icon name="Waves" size={11} className="text-[#00468C]" />
              <span className="text-[11px] font-semibold text-[#00468C]">
                {testimonials[active].tour}
              </span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={15} className="text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-[#001345] text-[16px] lg:text-[17px] leading-[1.75] mb-8 font-medium relative z-10">
              "{testimonials[active].quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[13px] text-white shrink-0 shadow-md"
                style={{ backgroundColor: avatarBg[active] }}
              >
                {testimonials[active].initials}
              </div>
              <div>
                <div className="font-semibold text-[#001345] text-[14px]">
                  {testimonials[active].name}
                </div>
                <div className="text-[12px] text-[#4F5C71] flex items-center gap-1 mt-0.5">
                  <Icon name="MapPin" size={11} className="text-[#00468C]" />
                  {testimonials[active].country}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation row */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#001345]/12 bg-white flex items-center justify-center text-[#4F5C71] hover:border-[#00468C] hover:text-[#00468C] transition-all shadow-[0_1px_4px_rgba(0,19,69,0.06)]"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    backgroundColor: i === active ? "#00468C" : "#CBD5E1",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#001345]/12 bg-white flex items-center justify-center text-[#4F5C71] hover:border-[#00468C] hover:text-[#00468C] transition-all shadow-[0_1px_4px_rgba(0,19,69,0.06)]"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-8 grid grid-cols-5 gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-xl p-3 text-center transition-all duration-200 border bg-white"
                style={
                  i === active
                    ? {
                        borderColor: "#00468C",
                        boxShadow: "0 0 0 3px rgba(0,70,140,0.12)",
                      }
                    : { borderColor: "rgba(0,19,69,0.08)" }
                }
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[11px] text-white mx-auto mb-1.5"
                  style={{ backgroundColor: avatarBg[i] }}
                >
                  {t.initials}
                </div>
                <div className="text-[11px] font-semibold text-[#001345] leading-tight line-clamp-1">
                  {t.name.split(",")[0].split(" ")[0]}
                </div>
                <div className="text-[10px] text-[#4F5C71] mt-0.5">{t.country.split(" /")[0]}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
