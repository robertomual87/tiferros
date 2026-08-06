import { Link } from "react-router-dom";
import {
  Layers,
  Plug,
  SlidersHorizontal,
  Disc3,
  Rows3,
  Warehouse,
  Box,
  ClipboardList,
} from "lucide-react";
import type { Producto } from "../data/productos";

const ICONO_POR_CATEGORIA: Record<string, typeof Box> = {
  "Tubos modulares": Layers,
  "Conectores negros": Plug,
  "Conectores zincados": Plug,
  Rieles: SlidersHorizontal,
  Rodajas: Disc3,
  "Perfiles PVC": Rows3,
  "Soluciones Lean": Warehouse,
};

/**
 * Marcador visual temporal para productos sin imagen.
 * Reemplazar por fotografías reales: agrega la URL en `producto.imagen`
 * y el componente la mostrará automáticamente.
 */
export function ImagenProducto({ producto }: { producto: Producto }) {
  const Icono = ICONO_POR_CATEGORIA[producto.categoria] ?? Box;

  if (producto.imagen) {
    return (
      <div className="aspect-[4/3] overflow-hidden bg-grafito-800">
        <img
          src={producto.imagen}
          alt={`${producto.nombre} — código ${producto.codigo}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] bg-grafito-900 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-aviso-500 to-brand-500" aria-hidden="true" />
      <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4 text-center">
        <Icono size={44} className="text-steel-500" strokeWidth={1.4} aria-hidden="true" />
        <span className="font-mono text-steel-400 text-lg font-bold tracking-wider">
          {producto.codigo}
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-steel-500">
          Imagen de referencia
        </span>
      </div>
    </div>
  );
}

/** Tarjeta de producto del catálogo B2B. */
export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className="group flex flex-col border border-steel-200 bg-white hover:border-brand-500 hover:shadow-xl hover:shadow-grafito-900/10 transition-all duration-300 overflow-hidden">
      <ImagenProducto producto={producto} />
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-grafito-900 leading-snug">{producto.nombre}</h3>
          <span className="shrink-0 bg-grafito-900 text-aviso-400 font-mono text-[11px] font-bold px-2 py-1">
            {producto.codigo}
          </span>
        </div>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-brand-600">
          {producto.categoria}
        </p>
        <p className="mt-2 text-sm text-steel-600 leading-relaxed line-clamp-3">
          {producto.descripcion}
        </p>
        <div className="mt-auto pt-4">
          <Link
            to={`/contacto?producto=${encodeURIComponent(producto.codigo)}`}
            className="inline-flex w-full items-center justify-center gap-2 border-2 border-grafito-900 text-grafito-900 hover:bg-brand-500 hover:border-brand-500 hover:text-white font-bold uppercase text-xs tracking-wider px-4 py-2.5 transition-colors"
          >
            <ClipboardList size={14} /> Cotizar este producto
          </Link>
        </div>
      </div>
    </article>
  );
}
