import { Award, BadgeCheck, ImagePlus } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";
import { CERTIFICACIONES } from "../data/site";

export default function Certificaciones() {
  usePageMeta(
    "Certificaciones | TIFERROS — REPSE, DC3, END Nivel 2 y Soldadores Certificados AWS",
    "Certificaciones y capacidades de TIFERROS: REPSE, capacitación DC3 (trabajos en caliente, en altura, equipos de elevación, extintores), líquidos penetrantes Nivel 2, inspección visual, ultrasonido SNT-TC-1A, soldadores certificados ante AWS, diseño industrial y memorias de cálculo."
  );

  return (
    <>
      <PageHeader
        etiqueta="Certificaciones"
        titulo="Certificaciones y capacidades comprobables"
        subtitulo="En TIFERROS trabajamos con registros, constancias y calificaciones reales que nos permiten operar dentro de plantas manufactureras con total cumplimiento."
      />

      <section className="bg-steel-100 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10">
            {CERTIFICACIONES.map((grupo) => (
              <div key={grupo.grupo}>
                <div className="flex items-center gap-3">
                  <BadgeCheck size={22} className="text-brand-500" aria-hidden="true" />
                  <div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-grafito-900 leading-none">
                      {grupo.grupo}
                    </h2>
                    <p className="mt-1 text-sm text-steel-500">{grupo.descripcion}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grupo.items.map((item) => (
                    <article
                      key={item.nombre}
                      className="group bg-white border border-steel-200 p-6 hover:border-brand-500 hover:shadow-xl hover:shadow-grafito-900/10 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-11 h-11 bg-grafito-900 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                          <Award size={22} className="text-aviso-400" strokeWidth={1.7} aria-hidden="true" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-steel-400 border border-steel-300 px-2 py-1">
                          Vigente
                        </span>
                      </div>
                      <h3 className="mt-4 font-display font-bold text-xl uppercase text-grafito-900 leading-tight">
                        {item.nombre}
                      </h3>
                      <p className="mt-2 text-sm text-steel-600 leading-relaxed">{item.detalle}</p>

                      {/*
                        ESPACIO PARA IMAGEN REAL DEL CERTIFICADO:
                        Coloca la imagen en /public/images/certificados/<nombre>.jpg
                        y sustituye el bloque siguiente por:
                        <img src="/images/certificados/<nombre>.jpg" alt="Certificado: {item.nombre}" className="mt-4 w-full object-contain border border-steel-200" />
                      */}
                      <div className="mt-4 flex items-center justify-center gap-2 border-2 border-dashed border-steel-300 bg-steel-100/50 py-5 text-steel-400">
                        <ImagePlus size={16} aria-hidden="true" />
                        <span className="text-[11px] font-semibold uppercase tracking-wider">
                          Espacio para imagen del certificado
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-steel-400 leading-relaxed max-w-3xl">
            Nota: la información de esta página refleja únicamente las certificaciones y capacidades
            reales de la empresa. Las constancias, registros y calificaciones pueden presentarse al
            cliente bajo solicitud y confidencialidad.
          </p>
        </div>
      </section>

      <CTASection
        titulo="¿Necesitas documentación para tu proveedor?"
        subtitulo="Contamos con la documentación necesaria para ingresar a tu planta. Solicítala junto con tu cotización."
      />
    </>
  );
}
