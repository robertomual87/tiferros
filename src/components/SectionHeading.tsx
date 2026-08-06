interface Props {
  etiqueta: string;
  titulo: string;
  subtitulo?: string;
  alineacion?: "izquierda" | "centro";
}

/** Encabezado de sección: etiqueta amarilla + título display + subtítulo. */
export default function SectionHeading({ etiqueta, titulo, subtitulo, alineacion = "izquierda" }: Props) {
  const centro = alineacion === "centro";
  return (
    <div className={`max-w-3xl ${centro ? "mx-auto text-center" : ""}`}>
      <p className="inline-flex items-center gap-2 text-brand-600 font-display font-semibold text-lg uppercase tracking-[0.25em]">
        <span className="inline-block w-8 h-0.5 bg-aviso-500" aria-hidden="true" />
        {etiqueta}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold uppercase text-grafito-900 leading-tight">
        {titulo}
      </h2>
      {subtitulo && <p className="mt-4 text-steel-600 leading-relaxed">{subtitulo}</p>}
    </div>
  );
}
