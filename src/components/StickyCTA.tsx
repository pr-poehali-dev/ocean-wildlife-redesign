import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button className="bg-ocean hover:bg-ocean/90 text-white h-14 px-8 text-sm font-medium rounded-full shadow-lg shadow-ocean/25 gap-2">
        <Icon name="Mail" size={18} />
        Request booking
      </Button>
    </div>
  );
};

export default StickyCTA;
