import type { ReactNode } from "react";

interface Props {
  titulo: string;
  subtitulo?: string;
  etiqueta?: string;
  children?: ReactNode;
}

/** Encabezado oscuro para páginas interiores. */
export default function PageHeader({ titulo, subtitulo, etiqueta, children }: Props) {
  return (
    <section className="relative bg-grafito-950 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        {etiqueta && (
          <p className="text-aviso-500 font-display font-semibold text-lg uppercase tracking-[0.3em]">
            {etiqueta}
          </p>
        )}
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight max-w-4xl">
          {titulo}
        </h1>
        {subtitulo && (
          <p className="mt-4 text-steel-300 max-w-3xl leading-relaxed">{subtitulo}</p>
        )}
        {children}
      </div>
      <div className="stripes-aviso h-1.5 relative" aria-hidden="true" />
    </section>
  );
}
