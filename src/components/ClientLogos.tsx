import { CLIENTES } from "../data/site";
import SectionHeading from "./SectionHeading";

/**
 * CLIENTES TIFERROS
 * Logotipos de clientes con autorización de uso
 */
export default function ClientLogos({ titulo = "Empresas que confían en nosotros" }: { titulo?: string }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          alineacion="centro"
          etiqueta="Clientes"
          titulo={titulo}
          subtitulo="Hemos colaborado con empresas líderes de la industria en el Bajío, brindando servicios de fabricación, reparación y mejora de procesos."
        />
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENTES.map((cliente) => {
            // Mapeo de nombres a archivos de imagen
            const imagenMap: Record<string, string> = {
              "Deacero": "/Deacero.jpg",
              "Bachoco": "/Bachoco.jpg",
              "Losifra": "/Losifra.jpg",
              "Abocosa": "/Abocosa.jpg",
              "Herdez": "/Herdez.jpg",
              "Adm": "/Adm.jpg",
              "Cordicontrol": "/Cordicontrol.jpg"
            };
            
            const imagenSrc = imagenMap[cliente.nombre] || null;
            
            return (
              <li
                key={cliente.nombre}
                className="flex items-center justify-center border border-steel-200 bg-steel-100/60 px-4 py-6 hover:border-brand-500 hover:bg-white transition-colors group min-h-[100px]"
              >
                {imagenSrc ? (
                  <img
                    src={imagenSrc}
                    alt={`Logo de ${cliente.nombre}`}
                    className="max-w-[150px] max-h-[70px] w-auto h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                ) : (
                  // Fallback: si no encuentra la imagen, muestra el texto
                  <span className="text-center">
                    <span className="block font-display font-bold text-lg uppercase text-grafito-900 leading-tight">
                      {cliente.nombre}
                    </span>
                    <span className="block text-[11px] uppercase tracking-wider text-steel-500">
                      {cliente.rubro}
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-center text-xs text-steel-400">
          Logotipos publicados únicamente con autorización de uso de cada empresa.
        </p>
      </div>
    </section>
  );
}