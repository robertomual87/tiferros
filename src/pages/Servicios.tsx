import { Link } from "react-router-dom";
import { CheckCircle2, ClipboardList, Cog, Wrench, Flame, Gauge, Cpu, Compass } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";
import { SERVICIOS } from "../data/servicios";

const ICONOS: Record<string, typeof Cog> = {
  maquinado: Cog,
  paileria: Wrench,
  soldadura: Flame,
  tuberias: Gauge,
  automatizacion: Cpu,
  diseno: Compass,
};

export default function Servicios() {
  usePageMeta(
    "Servicios Industriales | TIFERROS — Maquinado, Pailería, Soldadura y Automatización en Guanajuato",
    "Maquinado industrial de precisión, pailería, soldadura TIG-MIG-SMAW con soldadores certificados AWS, tuberías industriales, automatización y diseño industrial con memorias de cálculo. En Villagrán, Guanajuato."
  );

  return (
    <>
      <PageHeader
        etiqueta="Servicios"
        titulo="Servicios industriales integrales"
        subtitulo="Del diseño a la fabricación, de la reparación al mantenimiento. Ejecutamos cada servicio con personal capacitado, documentación completa y control de calidad."
      >
        {/* Navegación por anclas */}
        <nav
          className="mt-8 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4"
          aria-label="Saltar a un servicio"
        >
          {SERVICIOS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 inline-flex items-center gap-2 border border-white/20 text-steel-100 hover:border-aviso-500 hover:text-aviso-400 text-xs font-bold uppercase tracking-wider px-4 py-2.5 transition-colors bg-grafito-900/60"
            >
              {s.titulo}
            </a>
          ))}
        </nav>
      </PageHeader>

      {/* Detalle de servicios */}
      <div className="bg-steel-100">
        {SERVICIOS.map((servicio, i) => {
          const Icono = ICONOS[servicio.id] ?? Cog;
          const invertido = i % 2 === 1;
          return (
            <section
              key={servicio.id}
              id={servicio.id}
              className={i > 0 ? "border-t border-steel-200" : ""}
            >
              <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
                <div className={`grid lg:grid-cols-2 gap-10 items-start ${invertido ? "" : ""}`}>
                  {/* Imagen */}
                  <div className={`relative ${invertido ? "lg:order-2" : ""}`}>
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-aviso-500" aria-hidden="true" />
                    <img
                      src={servicio.imagen}
                      alt={servicio.alt}
                      loading="lazy"
                      className="relative w-full h-[340px] object-cover shadow-xl"
                    />
                    <div className="absolute -bottom-5 left-6 bg-grafito-950 text-white px-5 py-3 border-l-4 border-brand-500">
                      <p className="font-display font-bold text-lg uppercase leading-none">Servicio 0{i + 1}</p>
                      <p className="text-[11px] text-steel-300 uppercase tracking-wider mt-0.5">TIFERROS</p>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={invertido ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-brand-500 flex items-center justify-center shrink-0">
                        <Icono size={24} className="text-white" strokeWidth={1.7} aria-hidden="true" />
                      </div>
                      <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-grafito-900 leading-tight">
                        {servicio.titulo}
                      </h2>
                    </div>
                    <p className="mt-4 text-steel-600 leading-relaxed">{servicio.descripcion}</p>

                    <h3 className="mt-6 font-display font-semibold text-xl uppercase text-grafito-900 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-aviso-500 inline-block" aria-hidden="true" />
                      Capacidades
                    </h3>
                    <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {servicio.capacidades.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-sm text-steel-700">
                          <CheckCircle2 size={15} className="text-brand-500 shrink-0 mt-0.5" /> {cap}
                        </li>
                      ))}
                    </ul>

                    {servicio.piezas && (
                      <>
                        <h3 className="mt-6 font-display font-semibold text-xl uppercase text-grafito-900 flex items-center gap-2">
                          <span className="w-6 h-0.5 bg-aviso-500 inline-block" aria-hidden="true" />
                          Piezas que fabricamos
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {servicio.piezas.map((pieza) => (
                            <span key={pieza} className="bg-white border border-steel-300 text-grafito-800 text-xs font-semibold px-3 py-1.5">
                              {pieza}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {servicio.materiales && (
                      <>
                        <h3 className="mt-6 font-display font-semibold text-xl uppercase text-grafito-900 flex items-center gap-2">
                          <span className="w-6 h-0.5 bg-aviso-500 inline-block" aria-hidden="true" />
                          Materiales
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {servicio.materiales.map((mat) => (
                            <span key={mat} className="bg-grafito-900 text-steel-200 text-xs font-semibold px-3 py-1.5">
                              {mat}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/contacto?servicio=${encodeURIComponent(servicio.titulo)}`}
                        className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-wide text-xs px-6 py-3.5 transition-colors"
                      >
                        <ClipboardList size={15} /> Cotizar este servicio
                      </Link>
                      <Link
                        to="/contacto"
                        className="inline-flex items-center justify-center gap-2 border-2 border-grafito-900 text-grafito-900 hover:bg-grafito-900 hover:text-aviso-400 font-bold uppercase tracking-wide text-xs px-6 py-3.5 transition-colors"
                      >
                        Solicitar información
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection
        titulo="¿Necesitas un servicio que no ves aquí?"
        subtitulo="Si tu proyecto requiere una solución a la medida, platícanos tu necesidad: diseñamos la solución, la fabricamos y la instalamos."
      />
    </>
  );
}
