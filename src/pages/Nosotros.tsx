import {
  BadgeCheck,
  Crosshair,
  ShieldCheck,
  ClipboardCheck,
  MessagesSquare,
  Handshake,
  TrendingUp,
  CheckCircle2,
  Factory,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import ClientLogos from "../components/ClientLogos";
import { usePageMeta } from "../hooks/usePageMeta";

const VALORES = [
  { icono: BadgeCheck, nombre: "Calidad", texto: "Cada pieza y cada unión se ejecuta con control y verificación." },
  { icono: Crosshair, nombre: "Precisión", texto: "Tolerancias controladas y fabricación sobre plano o muestra." },
  { icono: ShieldCheck, nombre: "Seguridad", texto: "Trabajamos con protocolos y capacitaciones DC3 vigentes." },
  { icono: ClipboardCheck, nombre: "Cumplimiento", texto: "Entregamos en tiempo y forma, con documentación completa." },
  { icono: MessagesSquare, nombre: "Comunicación técnica", texto: "Diálogo claro y directo entre ingeniería y producción." },
  { icono: Handshake, nombre: "Confianza", texto: "Relaciones de largo plazo con clientes industriales del Bajío." },
  { icono: TrendingUp, nombre: "Mejora continua", texto: "Optimizamos procesos y proponemos mejoras a tus operaciones." },
];

const CAPACIDADES = [
  "Fabricación en taller",
  "Trabajo en planta del cliente",
  "Maquinado convencional (torneado, fresado, rectificado)",
  "Pailería y fabricación metálica",
  "Soldadura TIG, MIG y SMAW",
  "Instalación de tuberías industriales",
  "Diseño industrial y modelado 3D",
  "Inspección visual y ensayos no destructivos",
  "Memorias de cálculo y documentación técnica",
  "Productos Lean Manufacturing y material handling",
];

export default function Nosotros() {
  usePageMeta(
    "Nosotros | TIFERROS — Servicios Industriales en Villagrán, Guanajuato",
    "TIFERROS es una empresa especializada en servicios industriales y transformación de metales en Villagrán, Guanajuato: maquinado, pailería, soldadura, tuberías, automatización y diseño industrial."
  );

  return (
    <>
      <PageHeader
        etiqueta="Nosotros"
        titulo="Una empresa industrial con respaldo técnico"
        subtitulo="TIFERROS es una empresa especializada en servicios industriales y transformación de metales, ubicada en Villagrán, Guanajuato. Atendemos proyectos de maquinado, pailería, soldadura, tuberías industriales, automatización y diseño de soluciones para empresas manufactureras."
      />

      {/* Historia / propuesta de valor */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              etiqueta="Nuestra propuesta"
              titulo="Experiencia en transformación de metales"
            />
            <div className="mt-5 space-y-4 text-steel-600 leading-relaxed">
              <p>
                En <strong className="text-grafito-900">TIFERROS</strong> unimos oficio, ingeniería y
                disciplina de seguridad para resolver los retos metalmecánicos de nuestros clientes.
                Trabajamos tanto en nuestro taller como dentro de las plantas del cliente, cumpliendo con
                la documentación y los requisitos que exige la industria manufacturera para operar en
                sus instalaciones.
              </p>
              <p>
                Cubrimos el ciclo completo del proyecto: <strong className="text-grafito-900">diseño y modelado 3D</strong>,
                fabricación, maquinado, soldadura con soldadores calificados bajo norma AWS, inspección
                con ensayos no destructivos y puesta en marcha. Un solo equipo acompaña tu proyecto de
                principio a fin, sin subcontrataciones que compliquen la trazabilidad ni la calidad.
              </p>
              <p>
                Atendemos a la industria de <strong className="text-grafito-900">Guanajuato y el Bajío</strong> con
                soluciones de maquinado, pailería, tuberías industriales, automatización y productos Lean
                Manufacturing, adaptadas a las necesidades específicas de cada proceso.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["REPSE", "DC3", "Soldadores certificados AWS", "END Nivel 2", "Diseño y memorias de cálculo"].map((s) => (
                <span
                  key={s}
                  className="border border-steel-300 bg-steel-100 text-grafito-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-28 h-28 border-2 border-brand-500" aria-hidden="true" />
            <img
              src="/equipo.jpg"
              alt="Equipo de trabajo de TIFERROS ensamblando componentes metálicos en planta"
              className="relative w-full h-[440px] object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-grafito-950 text-white px-6 py-4 shadow-2xl border-l-4 border-aviso-500">
              <p className="font-display font-bold text-2xl uppercase leading-none">Taller + Planta</p>
              <p className="mt-1 text-xs text-steel-300 uppercase tracking-wider">
                Fabricación y trabajo en sitio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-steel-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            alineacion="centro"
            etiqueta="Nuestros valores"
            titulo="Principios que guían cada proyecto"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((valor) => (
              <article
                key={valor.nombre}
                className="bg-white border border-steel-200 p-6 hover:border-brand-500 transition-colors"
              >
                <valor.icono size={26} className="text-brand-500" strokeWidth={1.7} aria-hidden="true" />
                <h3 className="mt-3 font-display font-bold text-xl uppercase text-grafito-900">
                  {valor.nombre}
                </h3>
                <p className="mt-1.5 text-sm text-steel-600 leading-relaxed">{valor.texto}</p>
              </article>
            ))}
            {/* Tarjeta de infraestructura */}
            <article className="bg-grafito-950 text-white p-6 border-t-4 border-aviso-500">
              <Factory size={26} className="text-aviso-500" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-3 font-display font-bold text-xl uppercase">Infraestructura</h3>
              <p className="mt-1.5 text-sm text-steel-300 leading-relaxed">
                Taller equipado para maquinado y fabricación en Villagrán, Guanajuato, con capacidad de
                movilización a planta del cliente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/servicios.jpg"
              alt="Ingenieros de TIFERROS revisando planos técnicos en sitio"
              className="w-full h-[400px] object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 right-6 bg-brand-500 text-white px-6 py-4 shadow-2xl">
              <p className="font-display font-bold text-2xl uppercase leading-none">Ingeniería de detalle</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/85">
                Diseño · Modelado 3D · Memorias de cálculo
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              etiqueta="Capacidades"
              titulo="¿Qué podemos hacer por tu empresa?"
              subtitulo="Un proveedor integral para fabricación, mantenimiento y mejora de procesos."
            />
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {CAPACIDADES.map((capacidad) => (
                <li key={capacidad} className="flex items-start gap-2.5 text-sm text-steel-700">
                  <CheckCircle2 size={17} className="text-brand-500 shrink-0 mt-0.5" />
                  {capacidad}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClientLogos titulo="Clientes que confían en TIFERROS" />
      <CTASection />
    </>
  );
}
