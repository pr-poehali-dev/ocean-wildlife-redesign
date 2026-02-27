import Icon from "@/components/ui/icon";

const HomeTestimonialsPlaceholder = () => {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-ocean/30" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-ocean">Reviews</span>
            <div className="h-px w-12 bg-ocean/30" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Icon key={s} name="Star" size={14} className="text-amber-400" />
                ))}
              </div>
              <div className="h-3 bg-gray-200 rounded-full w-full mb-2" />
              <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-2" />
              <div className="h-3 bg-gray-200 rounded-full w-4/6 mb-6" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200" />
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full w-24 mb-1.5" />
                  <div className="h-2 bg-gray-100 rounded-full w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsPlaceholder;
