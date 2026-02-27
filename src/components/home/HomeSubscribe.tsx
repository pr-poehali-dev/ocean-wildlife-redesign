import { useState } from "react";
import Icon from "@/components/ui/icon";

const HomeSubscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #001345 0%, #00468C 100%)" }}
      id="subscribe"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-xl mx-auto text-center">

          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(215,235,255,0.12)", border: "1px solid rgba(215,235,255,0.18)" }}
          >
            <Icon name="Mail" size={24} className="text-[#D7EBFF]" />
          </div>

          <h2 className="font-serif text-[28px] lg:text-[34px] font-bold text-white mb-3">
            Stay Updated
          </h2>
          <p className="text-[#D7EBFF]/70 text-[15px] leading-relaxed mb-8">
            Subscribe to our newsletter and be the first to hear about new expeditions, wildlife encounters, and trip availability.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-6 animate-fade-in">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(215,235,255,0.15)" }}
              >
                <Icon name="CheckCircle2" size={28} className="text-[#D7EBFF]" />
              </div>
              <p className="text-white font-semibold text-[18px]">Thank you very much!</p>
              <p className="text-[#D7EBFF]/60 text-[14px]">You're now subscribed to our newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <div className="flex-1">
                <label className="sr-only" htmlFor="newsletter-email">E-mail address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your e-mail address"
                  className="w-full h-12 px-4 rounded-xl text-[14px] text-white placeholder:text-[#D7EBFF]/40 focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "rgba(215,235,255,0.10)",
                    border: "1px solid rgba(215,235,255,0.20)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(215,235,255,0.55)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(215,235,255,0.20)";
                  }}
                />
              </div>
              <button
                type="submit"
                className="h-12 px-7 bg-white hover:bg-[#D7EBFF] text-[#001345] font-semibold rounded-xl text-[14px] shrink-0 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[#D7EBFF]/35 text-[12px] mt-5 flex items-center justify-center gap-1.5">
            <Icon name="Shield" size={11} />
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSubscribe;
