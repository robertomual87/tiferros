import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { NAVEGACION, SITE } from "../data/site";
import { SERVICIOS } from "../data/servicios";

export default function Footer() {
  return (
    <footer className="bg-grafito-950 text-steel-400">

      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div>
          <Logo variante="claro" />
          <p className="mt-5 text-sm leading-relaxed">
            {SITE.descripcion}
          </p>
          <p className="mt-4 text-sm font-medium text-steel-300 italic">
            “{SITE.eslogan}”
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["REPSE", "DC3", "AWS", "END Nivel 2"].map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1 border border-steel-600/50 text-steel-300 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1"
              >
                <ShieldCheck size={12} className="text-aviso-500" /> {s}
              </span>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <nav aria-label="Navegación del pie de página">
          <h3 className="text-white font-display font-semibold text-lg uppercase tracking-wider">
            Navegación
          </h3>
          <ul className="mt-4 grid gap-2 text-sm">
            {NAVEGACION.map((item) => (
              <li key={item.ruta}>
                <Link
                  to={item.ruta}
                  className="hover:text-aviso-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-brand-500" /> {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Servicios */}
        <div>
          <h3 className="text-white font-display font-semibold text-lg uppercase tracking-wider">
            Servicios
          </h3>
          <ul className="mt-4 grid gap-2 text-sm">
            {SERVICIOS.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/servicios#${s.id}`}
                  className="hover:text-aviso-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-brand-500" /> {s.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-display font-semibold text-lg uppercase tracking-wider">
            Contacto
          </h3>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} className="text-aviso-500 shrink-0 mt-0.5" />
              <span>
                {SITE.direccion}
                <br />
                {SITE.ciudad}
              </span>
            </li>
            <li>
              <a
                href={`tel:+52${SITE.telefono.replace(/\s/g, "")}`}
                className="flex gap-2.5 hover:text-aviso-400 transition-colors"
              >
                <Phone size={16} className="text-aviso-500 shrink-0 mt-0.5" />
                {SITE.telefonoIntl}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.correo}`}
                className="flex gap-2.5 hover:text-aviso-400 transition-colors"
              >
                <Mail size={16} className="text-aviso-500 shrink-0 mt-0.5" />
                {SITE.correo}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs text-steel-500">
            Atención: {SITE.contacto}
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-steel-500">
          <p>
            © {new Date().getFullYear()} {SITE.nombre} — Todos los derechos reservados.
          </p>
          <p>Maquinado · Pailería · Soldadura · Tuberías · Automatización · Lean Manufacturing</p>
        </div>
      </div>
    </footer>
  );
}
