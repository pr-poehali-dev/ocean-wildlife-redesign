import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50/50" id="contact">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-ocean rounded-full" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Contact us
          </h2>
        </div>

        <p className="text-gray-500 mb-12 ml-4 text-sm">
          Have questions about this expedition? We'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                    First name
                  </label>
                  <Input
                    placeholder="Jane"
                    className="h-12 border-gray-200 focus:border-ocean focus:ring-ocean/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                    Last name
                  </label>
                  <Input
                    placeholder="Smith"
                    className="h-12 border-gray-200 focus:border-ocean focus:ring-ocean/20"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="jane@example.com"
                  className="h-12 border-gray-200 focus:border-ocean focus:ring-ocean/20"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                  Preferred dates
                </label>
                <Input
                  placeholder="Oct 2026"
                  className="h-12 border-gray-200 focus:border-ocean focus:ring-ocean/20"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your group, experience level, or any questions..."
                  className="min-h-[120px] border-gray-200 focus:border-ocean focus:ring-ocean/20 resize-none"
                />
              </div>
              <Button className="w-full bg-ocean hover:bg-ocean/90 text-white h-12 text-base font-medium rounded-lg">
                Send request
              </Button>
            </form>
          </div>

          <div className="space-y-8 lg:pt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center shrink-0">
                <Icon name="MessageCircle" size={22} className="text-ocean" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  WhatsApp
                </div>
                <div className="text-sm text-gray-500">
                  +49 123 456 7890
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Typically replies within 2 hours
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center shrink-0">
                <Icon name="Mail" size={22} className="text-ocean" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Email
                </div>
                <div className="text-sm text-ocean">
                  info@mobywildlifetours.com
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center shrink-0">
                <Icon name="MapPin" size={22} className="text-ocean" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Office
                </div>
                <div className="text-sm text-gray-500">
                  Hamburg, Germany
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-ocean-light border border-ocean/10">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Clock" size={16} className="text-ocean" />
                <span className="text-sm font-semibold text-gray-900">
                  Response time
                </span>
              </div>
              <p className="text-sm text-gray-600">
                We aim to respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
