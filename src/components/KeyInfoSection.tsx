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

interface FactRowProps {
  icon: string;
  label: string;
  children: React.ReactNode;
  last?: boolean;
}

const FactRow = ({ icon, label, children, last }: FactRowProps) => (
  <div className={`py-5 ${last ? "" : "border-b border-gray-100"}`}>
    <div className="flex items-start gap-3.5">
      <div className="w-9 h-9 rounded-xl bg-ocean-light flex items-center justify-center shrink-0 mt-0.5">
        <Icon name={icon} size={18} className="text-ocean" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400 mb-1.5">
          {label}
        </div>
        <div className="text-[14px] text-gray-700 leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

const BookingPanel = () => {
  const [datesOpen, setDatesOpen] = useState(false);

  return (
    <div className="lg:sticky lg:top-8">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="bg-ocean px-6 py-5">
          <div className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.08em] mb-1">
            Price per person
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[32px] font-bold text-white tracking-tight leading-none">
              EUR 4,390
            </span>
          </div>
          <div className="text-white/70 text-sm mt-1.5">in a double room</div>
          <div className="text-white/50 text-[13px] mt-1">Single room: + EUR 600</div>
        </div>

        <div className="p-6">
          <div className="mb-5">
            <button
              onClick={() => setDatesOpen(!datesOpen)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-gray-200 hover:border-ocean/30 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Icon name="CalendarDays" size={18} className="text-ocean" />
                <span className="text-sm font-medium text-gray-700">
                  {datesOpen ? "Hide dates" : "Select dates"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">10 departures</span>
                <Icon
                  name={datesOpen ? "ChevronUp" : "ChevronDown"}
                  size={16}
                  className="text-gray-400 group-hover:text-ocean transition-colors"
                />
              </div>
            </button>

            {datesOpen && (
              <div className="mt-3 rounded-xl bg-gray-50 border border-gray-100 p-4 space-y-4 animate-fade-in">
                {[
                  { year: "2026", dates: dates2026 },
                  { year: "2027", dates: dates2027 },
                ].map((group) => (
                  <div key={group.year}>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ocean mb-2">
                      {group.year}
                    </div>
                    <div className="space-y-1">
                      {group.dates.map((date, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white text-[12.5px] text-gray-600 border border-transparent hover:border-ocean/20 transition-colors cursor-pointer"
                        >
                          <Icon name="Calendar" size={13} className="text-ocean/50 shrink-0" />
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-[12px] text-gray-400 italic flex items-start gap-1.5 mb-6 leading-relaxed">
            <Icon name="Info" size={12} className="text-ocean/40 mt-0.5 shrink-0" />
            Additional dates for private tours available upon request
          </p>

          <Button className="w-full bg-ocean hover:bg-ocean/90 text-white h-12 text-sm font-semibold rounded-xl gap-2 shadow-[0_2px_12px_rgba(14,116,144,0.3)]">
            <Icon name="Mail" size={17} />
            Contact us
          </Button>

          <div className="flex items-center justify-center gap-4 mt-4 text-[12px] text-gray-400">
            <span className="flex items-center gap-1">
              <Icon name="Shield" size={12} className="text-ocean/40" />
              No commitment
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={12} className="text-ocean/40" />
              Quick reply
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const KeyInfoSection = () => {
  return (
    <section className="py-24 bg-white" id="key-info">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-9 bg-ocean rounded-full" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            In a Nutshell
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <FactRow icon="MapPin" label="Where">
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="text-ocean font-semibold text-[11px] uppercase tracking-wide mt-0.5 shrink-0 w-10">Start</span>
                  <span>On Sunday at the airport in Dili depending on arrival time</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ocean font-semibold text-[11px] uppercase tracking-wide mt-0.5 shrink-0 w-10">End</span>
                  <span>On the following Saturday after checkout</span>
                </div>
              </div>
            </FactRow>

            <FactRow icon="Users" label="Group">
              Maximum 8 people + guides
            </FactRow>

            <FactRow icon="MessageSquare" label="Accompaniment">
              English-speaking guide from Moby Wildlife Tours + local guide
            </FactRow>

            <FactRow icon="ListChecks" label="Included">
              Transportation, tours, accommodation, group meals, presentations about blue whales
            </FactRow>

            <FactRow icon="XCircle" label="Exclusive">
              Personal expenses, insurance, arrival and departure Dili
            </FactRow>

            <FactRow icon="Waves" label="Physical requirements">
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
            </FactRow>

            <FactRow icon="Info" label="Notes" last>
              This tour is intended for snorkelers and freedivers. No tank diving.
            </FactRow>
          </div>

          <div className="lg:col-span-5">
            <BookingPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfoSection;
