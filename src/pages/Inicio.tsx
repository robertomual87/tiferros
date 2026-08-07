import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  ShieldCheck,
  Warehouse,
  Disc3,
  SlidersHorizontal,
  Droplets,
  Waves,
  Layers,
  FileCheck2,
  HardHat,
  Flame,
  ScanSearch,
  Compass,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import ClientLogos from "../components/ClientLogos";
import { usePageMeta } from "../hooks/usePageMeta";
import { CATEGORIAS_INICIO } from "../data/productos";
import { SERVICIOS } from "../data/servicios";
import { SELLOS } from "../data/site";

const ICONOS_CATEGORIA: Record<string, typeof Layers> = {
  lean: Warehouse,
  rodaja: Disc3,
  riel: SlidersHorizontal,
  tuberia: Droplets,
  bomba: Waves,
};

const DIFERENCIADORES = [
  {
    icono: FileCheck2,
    titulo: "Documentación para trabajar en planta",
    texto:
      "Contamos con la documentación y requisitos necesarios para ingresar y trabajar dentro de plantas manufactureras, como contratista de servicios especializados.",
  },
  {
    icono: HardHat,
    titulo: "Personal capacitado",
    texto:
      "Nuestro equipo cuenta con capacitaciones DC3 vigentes: trabajos en caliente, trabajos en altura, manejo de equipos de elevación y manejo de extintores.",
  },
  {
    icono: Flame,
    titulo: "Soldadores certificados",
    texto:
      "Soldadores calificados ante AWS para procesos TIG, MIG y SMAW, con respaldo documental de su calificación.",
  },
  {
    icono: ScanSearch,
    titulo: "Inspección y ensayos no destructivos",
    texto:
      "Inspección visual, líquidos penetrantes Nivel 2 y ultrasonido conforme a SNT-TC-1A para garantizar la calidad de cada unión.",
  },
  {
    icono: Compass,
    titulo: "Diseño, modelado y memorias de cálculo",
    texto:
      "Desarrollamos ingeniería de detalle: modelado 3D, planos de fabricación, despieces y memorias de cálculo con revisión de cargas.",
  },
  {
    icono: MapPin,
    titulo: "Atención a la industria del Bajío",
    texto:
      "Con base en Villagrán, Guanajuato, atendemos proyectos en taller y en planta del cliente en todo el Bajío y alrededores.",
  },
];

