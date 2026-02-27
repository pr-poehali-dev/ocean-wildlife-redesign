import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HomeSubscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-20 bg-ocean" id="subscribe">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
            <Icon name="Mail" size={22} className="text-white" />
          </div>

          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3">
            Subscribe
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Sign up for the newsletter with your e-mail address to receive news and updates.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-6 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="CheckCircle2" size={28} className="text-white" />
              </div>
              <p className="text-white font-semibold text-lg">Thank you very much!</p>
              <p className="text-white/60 text-sm">You're now subscribed to our newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <label className="sr-only" htmlFor="newsletter-email">E-mail address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail address"
                  className="w-full h-12 px-4 rounded-xl bg-white/15 border border-white/25 text-white placeholder:text-white/45 text-[14px] focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                />
              </div>
              <Button
                type="submit"
                className="h-12 px-7 bg-white text-ocean hover:bg-white/90 font-semibold rounded-xl text-[14px] shrink-0 transition-all"
              >
                Register
              </Button>
            </form>
          )}

          <p className="text-white/40 text-[12px] mt-5 flex items-center justify-center gap-1.5">
            <Icon name="Shield" size={12} />
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSubscribe;
