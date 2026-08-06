import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  PackageSearch,
  Warehouse,
  Disc3,
  SlidersHorizontal,
  Droplets,
  Waves,
} from "lucide-react";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * Catálogo de productos — vista por categorías.
 * Cada sección corresponde a una línea de producto con imagen propia.
 * El botón "Ver catálogo de productos" queda deshabilitado por ahora:
 * más adelante cada categoría tendrá su propia página de catálogo
 * (ej. /productos/sistemas-lean) y ese botón pasará a ser un <Link>.
 */
const CATEGORIAS_PRODUCTO = [
  {
    id: "sistemas-lean",
    numero: "01",
    icono: Warehouse,
    nombre: "Sistemas Lean",
    resumen: "Flow racks, estaciones de trabajo y estructuras modulares",
    imagen: "/productos/rack.jpg",
    alt: "Rack de flujo modular para sistemas Lean Manufacturing",
    descripcion:
      "Sistema modular de tubos, conectores y rieles para construir flow racks (FIFO), supermercados de línea, estaciones de trabajo y áreas de inspección. Piezas intercambiables que se reconfiguran conforme cambian tus procesos, sin necesidad de soldadura.",
    bullets: [
      "Tubos modulares en distintos colores y acabados",
      "Conectores negros y zincados para uniones estructurales",
      "Rieles para flujo por gravedad de contenedores",
      "Accesorios, patas niveladoras y perfiles PVC",
      "Diseño a la medida bajo metodología Lean Manufacturing",
    ],
  },
  {
    id: "ruedas-rodajas",
    numero: "02",
    icono: Disc3,
    nombre: "Ruedas y rodajas",
    resumen: "Para carros, racks y estructuras móviles",
    imagen: "/productos/ruedas.jpg",
    alt: "Ruedas industriales giratorias para carros y racks",
    descripcion:
      "Ruedas y rodajas industriales para carros, racks y estructuras móviles, seleccionadas según la carga, el piso y el tipo de tránsito de tu operación. Disponibles con base fija o giratoria, con freno o sin freno.",
    bullets: [
      "Diámetros desde 3\" hasta rodajas de gran capacidad",
      "Base fija o giratoria, con freno o sin freno",
      "Hule, poliuretano y opciones ESD antiestáticas",
      "Rodajas con amortiguación para cargas sensibles",
      "Capacidades desde carga ligera hasta trabajo pesado",
    ],
  },
  {
    id: "rieles-bolas-transferencia",
    numero: "03",
    icono: SlidersHorizontal,
    nombre: "Rieles, conveyors y bolas de transferencia",
    resumen: "Flujo y cambio de dirección de materiales en línea",
    imagen: "/productos/bolas.jpg",
    alt: "Bolas de transferencia industriales para manejo de materiales",
    descripcion:
      "Componentes para transportadores y puntos de transferencia: bolas de transferencia para cambios de dirección multidireccionales, rieles con rodillos para líneas de flujo y conveyors para el movimiento continuo de piezas y contenedores.",
    bullets: [
      "Bolas de transferencia bridadas, de vástago, drop y platillo",
      "Capacidades de carga desde 40 hasta 750 lbs por unidad",
      "Rieles con rodillos series 40, 60 y 80, con opción ESD",
      "Acero al carbón, acero inoxidable y nylon según la aplicación",
      "Configuraciones a la medida del ancho y largo de tu línea",
    ],
  },
  {
    id: "tuberia-inoxidable",
    numero: "04",
    icono: Droplets,
    nombre: "Tubería de inoxidable",
    resumen: "Líneas de proceso e higiénicas",
    imagen: "/productos/inoxidable.jpg",
    alt: "Tubería de acero inoxidable para líneas de proceso industrial",
    descripcion:
      "Tubería de acero inoxidable y sus accesorios para líneas de proceso, higiénicas e industriales. Te asesoramos en la selección de diámetro, cédula y aleación según la presión, el fluido y la norma que aplique a tu instalación.",
    bullets: [
      "Diferentes diámetros y espesores (cédulas)",
      "Aleaciones 304 y 316 según el nivel de corrosión requerido",
      "Codos, tees, bridas, uniones y demás accesorios",
      "Instalación y soldadura de tubería incluida como servicio",
      "Aplicaciones en líneas hidráulicas, neumáticas y de proceso",
    ],
  },
  {
    id: "bombas",
    numero: "05",
    icono: Waves,
    nombre: "Bombas",
    resumen: "Hidráulicas, neumáticas y sumergibles",
    imagen: "/productos/bombas.jpg",
    alt: "Bomba industrial para transferencia de fluidos",
    descripcion:
      "Bombas para transferencia de fluidos en procesos industriales. Te ayudamos a seleccionar el equipo correcto según el tipo de fluido, el caudal y la presión de trabajo que necesita tu proceso, e integramos su instalación y mantenimiento.",
    bullets: [
      "Bombas hidráulicas para sistemas de alta presión",
      "Bombas neumáticas para fluidos y ambientes exigentes",
      "Bombas sumergibles para achique y transferencia de agua",
      "Asesoría en selección según caudal, presión y tipo de fluido",
      "Instalación, mantenimiento y reparación de equipos de bombeo",
    ],
  },
];

