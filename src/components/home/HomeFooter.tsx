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
    <footer style={{ backgroundColor: "#001345" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#00468C] flex items-center justify-center shadow-[0_2px_8px_rgba(0,70,140,0.4)]">
                <Icon name="Waves" size={16} className="text-white" />
              </div>
              <div className="leading-none">
                <div className="font-serif text-[16px] font-bold text-white leading-tight">Moby Wildlife</div>
                <div className="text-[10px] font-semibold text-[#D7EBFF]/60 tracking-[0.18em] uppercase">Tours</div>
              </div>
            </div>

            <p className="text-[#D7EBFF]/50 text-[13px] leading-relaxed mb-6 max-w-[220px]">
              Unforgettable wildlife expeditions with small groups and passionate guides.
            </p>

            <div className="flex items-center gap-2">
              {[
                { icon: "Facebook" },
                { icon: "Instagram" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: "rgba(215,235,255,0.06)",
                    border: "1px solid rgba(215,235,255,0.10)",
                    color: "rgba(215,235,255,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#D7EBFF";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,70,140,0.6)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,70,140,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.45)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(215,235,255,0.10)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(215,235,255,0.06)";
                  }}
                >
                  <Icon name={s.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Sea Tours column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Waves" size={13} className="text-[#00468C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00468C]">
                Sea Tours
              </span>
            </div>
            <ul className="space-y-2">
              {seaTours.map((tour) => (
                <li key={tour}>
                  <a
                    href="#"
                    className="text-[13px] leading-snug transition-colors flex items-start gap-1.5"
                    style={{ color: "rgba(215,235,255,0.50)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7EBFF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.50)")}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00468C]/60 mt-1.5 shrink-0" />
                    {tour}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-[13px] font-semibold flex items-center gap-1 mt-1 transition-colors"
                  style={{ color: "#00468C" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7EBFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#00468C")}
                >
                  All Sea Tours <Icon name="ArrowRight" size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Land Tours column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="TreePine" size={13} className="text-[#166534]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#166534]">
                Land Tours
              </span>
            </div>
            <ul className="space-y-2">
              {landTours.map((tour) => (
                <li key={tour}>
                  <a
                    href="#"
                    className="text-[13px] leading-snug transition-colors flex items-start gap-1.5"
                    style={{ color: "rgba(215,235,255,0.50)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7EBFF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.50)")}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#166534]/70 mt-1.5 shrink-0" />
                    {tour}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-[13px] font-semibold flex items-center gap-1 mt-1 transition-colors"
                  style={{ color: "#166534" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7EBFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#166534")}
                >
                  All Land Tours <Icon name="ArrowRight" size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D7EBFF]/40 block mb-4">
              Contact
            </span>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <Icon name="Phone" size={13} className="text-[#00468C] mt-0.5 shrink-0" />
                <a
                  href="tel:+41765811893"
                  className="text-[13px] transition-colors"
                  style={{ color: "rgba(215,235,255,0.55)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7EBFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.55)")}
                >
                  +41 76 581 1893
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="Mail" size={13} className="text-[#00468C] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@mobywildlifetours.com"
                  className="text-[13px] transition-colors break-all"
                  style={{ color: "rgba(215,235,255,0.55)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7EBFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.55)")}
                >
                  info@mobywildlifetours.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="MapPin" size={13} className="text-[#00468C] mt-0.5 shrink-0" />
                <span className="text-[13px] leading-relaxed" style={{ color: "rgba(215,235,255,0.55)" }}>
                  5702 Niederlenz<br />Switzerland
                </span>
              </li>
            </ul>

            <div className="space-y-1.5">
              {["About Us", "Our Team", "Our Partners", "Blog", "Q&A"].map((link) => (
                <div key={link}>
                  <a
                    href="#"
                    className="text-[13px] transition-colors"
                    style={{ color: "rgba(215,235,255,0.45)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7EBFF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.45)")}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(215,235,255,0.08)" }}
        >
          <p className="text-[12px] text-center md:text-left" style={{ color: "rgba(215,235,255,0.25)" }}>
            Moby Dick Tours GmbH, 5702 Niederlenz, Switzerland &nbsp;·&nbsp; +41 76 581 1893 &nbsp;·&nbsp; info@mobywildlifetours.com
          </p>
          <div className="flex items-center gap-4">
            {["Terms & Conditions", "Imprint"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] transition-colors"
                style={{ color: "rgba(215,235,255,0.28)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.70)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(215,235,255,0.28)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
