import Icon from "@/components/ui/icon";

const SiteFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-ocean flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">M</span>
              </div>
              <span className="font-serif font-semibold text-xl tracking-tight">
                Moby Wildlife Tours
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Premium wildlife expeditions connecting people with the ocean's most magnificent creatures.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Tours
            </div>
            <div className="space-y-2.5">
              {["All Sea Tours", "In the water", "On the boat", "All Land Tours"].map(
                (item) => (
                  <a
                    key={item}
                    className="block text-sm text-gray-400 hover:text-ocean transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Company
            </div>
            <div className="space-y-2.5">
              {["About Us", "Our Team", "Our Partners", "Blog", "Q&A"].map(
                (item) => (
                  <a
                    key={item}
                    className="block text-sm text-gray-400 hover:text-ocean transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a className="hover:text-gray-300 transition-colors cursor-pointer">
                Terms & Conditions
              </a>
              <a className="hover:text-gray-300 transition-colors cursor-pointer">
                Imprint
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Icon name="Phone" size={14} />
                <span>+49 123 456 7890</span>
              </div>
              <span className="text-gray-700">|</span>
              <div className="flex items-center gap-1.5">
                <Icon name="Mail" size={14} />
                <span>info@mobywildlifetours.com</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              &copy; 2026 Moby Wildlife Tours GmbH
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