export default function Productos() {
  usePageMeta(
    "Catálogo de Productos | Sistemas Lean, Rodajas, Tubería Inoxidable y Bombas — TIFERROS",
    "Catálogo de productos TIFERROS: sistemas Lean Manufacturing, ruedas y rodajas industriales, rieles y bolas de transferencia, tubería de inoxidable y bombas. Cotización personalizada, sin mínimos de compra."
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-grafito-950 overflow-hidden">
        <img
          src="/productos/rack.jpg"
          alt="Componentes y sistemas para manejo de materiales industriales"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-grafito-950 via-grafito-950/90 to-grafito-950/50" aria-hidden="true" />
        <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-aviso-500 font-display font-semibold text-lg uppercase tracking-[0.3em]">
              <span className="inline-block w-8 h-0.5 bg-aviso-500" aria-hidden="true" />
              Catálogo de productos
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-white leading-[1.02]">
              Componentes para <span className="text-brand-500">material handling</span> e{" "}
              <span className="text-aviso-500">instalaciones industriales</span>
            </h1>
            <p className="mt-6 text-lg text-steel-200 leading-relaxed max-w-2xl">
              Sistemas Lean, ruedas y rodajas, rieles y bolas de transferencia, tubería de
              inoxidable y bombas. Piezas y sistemas seleccionados para que tu línea, tu rack o
              tu instalación funcionen desde el primer día.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold uppercase tracking-wide px-8 py-4 text-sm transition-colors shadow-xl shadow-brand-500/25"
              >
                <ClipboardList size={18} /> Solicitar cotización
              </Link>
              <a
                href="#sistemas-lean"
                className="inline-flex items-center justify-center gap-2 border-2 border-aviso-500 text-aviso-500 hover:bg-aviso-500 hover:text-grafito-950 font-bold uppercase tracking-wide px-8 py-4 text-sm transition-colors"
              >
                Ver productos <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="stripes-aviso h-2 relative" aria-hidden="true" />
      </section>

      {/* ============ BARRA DE CONFIANZA ============ */}
      <section className="bg-white border-b border-steel-200">
        <div className="mx-auto max-w-7xl px-4 py-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Cotización personalizada por proyecto",
            "Sin mínimos de compra en catálogo",
            "Asesoría técnica para elegir el producto correcto",
            "Entrega en taller o en tu planta, en Guanajuato y el Bajío",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-steel-700 font-medium leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ NAV RÁPIDA A CATEGORÍAS ============ */}
      <nav
        aria-label="Categorías de producto"
        className="bg-steel-100 border-b border-steel-200 sticky top-[104px] z-30 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto">
          {CATEGORIAS_PRODUCTO.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 text-xs font-bold uppercase tracking-wider px-4 py-2.5 border border-steel-300 bg-white text-steel-700 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              {cat.nombre}
            </a>
          ))}
        </div>
      </nav>

      {/* ============ SECCIONES POR CATEGORÍA ============ */}
      {CATEGORIAS_PRODUCTO.map((cat, i) => {
        const Icono = cat.icono;
        const impar = i % 2 === 1;
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-40 py-16 md:py-20 ${impar ? "bg-steel-100" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4">
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  impar ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Texto */}
                <div>
                  <p className="inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.25em] text-brand-500">
                    <span className="text-steel-400">{cat.numero} /</span> {cat.resumen}
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold uppercase text-grafito-900 leading-tight">
                    {cat.nombre}
                  </h2>
                  <p className="mt-4 text-steel-600 leading-relaxed">{cat.descripcion}</p>

                  <ul className="mt-6 space-y-2.5">
                    {cat.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-steel-700">
                        <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {/* Botón sin destino por ahora: cada categoría tendrá su propio catálogo próximamente */}
                    <button
                      type="button"
                      disabled
                      title="Catálogo detallado próximamente"
                      className="inline-flex items-center gap-2 bg-grafito-200 text-grafito-500 font-bold uppercase text-xs tracking-wider px-6 py-3.5 cursor-not-allowed"
                    >
                      <PackageSearch size={16} /> Ver catálogo de productos
                    </button>
                    <Link
                      to={`/contacto?producto=${encodeURIComponent(cat.nombre)}`}
                      className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-bold uppercase text-xs tracking-wider"
                    >
                      Solicitar este producto <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Imagen */}
                <div className="relative">
                  <div className="absolute -top-5 -left-5 w-24 h-24 border-2 border-aviso-500/60 hidden sm:block" aria-hidden="true" />
                  <div className="relative w-16 h-16 bg-grafito-900 flex items-center justify-center absolute -top-6 left-6 z-10 shadow-xl">
                    <Icono size={28} className="text-aviso-500" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <img
                    src={cat.imagen}
                    alt={cat.alt}
                    loading="lazy"
                    className="relative w-full h-[340px] md:h-[400px] object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============ CTA FINAL ============ */}
      <CTASection
        titulo="¿No encuentras lo que necesitas?"
        subtitulo="Trabajamos con un amplio portafolio de componentes y podemos conseguir piezas fuera de catálogo. Cuéntanos qué buscas y te confirmamos disponibilidad y precio."
      />
    </>
  );
}
