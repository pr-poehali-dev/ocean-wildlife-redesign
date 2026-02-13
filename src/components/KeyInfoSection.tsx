import { useState } from "react";
import Icon from "@/components/ui/icon";

const dates2026 = [
  { label: "Sun, Oct 18 – Sat, Oct 24, 2026" },
  { label: "Sun, Oct 25 – Sat, Oct 31, 2026" },
  { label: "Sun, Nov 1 – Sat, Nov 7, 2026" },
  { label: "Sun, Nov 8 – Sat, Nov 14, 2026" },
  { label: "Sun, Nov 15 – Sat, Nov 21, 2026" },
];

const dates2027 = [
  { label: "Sun, Oct 17 – Sat, Oct 23, 2027" },
  { label: "Sun, Oct 24 – Sat, Oct 30, 2027" },
  { label: "Sun, Oct 31 – Sat, Nov 6, 2027" },
  { label: "Sun, Nov 7 – Sat, Nov 13, 2027" },
  { label: "Sun, Nov 14 – Sat, Nov 20, 2027" },
];

interface InfoCardProps {
  icon: string;
  label: string;
  children: React.ReactNode;
}

const InfoCard = ({ icon, label, children }: InfoCardProps) => (
  <div className="group p-6 rounded-xl border border-gray-100 hover:border-ocean/20 hover:shadow-sm transition-all bg-white">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-ocean-light flex items-center justify-center shrink-0">
        <Icon name={icon} size={20} className="text-ocean" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
          {label}
        </div>
        <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

const DateGroup = ({
  year,
  dates,
}: {
  year: string;
  dates: { label: string }[];
}) => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? dates : dates.slice(0, 2);

  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
        {year}
      </div>
      <div className="space-y-2">
        {visible.map((d, i) => (
          <div
            key={i}
            className="flex items-center py-2 px-3 rounded-lg bg-gray-50 text-sm"
          >
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={14} className="text-ocean" />
              <span className="text-gray-800 font-medium">{d.label}</span>
            </div>
          </div>
        ))}
      </div>
      {dates.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-ocean text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <Icon name={showAll ? "ChevronUp" : "ChevronDown"} size={14} />
          {showAll ? "Show less" : `Show all dates (${dates.length})`}
        </button>
      )}
    </div>
  );
};

const KeyInfoSection = () => {
  return (
    <section className="py-20 bg-white" id="key-info">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-ocean rounded-full" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            In a Nutshell
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl border border-gray-100 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-ocean-light flex items-center justify-center shrink-0">
                <Icon name="CalendarDays" size={20} className="text-ocean" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  When
                </div>
                <div className="space-y-5">
                  <DateGroup year="2026" dates={dates2026} />
                  <DateGroup year="2027" dates={dates2027} />
                </div>
                <p className="mt-4 text-xs text-gray-500 italic flex items-center gap-1.5">
                  <Icon name="Info" size={12} />
                  Additional dates for private tours available upon request
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <InfoCard icon="MapPin" label="Where">
              <p>Start: On Sunday at the airport in Dili depending on arrival time</p>
              <p className="mt-1">End: On the following Saturday after checkout</p>
            </InfoCard>
            <InfoCard icon="Users" label="Group">
              Maximum 8 people + guides
            </InfoCard>
            <InfoCard icon="Shield" label="Accompaniment">
              English-speaking guide from Moby Wildlife Tours + local guide
            </InfoCard>
          </div>

          <InfoCard icon="Wallet" label="Costs">
            <p>EUR 4,390 per person in a double room</p>
            <p className="mt-1">Single room: + EUR 600</p>
          </InfoCard>

          <InfoCard icon="CheckCircle" label="Included">
            Transportation, tours, accommodation, group meals, presentations about blue whales
          </InfoCard>

          <InfoCard icon="Star" label="Exclusive">
            Personal expenses, insurance, arrival and departure Dili
          </InfoCard>

          <InfoCard icon="Activity" label="Physical requirements">
            <ul className="space-y-1">
              <li>Be able to swim 100 meters with fins, mask and snorkel</li>
              <li>Be able to lift yourself out of the water on a ladder</li>
              <li>Dietary intolerances and intolerances can be taken into consideration</li>
            </ul>
          </InfoCard>

          <div className="lg:col-span-2">
            <InfoCard icon="FileText" label="Notes">
              This tour is intended for snorkelers and freedivers. No tank diving.
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfoSection;