export default function Inicio() {
  usePageMeta(
    "TIFERROS | Maquinado, Pailería, Soldadura y Automatización Industrial en Guanajuato",
    "Soluciones industriales en Villagrán, Guanajuato: maquinado, pailería, soldadura TIG-MIG-SMAW, tuberías industriales, automatización, diseño industrial y productos Lean Manufacturing. REPSE, DC3 y soldadores certificados ante AWS."
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-grafito-950 overflow-hidden">
        <img
          src="/Taller2.jpg"
          alt="Torno industrial en operación durante un maquinado de precisión en taller de TIFERROS"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-grafito-950 via-grafito-950/90 to-grafito-950/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-aviso-500 font-display font-semibold text-lg uppercase tracking-[0.3em]">
              <span className="inline-block w-8 h-0.5 bg-aviso-500" aria-hidden="true" />
              Villagrán, Guanajuato · Industria del Bajío
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-white leading-[1.02]">
              Soluciones industriales para{" "}
              <span className="text-brand-500">fabricar</span>,{" "}
              <span className="text-aviso-500">reparar</span> y mejorar tus procesos
            </h1>
            <p className="mt-6 text-lg text-steel-200 leading-relaxed max-w-2xl">
              Maquinado convencional, pailería, soldadura especializada, tuberías industriales,
              automatización, diseño industrial y productos Lean para empresas en Guanajuato y el Bajío.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-wide px-8 py-4 text-sm transition-colors shadow-xl shadow-brand-500/25"
              >
                <ClipboardList size={18} /> Solicitar cotización
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-aviso-500 text-aviso-500 hover:bg-aviso-500 hover:text-grafito-950 font-bold uppercase tracking-wide px-8 py-4 text-sm transition-colors"
              >
                Ver servicios <ArrowRight size={18} />
              </Link>
            </div>
            {/* Sellos de confianza */}
            <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Certificaciones y capacidades">
              {SELLOS.map((sello) => (
                <li
                  key={sello}
                  className="inline-flex items-center gap-1.5 border border-white/15 bg-grafito-900/70 backdrop-blur text-steel-100 text-xs font-bold uppercase tracking-wider px-3.5 py-2"
                >
                  <ShieldCheck size={14} className="text-aviso-500" /> {sello}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="stripes-aviso h-2 relative" aria-hidden="true" />
      </section>

      {/* ============ RANGO DE PRODUCTOS ============ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              etiqueta="Productos"
              titulo="Componentes para material handling y planta"
              subtitulo="Sistemas Lean, ruedas y rodajas, rieles y bolas de transferencia, tubería de inoxidable y bombas: todo lo que necesitas para tus líneas y estructuras, en un solo proveedor."
            />
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 border-2 border-grafito-900 text-grafito-900 hover:bg-grafito-900 hover:text-aviso-400 font-bold uppercase text-xs tracking-wider px-5 py-3 shrink-0 transition-colors"
            >
              Ver catálogo completo <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIAS_INICIO.map((categoria) => {
              const Icono = ICONOS_CATEGORIA[categoria.icono] ?? Layers;
              return (
                <Link
                  key={categoria.nombre}
                  to="/productos"
                  className="group relative overflow-hidden bg-grafito-900 hover:bg-grafito-800 transition-colors"
                >
                  {/* Área de imagen de referencia — reemplaza categoria.imagen por la foto real */}
                  <img
                    src={categoria.imagen}
                    alt={`Referencia visual: ${categoria.nombre}`}
                    loading="lazy"
                    className="w-full h-52 object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grafito-950 via-grafito-950/40 to-transparent" aria-hidden="true" />
                  <div className="absolute top-0 left-0 w-0 h-1 bg-aviso-500 group-hover:w-full transition-all duration-300" aria-hidden="true" />

                  <div className="absolute top-4 right-4 w-10 h-10 bg-grafito-950/80 backdrop-blur flex items-center justify-center">
                    <Icono size={20} className="text-aviso-500" strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display font-bold text-2xl uppercase text-white leading-tight">
                      {categoria.nombre}
                    </h3>
                    <p className="mt-1.5 text-sm text-steel-300 line-clamp-2">{categoria.descripcion}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-aviso-400 text-xs font-bold uppercase tracking-wider">
                      Ver productos <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ BLOQUE INSTITUCIONAL (rojo) ============ */}
      <section className="bg-brand-500 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 font-display font-semibold text-xl uppercase tracking-[0.25em] text-aviso-400">
              <span className="inline-block w-8 h-0.5 bg-aviso-400" aria-hidden="true" />
              ¿Quiénes somos?
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
              TIFERROS: Precisión y Solidez en Cada Proyecto.
            </h2>
            <p className="mt-5 text-white/90 leading-relaxed">
              Somos una empresa especializada en servicios industriales, con amplia experiencia en el
              sector de transformación de metales. Ofrecemos soluciones completas en maquinado, pailería,
              soldadura, tuberías industriales, automatización, diseño industrial y productos Lean
              Manufacturing, adaptadas a las necesidades específicas de cada cliente.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm font-medium">
              {[
                "Fabricación en taller propio",
                "Trabajo en planta del cliente",
                "Soldadores certificados ante AWS",
                "Inspección y ensayos no destructivos",
                "Diseño, modelado y memorias de cálculo",
                "Documentación para plantas manufactureras",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-aviso-400 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link
              to="/nosotros"
              className="mt-8 inline-flex items-center gap-2 bg-grafito-950 hover:bg-grafito-800 text-aviso-400 font-bold uppercase tracking-wide px-7 py-3.5 text-sm transition-colors"
            >
              Conocer a TIFERROS <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-aviso-400/60" aria-hidden="true" />
            <img
              src="/public/Taller.jpg"
              alt="Técnico de TIFERROS operando maquinaria industrial con equipo de seguridad"
              className="relative w-full h-[420px] object-cover border-4 border-white/20 shadow-2xl"
              loading="lazy"
            />
            {/* Tarjeta flotante de experiencia */}
            <div className="absolute -bottom-6 left-6 bg-grafito-950 text-white px-6 py-4 shadow-2xl border-l-4 border-aviso-500">
              <p className="font-display font-bold text-2xl uppercase leading-none">Transformación de metales</p>
              <p className="mt-1 text-xs text-steel-300 uppercase tracking-wider">
                Maquinado · Pailería · Soldadura · Tuberías
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DIFERENCIADORES ============ */}
      <section className="bg-steel-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            alineacion="centro"
            etiqueta="¿Por qué TIFERROS?"
            titulo="Un proveedor preparado para trabajar en tu planta"
            subtitulo="Cumplimos con los requisitos de seguridad, documentación y calidad que exigen las empresas manufactureras."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIFERENCIADORES.map((d) => (
              <article
                key={d.titulo}
                className="bg-white border border-steel-200 p-6 hover:border-brand-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-500 flex items-center justify-center">
                  <d.icono size={24} className="text-white" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display font-bold text-xl uppercase text-grafito-900">{d.titulo}</h3>
                <p className="mt-2 text-sm text-steel-600 leading-relaxed">{d.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICIOS PRINCIPALES ============ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              etiqueta="Servicios"
              titulo="Servicios industriales integrales"
              subtitulo="Del diseño a la fabricación, de la reparación al mantenimiento: un solo proveedor para tus necesidades industriales."
            />
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 border-2 border-grafito-900 text-grafito-900 hover:bg-grafito-900 hover:text-aviso-400 font-bold uppercase text-xs tracking-wider px-5 py-3 shrink-0 transition-colors"
            >
              Todos los servicios <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((servicio) => (
              <Link
                key={servicio.id}
                to={`/servicios#${servicio.id}`}
                className="group relative overflow-hidden bg-grafito-900 hover:bg-grafito-800 transition-colors"
              >
                <img
                  src={servicio.imagen}
                  alt={servicio.alt}
                  loading="lazy"
                  className="w-full h-52 object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grafito-950 via-grafito-950/40 to-transparent" aria-hidden="true" />
                <div className="absolute top-0 left-0 w-0 h-1 bg-aviso-500 group-hover:w-full transition-all duration-300" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display font-bold text-2xl uppercase text-white leading-tight">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm text-steel-300 line-clamp-2">{servicio.corto}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-aviso-400 text-xs font-bold uppercase tracking-wider">
                    Ver detalle <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLIENTES ============ */}
      <ClientLogos />

      {/* ============ CTA FINAL ============ */}
      <CTASection />
    </>
  );
}