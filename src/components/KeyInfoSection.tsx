import { useState } from "react";
import Icon from "@/components/ui/icon";

const dates2026 = [
  { label: "Oct 12 – Oct 22, 2026", spots: "3 spots left" },
  { label: "Nov 2 – Nov 12, 2026", spots: "5 spots left" },
  { label: "Nov 23 – Dec 3, 2026", spots: "Available" },
  { label: "Dec 14 – Dec 24, 2026", spots: "Available" },
];

const dates2027 = [
  { label: "Jan 10 – Jan 20, 2027", spots: "Available" },
  { label: "Feb 1 – Feb 11, 2027", spots: "Available" },
  { label: "Mar 5 – Mar 15, 2027", spots: "Available" },
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
  dates: { label: string; spots: string }[];
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
            className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-50 text-sm"
          >
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={14} className="text-ocean" />
              <span className="text-gray-800 font-medium">{d.label}</span>
            </div>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                d.spots.includes("left")
                  ? "bg-amber-50 text-amber-700"
                  : "bg-green-50 text-green-700"
              }`}
            >
              {d.spots}
            </span>
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
              East Timor (Timor-Leste)
            </InfoCard>
            <InfoCard icon="Users" label="Group">
              Max. 8 participants per expedition
            </InfoCard>
            <InfoCard icon="Shield" label="Accompaniment">
              Expert marine biologist + local guides
            </InfoCard>
          </div>

          <InfoCard icon="Wallet" label="Costs">
            Starting from €4,950 per person
          </InfoCard>

          <InfoCard icon="CheckCircle" label="Included">
            Accommodation, meals, boat transfers, equipment, guide
          </InfoCard>

          <InfoCard icon="Star" label="Exclusive">
            Private whale encounters, underwater photography session
          </InfoCard>

          <InfoCard icon="Activity" label="Physical requirements">
            Good swimming ability, basic snorkeling experience
          </InfoCard>

          <div className="lg:col-span-2">
            <InfoCard icon="FileText" label="Notes">
              Weather-dependent schedule. Minimum age 16 years. Travel insurance required.
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfoSection;
