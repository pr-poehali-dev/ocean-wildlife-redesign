import { useState } from "react";
import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    id: "safety",
    icon: "ShieldCheck",
    question: "Are such animal journeys dangerous?",
    answer:
      "In principle, our tours are not dangerous.\nThis also applies to swimming with whales or diving with sharks.\nHowever, it is important to follow the instructions of the companions and guides in order to guarantee safety.",
  },
  {
    id: "welfare",
    icon: "Heart",
    question: "Are these tours compatible with animal welfare?",
    answer:
      "Animal welfare and the safety of our participants are the highest priorities for us.\nMost of our tours consist of passive observation, often without the animals even noticing us.\nFor tours at sea, we follow strict local and self-imposed guidelines. For example, if there are several boats near a whale, we look for another spot. In the water, we also observe whales and sharks passively and leave it to the animals to approach us.",
  },
  {
    id: "groups",
    icon: "Users",
    question: "How big are the groups?",
    answer:
      "In order to be able to offer the best experiences, we focus on small groups. Depending on the trip, this is between 4 and 6 guests.\nFor private tours, please contact us directly.",
  },
  {
    id: "photography",
    icon: "Camera",
    question: "Are the tours suitable for photographers?",
    answer:
      "Our tours are definitely suitable for photographers. We have taken all the pictures on this website ourselves, so we are also very interested in good subjects and settings.",
  },
  {
    id: "non-photographers",
    icon: "Camera",
    question: "Can I take part even if I'm not a photographer?",
    answer:
      "Of course. Many of our customers do not have any special camera equipment and enjoy the encounters without taking photos.",
  },
  {
    id: "cancellation",
    icon: "Ticket",
    question: "What happens if I have to cancel a reserved tour?",
    answer:
      "It can always happen that a guest is unable to travel due to illness or personal circumstances.\nIn such cases, we will do our best to find a replacement and refund the payments made. However, if no replacement can be found, the guidelines of the Terms & Conditions apply.\nWe generally recommend that you take out travel insurance to protect yourself financially.",
  },
];

const tocIcons: Record<string, string> = {
  safety: "ShieldCheck",
  welfare: "Heart",
  groups: "Users",
  photography: "Camera",
  "non-photographers": "Camera",
  cancellation: "Ticket",
};

const FaqPage = () => {
  const [openId, setOpenId] = useState<string | null>("safety");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const scrollTo = (id: string) => {
    const el = document.getElementById(`faq-${id}`);
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setOpenId(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HomeNav />

      {/* Hero */}
      <section className="pt-[100px] pb-14 bg-[#F2F8FD] border-b border-[#001345]/6">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[#00468C] mb-4">
            FAQ
          </span>
          <h1 className="font-serif text-[38px] lg:text-[52px] font-bold text-[#001345] leading-[1.12] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[17px] text-[#4F5C71] leading-relaxed max-w-xl">
            Safety, animal welfare, and practical tour details — answered.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16 lg:items-start">

          {/* Table of Contents — sticky sidebar on desktop */}
          <aside className="hidden lg:block sticky top-[88px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              Contents
            </div>
            <nav className="space-y-1">
              {faqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => scrollTo(faq.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-[13px] transition-colors group ${
                    openId === faq.id
                      ? "bg-[#EBF3FC] text-[#00468C] font-semibold"
                      : "text-[#4F5C71] hover:text-[#00468C] hover:bg-[#F2F8FD]"
                  }`}
                >
                  <Icon
                    name={tocIcons[faq.id]}
                    size={14}
                    className={`shrink-0 transition-colors ${
                      openId === faq.id ? "text-[#00468C]" : "text-slate-400 group-hover:text-[#00468C]"
                    }`}
                  />
                  <span className="leading-snug">{faq.question}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Accordion */}
          <div className="divide-y divide-slate-100">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} id={`faq-${faq.id}`} className={idx === 0 ? "" : ""}>
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#00468C] text-white" : "bg-[#F2F8FD] text-[#00468C]"
                        }`}
                      >
                        <Icon name={faq.icon} size={15} />
                      </span>
                      <span
                        className={`text-[16px] lg:text-[17px] font-semibold leading-snug transition-colors ${
                          isOpen ? "text-[#001345]" : "text-[#001345] group-hover:text-[#00468C]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`mt-1.5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#00468C]" : "text-slate-400"
                      }`}
                    >
                      <Icon name="ChevronDown" size={18} />
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-7 pl-[46px] pr-6">
                      {faq.answer.split("\n").map((para, i) => (
                        <p
                          key={i}
                          className="text-[15px] text-[#4F5C71] leading-[1.72] max-w-prose mb-3 last:mb-0"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#F2F8FD] border-t border-[#001345]/6 py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[18px] font-semibold text-[#001345] mb-1">Still have a question?</p>
            <p className="text-[14px] text-[#4F5C71]">We're happy to help before you book.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00468C] text-white text-[14px] font-semibold rounded-xl hover:bg-[#001345] transition-colors shrink-0"
          >
            <Icon name="Mail" size={15} />
            Contact us
          </a>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default FaqPage;
