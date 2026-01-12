import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/256789951151?text=Hi%20Omarie%20Luxe,%20I'd%20like%20to%20book%20an%20event"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={26} className="text-[hsl(0,0%,100%)]" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg">
        Chat with us
        <span className="absolute top-1/2 left-full -translate-y-1/2 border-8 border-transparent border-l-foreground" />
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
