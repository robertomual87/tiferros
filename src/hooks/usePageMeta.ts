import { useEffect } from "react";

/**
 * SEO por página: actualiza el title y la meta description
 * de forma dinámica (SPA). Los valores por defecto viven en index.html.
 */
export function usePageMeta(titulo: string, descripcion: string) {
  useEffect(() => {
    document.title = titulo;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", descripcion);

    // Actualiza también Open Graph
    let og = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (og) og.setAttribute("content", titulo);
    og = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (og) og.setAttribute("content", descripcion);

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [titulo, descripcion]);
}
