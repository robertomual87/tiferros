import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";
import { PROYECTOS } from "../data/proyectos";

export default function Proyectos() {
  usePageMeta(
    "Proyectos | TIFERROS — Estructuras, Tuberías, Maquinado y Soluciones Lean",
    "Proyectos industriales de TIFERROS: estructuras metálicas, tuberías de proceso, vallados de seguridad, piezas maquinadas, flow racks FIFO, automatización de conveyors, bases de maquinaria y protecciones."
  );

  return (
    <>
      <PageHeader
        etiqueta="Proyectos"
        titulo="Trabajos que respaldan nuestra experiencia"
        subtitulo="Una muestra de los proyectos industriales que hemos desarrollado para la industria del Bajío: fabricación, reparación, automatización y soluciones Lean."
      />

      <section className="bg-steel-100 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {PROYECTOS.map((proyecto) => (
              <article
                key={proyecto.titulo}
                className="group bg-white border border-steel-200 overflow-hidden hover:border-brand-500 hover:shadow-2xl hover:shadow-grafito-900/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.alt}
                    loading="lazy"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grafito-950/70 to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-3 left-3 bg-aviso-500 text-grafito-950 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5">
                    {proyecto.servicio}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-2xl uppercase text-grafito-900 leading-tight">
                    {proyecto.titulo}
                  </h2>
                  <p className="mt-2.5 text-sm text-steel-600 leading-relaxed">{proyecto.descripcion}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      to={`/contacto?proyecto=${encodeURIComponent(proyecto.titulo)}`}
                      className="inline-flex items-center gap-2 bg-grafito-900 hover:bg-brand-500 text-aviso-400 hover:text-white font-bold uppercase text-xs tracking-wider px-5 py-3 transition-colors"
                    >
                      <ClipboardList size={14} /> Cotizar proyecto similar
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-steel-400">
            Las imágenes mostradas son de referencia. En TIFERROS documentamos cada proyecto con
            fotografías y evidencia para nuestros clientes.
          </p>
        </div>
      </section>

      <CTASection
        titulo="¿Quieres ver un proyecto similar en tu planta?"
        subtitulo="Cuéntanos tu necesidad y te presentamos cómo lo hemos resuelto para otras empresas de la industria."
      />
    </>
  );
}
