import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/site";

/** Botón flotante de WhatsApp, visible en todo el sitio. */
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp a TIFERROS"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden="true" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1fb857] shadow-xl shadow-black/30 transition-colors">
        <MessageCircle size={28} className="text-white" />
      </span>
    </a>
  );
}
