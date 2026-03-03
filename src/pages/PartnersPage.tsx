import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";
import Icon from "@/components/ui/icon";

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="aspect-[4/3] rounded-2xl bg-[#EBF3FC] border border-[#001345]/8 flex flex-col items-center justify-center gap-2 overflow-hidden">
    <div className="w-10 h-10 rounded-full bg-[#D7EBFF] flex items-center justify-center">
      <Icon name="Image" size={20} className="text-[#00468C]" />
    </div>
    <span className="text-[11px] font-medium text-[#4F5C71]/70 text-center px-3">{label}</span>
  </div>
);

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeNav />

      {/* Page header */}
      <section className="pt-[100px] pb-12 bg-[#F2F8FD] border-b border-[#001345]/6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-1 h-5 rounded-full bg-[#00468C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00468C]">
                Conservation & Sustainability
              </span>
            </div>
            <h1 className="font-serif text-[42px] lg:text-[56px] font-bold text-[#001345] leading-[1.05] mb-5">
              Our Partners
            </h1>
            <p className="text-[#4F5C71] text-[17px] leading-[1.7] max-w-xl">
              To keep our environmental impact as low as possible and offset our emissions, we work with various partners whose projects we support.
            </p>
          </div>
        </div>
      </section>

      {/* Partner 1: One Tree Planted */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] flex items-center justify-center">
                  <Icon name="TreePine" size={20} className="text-[#00468C]" />
                </div>
                <h2 className="font-serif text-[32px] lg:text-[38px] font-bold text-[#001345] leading-tight">
                  One Tree Planted
                </h2>
              </div>

              <div className="space-y-5 text-[#4F5C71] text-[16px] leading-[1.75]">
                <p>
                  Global warming, with all its serious consequences for our planet, is primarily caused by the build-up of greenhouse gases in the atmosphere. The organization "One Tree Planted" has dedicated itself to the goal of counteracting further global warming by planting trees. The organization plants new forests in various regions of the world with the help of many volunteers.
                </p>
                <p>
                  Along the Pacific coast of North America, deforestation has had a serious impact on the lives of orcas, also known as killer whales. Clear-cutting has caused erosion, lack of nutrients and pollution along the coast, contributing massively to the disintegration of the ecosystem. The distribution of Chinook salmon, which make up 80% of the diet of the orcas living here, has declined sharply in recent decades due to the factors mentioned above. The orcas have not been able to replace the missing food.
                </p>
                <div className="border-l-2 border-[#00468C] pl-5 py-1">
                  <p className="font-semibold text-[#001345] text-[17px]">
                    Today, there are only 75 animals left from a once much larger population.
                  </p>
                </div>
                <p>
                  By planting new trees in the region, we hope to improve the environment, increase the number of Chinook salmon and thus help the local orca population to survive and multiply. Moby Wildlife Tours would like to offset its own consumption (e.g. emissions from hotel stays or boat trips) as much as possible in this way.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="col-span-2">
                <ImagePlaceholder label="Image: Partner One Tree Planted" />
              </div>
              <ImagePlaceholder label="Image: Partner One Tree Planted" />
              <ImagePlaceholder label="Image: Partner One Tree Planted" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#001345]/8" />
          <span className="text-[#001345]/25 text-lg tracking-[0.4em]">* * *</span>
          <div className="flex-1 h-px bg-[#001345]/8" />
        </div>
      </div>

      {/* Partner 2: Whaleman Foundation */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-start">
            {/* Gallery */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 order-2 lg:order-1">
              <div className="col-span-2">
                <ImagePlaceholder label="Image: Partner Whaleman" />
              </div>
              <ImagePlaceholder label="Image: Partner Whaleman" />
              <ImagePlaceholder label="Image: Partner Whaleman" />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] flex items-center justify-center">
                  <Icon name="Waves" size={20} className="text-[#00468C]" />
                </div>
                <h2 className="font-serif text-[32px] lg:text-[38px] font-bold text-[#001345] leading-tight">
                  Whaleman Foundation
                </h2>
              </div>

              <div className="space-y-5 text-[#4F5C71] text-[16px] leading-[1.75]">
                <p>
                  Jeff Pantukhoff, founder of the Whaleman Foundation, has dedicated his life to the protection of whales and dolphins. The Whaleman Foundation's work aims to mobilize and educate the public and policy makers on whale and dolphin conservation.
                </p>
                <p>
                  For various projects and films, Jeff has already been able to attract celebrities such as Pierce Brosnan and Hayden Panettiere to support him in his campaigns. In 1999, Jeff was able to stop the construction of the world's largest salt mine at the San Ignacio Lagoon in Mexico, the last untouched nursery of the California gray whale. The creation of the mine would have meant the end of this unique ecosystem.
                </p>
                <p>
                  As part of his "Save the Whales Again!" campaign launched in 2007, Jeff Pantukhoff draws attention to various developments that require political intervention by the global community:
                </p>

                <ul className="space-y-2.5 pl-1">
                  {[
                    "Commercial whaling by Japan, Norway and Iceland",
                    "Slaughter of 20,000 dolphins and small whales annually in the Bay of Taiji (Japan) and on the Faroe Islands (Denmark)",
                    "Massive noise pollution from commercial activities and military presence",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#00468C] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  Moby Wildlife Tours maintains a partnership with the Whaleman Foundation in an effort to support the activities of Jeff Pantukhoff and to do our part for the welfare of whales and dolphins. A portion of the proceeds from each trip goes to the Whaleman Foundation.
                </p>

                <p>
                  Further information about Jeff Pantukhoff and the Whaleman Foundation can be found at{" "}
                  <a
                    href="https://www.whaleman.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00468C] font-medium underline underline-offset-2 hover:text-[#001345] transition-colors"
                  >
                    www.whaleman.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default PartnersPage;
