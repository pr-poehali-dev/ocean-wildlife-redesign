import Icon from "@/components/ui/icon";

const VideoHighlight = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-ocean rounded-full" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Highlights
          </h2>
        </div>

        <p className="text-gray-500 mb-8 text-sm">
          Watch one of our highlight videos from East Timor here
        </p>

        <div className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer">
          <img
            src="https://cdn.poehali.dev/projects/94e93177-47cb-4a25-a003-83c4280b945d/files/d634e5d8-44b6-437e-9a9f-0963a78346ce.jpg"
            alt="Highlight video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Icon name="Play" size={32} className="text-ocean ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;
