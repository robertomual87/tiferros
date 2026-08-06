import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { NAVEGACION, SITE } from "../data/site";

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg shadow-black/20">
      {/* Barra superior de contacto */}
      <div className="bg-grafito-950 text-steel-300 text-xs">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 overflow-hidden">
            <a
              href={`tel:+52${SITE.telefono.replace(/\s/g, "")}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-aviso-400 transition-colors"
            >
              <Phone size={12} /> {SITE.telefono}
            </a>
            <a
              href={`mailto:${SITE.correo}`}
              className="flex items-center gap-1.5 hover:text-aviso-400 transition-colors"
            >
              <Mail size={12} /> {SITE.correo}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin size={12} /> {SITE.direccion}, {SITE.ciudad}
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-steel-400">
              <Clock size={12} /> {SITE.horario}
            </span>
          </div>
        </div>
      </div>

      {/* Franja amarilla señalética */}
      <div className="stripes-aviso h-1.5" aria-hidden="true" />

      {/* Navegación principal */}
      <div className="bg-grafito-900/95 backdrop-blur border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-[72px]">
            <Logo variante="claro" />

            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {NAVEGACION.map((item) => (
                <NavLink
                  key={item.ruta}
                  to={item.ruta}
                  end={item.ruta === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] font-semibold uppercase tracking-wider border-b-2 transition-colors ${
                      isActive
                        ? "text-aviso-400 border-aviso-500"
                        : "text-steel-200 border-transparent hover:text-white hover:border-brand-500"
                    }`
                  }
                >
                  {item.nombre}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/contacto"
                className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold uppercase tracking-wide px-5 py-2.5 transition-colors"
              >
                Cotizar <ArrowRight size={15} />
              </Link>
              <button
                className="lg:hidden text-white p-2 -mr-2"
                onClick={() => setAbierto((v) => !v)}
                aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={abierto}
              >
                {abierto ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {abierto && (
          <nav className="lg:hidden border-t border-white/10 bg-grafito-900" aria-label="Menú móvil">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-1">
              {NAVEGACION.map((item) => (
                <NavLink
                  key={item.ruta}
                  to={item.ruta}
                  end={item.ruta === "/"}
                  onClick={() => setAbierto(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-grafito-800 text-aviso-400 border-l-4 border-aviso-500"
                        : "text-steel-200 hover:bg-grafito-800 hover:text-white border-l-4 border-transparent"
                    }`
                  }
                >
                  {item.nombre}
                </NavLink>
              ))}
              <Link
                to="/contacto"
                onClick={() => setAbierto(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-500 text-white font-bold uppercase tracking-wide px-5 py-3"
              >
                Solicitar cotización <ArrowRight size={16} />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
