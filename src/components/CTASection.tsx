import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, ClipboardList } from "lucide-react";
import { WHATSAPP_URL } from "../data/site";

interface Props {
  titulo?: string;
  subtitulo?: string;
}

/** CTA final reutilizable: fondo grafito, franjas amarillas y doble botón. */
export default function CTASection({
  titulo = "¿Tienes un proyecto industrial o una reparación urgente?",
  subtitulo = "Cuéntanos qué necesitas y recibe una cotización clara, con tiempos de entrega y respaldo técnico. Atendemos plantas en Guanajuato y todo el Bajío.",
}: Props) {
  return (
    <section className="relative bg-grafito-950 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="stripes-aviso h-2 relative" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="text-aviso-500 font-display font-semibold text-xl uppercase tracking-[0.3em]">
          Hablemos de tu proyecto
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight">
          {titulo}
        </h2>
        <p className="mt-5 text-steel-300 max-w-2xl mx-auto leading-relaxed">{subtitulo}</p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-wide px-8 py-4 text-sm transition-colors shadow-lg shadow-brand-500/25"
          >
            <ClipboardList size={18} /> Solicitar cotización
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb857] text-white font-bold uppercase tracking-wide px-8 py-4 text-sm transition-colors"
          >
            <MessageCircle size={18} /> Enviar WhatsApp
          </a>
        </div>
        <p className="mt-6 text-xs text-steel-500 flex items-center justify-center gap-1.5">
          Respuesta en horario de oficina · {`Lun – Vie 8:00 – 18:00`}
          <ArrowRight size={12} className="text-aviso-500" />
        </p>
      </div>
      <div className="stripes-aviso h-2 relative" aria-hidden="true" />
    </section>
  );
}
