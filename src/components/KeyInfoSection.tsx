import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const dates2026 = [
  "Sunday, October 18, 2026 - Saturday, October 24, 2026",
  "Sunday, October 25, 2026 - Saturday, October 31, 2026",
  "Sunday, November 1, 2026 - Saturday, November 7, 2026",
  "Sunday, November 8, 2026 - Saturday, November 14, 2026",
  "Sunday, November 15, 2026 - Saturday, November 21, 2026",
];

const dates2027 = [
  "Sunday, October 17, 2027 - Saturday, October 23, 2027",
  "Sunday, October 24, 2027 - Saturday, October 30, 2027",
  "Sunday, October 31, 2027 - Saturday, November 6, 2027",
  "Sunday, November 7, 2027 - Saturday, November 13, 2027",
  "Sunday, November 14, 2027 - Saturday, November 20, 2027",
];

interface SummaryCardProps {
  icon: string;
  label: string;
  children: React.ReactNode;
}

const SummaryCard = ({ icon, label, children }: SummaryCardProps) => (
  <div className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-ocean/15 hover:shadow-[0_2px_16px_rgba(14,116,144,0.06)] transition-all duration-300 flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 rounded-xl bg-ocean-light flex items-center justify-center shrink-0">
        <Icon name={icon} size={18} className="text-ocean" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
        {label}
      </span>
    </div>
    <div className="flex-1">{children}</div>
  </div>
);

interface DetailCardProps {
  icon: string;
  label: string;
  children: React.ReactNode;
}

const DetailCard = ({ icon, label, children }: DetailCardProps) => (
  <div className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-ocean/15 hover:shadow-[0_2px_16px_rgba(14,116,144,0.06)] transition-all duration-300">
    <div className="flex items-start gap-3.5">
      <div className="w-9 h-9 rounded-xl bg-ocean-light flex items-center justify-center shrink-0 mt-0.5">
        <Icon name={icon} size={18} className="text-ocean" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400 mb-2">
          {label}
        </div>
        <div className="text-[14px] text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

const DatesAccordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:col-span-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 rounded-2xl border border-gray-100 bg-white hover:border-ocean/15 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-ocean-light flex items-center justify-center shrink-0">
            <Icon name="CalendarRange" size={18} className="text-ocean" />
          </div>
          <span className="text-sm font-semibold text-gray-800">
            All dates
          </span>
          <span className="text-xs text-gray-400 font-medium">
            10 departures across 2026 & 2027
          </span>
        </div>
        <Icon
          name={open ? "ChevronUp" : "ChevronDown"}
          size={18}
          className="text-gray-400 group-hover:text-ocean transition-colors"
        />
      </button>

      {open && (
        <div className="mt-2 px-5 py-5 rounded-2xl border border-ocean/10 bg-ocean-light/40 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { year: "2026", dates: dates2026 },
              { year: "2027", dates: dates2027 },
            ].map((group) => (
              <div key={group.year}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ocean mb-3">
                  {group.year}
                </div>
                <div className="space-y-1.5">
                  {group.dates.map((date, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-white/80 text-[13px] text-gray-700"
                    >
                      <Icon name="Calendar" size={14} className="text-ocean/60 shrink-0" />
                      {date}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-gray-500 italic flex items-center gap-1.5">
            <Icon name="Info" size={12} className="text-ocean/50" />
            Additional dates for private tours available upon request
          </p>
        </div>
      )}
    </div>
  );
};

const KeyInfoSection = () => {
  return (
    <section className="py-24 bg-white" id="key-info">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-14">
          <div className="w-1 h-9 bg-ocean rounded-full" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            In a Nutshell
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <SummaryCard icon="CalendarDays" label="Dates">
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              Oct – Nov 2026
            </div>
            <div className="text-sm text-gray-500 mt-1 mb-3">5 departures</div>
            <button
              onClick={() => {
                const el = document.getElementById("dates-accordion");
                el?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="text-ocean text-sm font-medium flex items-center gap-1 hover:underline underline-offset-4"
            >
              View all dates
              <Icon name="ArrowDown" size={14} />
            </button>
          </SummaryCard>

          <SummaryCard icon="Tag" label="Price">
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              EUR 4,390
            </div>
            <div className="text-sm text-gray-500 mt-1">per person in a double room</div>
            <div className="text-[13px] text-gray-400 mt-1.5">
              Single room: + EUR 600
            </div>
          </SummaryCard>

          <SummaryCard icon="Users" label="Group">
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              Maximum 8
            </div>
            <div className="text-sm text-gray-500 mt-1">people + guides</div>
          </SummaryCard>

          <SummaryCard icon="Plane" label="Start / End">
            <div className="space-y-2.5 text-[13px] text-gray-600 leading-snug">
              <div className="flex items-start gap-2">
                <span className="text-ocean font-semibold text-[11px] uppercase tracking-wide mt-0.5 shrink-0">Start</span>
                <span>On Sunday at the airport in Dili depending on arrival time</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-ocean font-semibold text-[11px] uppercase tracking-wide mt-0.5 shrink-0">End</span>
                <span>On the following Saturday after checkout</span>
              </div>
            </div>
          </SummaryCard>
        </div>

        <div id="dates-accordion" className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
          <DatesAccordion />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="space-y-4">
            <DetailCard icon="MessageSquare" label="Accompaniment">
              English-speaking guide from Moby Wildlife Tours + local guide
            </DetailCard>
            <DetailCard icon="ListChecks" label="Included">
              Transportation, tours, accommodation, group meals, presentations about blue whales
            </DetailCard>
          </div>

          <div className="space-y-4">
            <DetailCard icon="XCircle" label="Exclusive">
              Personal expenses, insurance, arrival and departure Dili
            </DetailCard>
            <DetailCard icon="Waves" label="Physical requirements">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={14} className="text-ocean mt-0.5 shrink-0" />
                  <span>Be able to swim 100 meters with fins, mask and snorkel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={14} className="text-ocean mt-0.5 shrink-0" />
                  <span>Be able to lift yourself out of the water on a ladder</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={14} className="text-ocean mt-0.5 shrink-0" />
                  <span>Dietary intolerances and intolerances can be taken into consideration.</span>
                </li>
              </ul>
            </DetailCard>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DetailCard icon="Info" label="Notes">
            This tour is intended for snorkelers and freedivers. No tank diving.
          </DetailCard>
          <div className="flex items-center justify-end">
            <Button className="bg-ocean hover:bg-ocean/90 text-white h-12 px-8 text-sm font-medium rounded-xl gap-2">
              <Icon name="Mail" size={16} />
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfoSection;
