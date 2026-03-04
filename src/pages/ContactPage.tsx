import { useState } from "react";
import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";
import Icon from "@/components/ui/icon";

const WHATSAPP_LINK = "https://wa.me/41765811893";

type FormState = "idle" | "submitting" | "success";

interface FormData {
  firstName: string;
  surname: string;
  email: string;
  phonePrefix: string;
  phoneArea: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const inputClass =
  "w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-[14px] text-[#001345] placeholder:text-slate-400 " +
  "focus:outline-none focus:border-[#00468C] focus:ring-2 focus:ring-[#00468C]/15 transition";

const labelClass = "block text-[12px] font-semibold text-[#001345] mb-1.5 tracking-wide";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    surname: "",
    email: "",
    phonePrefix: "",
    phoneArea: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => setState("success"), 1200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HomeNav />

      {/* Hero */}
      <section className="pt-[68px]">
        <div className="relative h-[260px] md:h-[320px] overflow-hidden bg-[#001345]">
          <img
            src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1600&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001345]/60 via-transparent to-[#001345]/80" />
          <div className="relative h-full flex flex-col justify-end pb-10 px-6 max-w-[1200px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D7EBFF]/80 mb-2">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Request now
            </h1>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="flex-1 bg-[#F2F8FD]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

            {/* ── LEFT: Form card ── */}
            <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,19,69,0.07)] border border-slate-100 p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-[#001345] mb-1">
                Get in touch with us using the form
              </h2>
              <p className="text-[13px] text-[#4F5C71] mb-8">
                Fields marked with <span className="text-[#00468C] font-semibold">*</span> are required.
              </p>

              {state === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#F2F8FD] flex items-center justify-center">
                    <Icon name="CheckCircle" size={34} className="text-[#00468C]" />
                  </div>
                  <p className="text-2xl font-serif font-bold text-[#001345]">Thank you very much!</p>
                  <p className="text-[14px] text-[#4F5C71] max-w-xs">
                    We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setState("idle"); setForm({ firstName: "", surname: "", email: "", phonePrefix: "", phoneArea: "", phoneNumber: "", subject: "", message: "" }); }}
                    className="mt-2 text-[13px] font-semibold text-[#00468C] hover:underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  {/* Name */}
                  <fieldset>
                    <legend className={labelClass}>
                      Name <span className="text-[#00468C]">*</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
                      <div>
                        <input
                          type="text"
                          placeholder="First name"
                          required
                          value={form.firstName}
                          onChange={set("firstName")}
                          className={inputClass}
                          aria-label="First name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Surname"
                          required
                          value={form.surname}
                          onChange={set("surname")}
                          className={inputClass}
                          aria-label="Surname"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>
                      E-mail address <span className="text-[#00468C]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={set("email")}
                      className={inputClass}
                    />
                  </div>

                  {/* Telephone */}
                  <fieldset>
                    <legend className={labelClass}>
                      Telephone (please include prefix)
                    </legend>
                    <div className="grid grid-cols-[88px_1fr_1.35fr] gap-2 mt-1.5">
                      <input
                        type="text"
                        placeholder="(###)"
                        value={form.phonePrefix}
                        onChange={set("phonePrefix")}
                        className={inputClass}
                        aria-label="Country prefix"
                        maxLength={6}
                      />
                      <input
                        type="text"
                        placeholder="###"
                        value={form.phoneArea}
                        onChange={set("phoneArea")}
                        className={inputClass}
                        aria-label="Area code"
                        maxLength={5}
                      />
                      <input
                        type="text"
                        placeholder="####"
                        value={form.phoneNumber}
                        onChange={set("phoneNumber")}
                        className={inputClass}
                        aria-label="Phone number"
                        maxLength={10}
                      />
                    </div>
                  </fieldset>

                  {/* Subject */}
                  <div>
                    <label className={labelClass}>
                      Subject <span className="text-[#00468C]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tour enquiry – Norway Orcas 2025"
                      required
                      value={form.subject}
                      onChange={set("subject")}
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>
                      Message <span className="text-[#00468C]">*</span>
                    </label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Tell us about your travel dates, group size, and any questions…"
                      value={form.message}
                      onChange={set("message")}
                      className={
                        "w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-white text-[14px] text-[#001345] placeholder:text-slate-400 " +
                        "focus:outline-none focus:border-[#00468C] focus:ring-2 focus:ring-[#00468C]/15 transition resize-y min-h-[140px]"
                      }
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className={
                      "flex items-center justify-center gap-2 w-full h-12 rounded-xl text-[14px] font-semibold text-white transition " +
                      "bg-[#00468C] hover:bg-[#003570] focus:outline-none focus:ring-2 focus:ring-[#00468C]/40 " +
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    }
                  >
                    {state === "submitting" ? (
                      <>
                        <Icon name="Loader2" size={17} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={16} />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── RIGHT: Direct channels card ── */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,19,69,0.07)] border border-slate-100 p-8">
                <h2 className="text-xl font-serif font-bold text-[#001345] mb-6">
                  Or directly via the following channels
                </h2>

                <div className="space-y-0">
                  {/* Phone */}
                  <ChannelRow icon="Phone" label="Phone">
                    <a
                      href="tel:+41765811893"
                      className="text-[14px] text-[#001345] font-medium hover:text-[#00468C] transition focus:outline-none focus:underline underline-offset-2"
                    >
                      +41 76 581 1893
                    </a>
                  </ChannelRow>

                  <Divider />

                  {/* WhatsApp */}
                  <ChannelRow icon="MessageCircle" label="WhatsApp">
                    <div className="flex flex-col gap-0.5">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-[#001345] font-medium hover:text-[#00468C] transition focus:outline-none focus:underline underline-offset-2"
                      >
                        +41 76 581 1893
                      </a>
                      <span className="text-[13px] text-[#4F5C71]">
                        or directly{" "}
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00468C] font-semibold underline underline-offset-2 hover:text-[#003570] transition focus:outline-none focus:ring-1 focus:ring-[#00468C]/40 rounded"
                        >
                          here
                        </a>
                      </span>
                    </div>
                  </ChannelRow>

                  <Divider />

                  {/* Email */}
                  <ChannelRow icon="Mail" label="Email">
                    <a
                      href="mailto:info@mobywildlifetours.com"
                      className="text-[14px] text-[#001345] font-medium hover:text-[#00468C] transition break-all focus:outline-none focus:underline underline-offset-2"
                    >
                      info@mobywildlifetours.com
                    </a>
                  </ChannelRow>
                </div>
              </div>

              {/* Response-time note */}
              <div className="flex items-start gap-3 px-5 py-4 rounded-xl bg-[#D7EBFF]/40 border border-[#D7EBFF]">
                <Icon name="Clock" size={16} className="text-[#00468C] shrink-0 mt-0.5" />
                <p className="text-[13px] text-[#4F5C71] leading-relaxed">
                  We typically respond within <strong className="text-[#001345]">1–2 business days</strong>. For urgent requests, please reach us via WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}

function ChannelRow({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 py-4">
      <div className="w-9 h-9 rounded-xl bg-[#F2F8FD] flex items-center justify-center shrink-0">
        <Icon name={icon} size={16} className="text-[#00468C]" />
      </div>
      <div className="flex flex-col gap-0.5 pt-0.5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
        {children}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-slate-100 mx-0" />;
}
