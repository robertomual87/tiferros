import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  User,
  Building2,
  FileText,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import { SITE, WHATSAPP_URL } from "../data/site";
import { SERVICIOS } from "../data/servicios";

const inputClase =
  "w-full border border-steel-300 bg-white px-4 py-3 text-sm text-grafito-900 placeholder:text-steel-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export default function Contacto() {
  usePageMeta(
    "Contacto y Cotizaciones | TIFERROS — Villagrán, Guanajuato",
    "Solicita tu cotización con TIFERROS: Cuauhtémoc No. 705, Villagrán, Guanajuato. Tel. 411 133 0810 · roberto@tiferros.com · WhatsApp 52 411 133 0810."
  );

  const [params] = useSearchParams();
  const producto = params.get("producto") ?? "";
  const servicio = params.get("servicio") ?? "";
  const proyecto = params.get("proyecto") ?? "";
  const enviado = params.get("enviado") === "1";

  const [productoField, setProductoField] = useState(producto);
  const [enviando, setEnviando] = useState(false);

  return (
    <>
      <PageHeader
        etiqueta="Contacto"
        titulo="Solicita tu cotización"
        subtitulo="Cuéntanos qué necesitas y te respondemos con una cotización clara, con tiempos de entrega y respaldo técnico."
      />

      <section className="bg-steel-100 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          {enviado && (
            <div className="mb-8 flex items-start gap-3 border-2 border-green-600 bg-green-50 p-5">
              <CheckCircle2 size={22} className="text-green-600 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold text-green-800">¡Solicitud enviada!</p>
                <p className="text-sm text-green-700">
                  Gracias por contactar a TIFERROS. Revisaremos tu solicitud y te responderemos a la
                  brevedad en horario de oficina.
                </p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Datos de contacto */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-grafito-950 text-white p-6">
                <h2 className="font-display font-bold text-2xl uppercase">Información de contacto</h2>
                <p className="mt-2 text-sm text-steel-300">
                  Atención: <strong className="text-white">{SITE.contacto}</strong>
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin size={18} className="text-aviso-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      {SITE.direccion}
                      <br />
                      {SITE.ciudad}
                    </span>
                  </li>
                  <li>
                    <a href={`tel:+52${SITE.telefono.replace(/\s/g, "")}`} className="flex gap-3 hover:text-aviso-400 transition-colors">
                      <Phone size={18} className="text-aviso-500 shrink-0 mt-0.5" aria-hidden="true" />
                      {SITE.telefonoIntl}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.correo}`} className="flex gap-3 hover:text-aviso-400 transition-colors break-all">
                      <Mail size={18} className="text-aviso-500 shrink-0 mt-0.5" aria-hidden="true" />
                      {SITE.correo}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle size={18} className="text-aviso-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      WhatsApp: {SITE.telefonoIntl}
                      <br />
                      <span className="text-xs text-steel-400">{SITE.horario}</span>
                    </span>
                  </li>
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb857] text-white font-bold uppercase tracking-wide text-sm px-6 py-3.5 transition-colors"
                >
                  <MessageCircle size={17} /> Enviar WhatsApp
                </a>
              </div>

              {/* Mapa */}
              <div className="border border-steel-200 bg-white overflow-hidden">
                <iframe
                  title="Mapa de ubicación de TIFERROS — Cuauhtémoc No. 705, Villagrán, Guanajuato"
                  src="https://www.google.com/maps?q=Cuauht%C3%A9moc%20705%2C%20Villagr%C3%A1n%2C%20Guanajuato%2C%20M%C3%A9xico&output=embed"
                  className="w-full h-64 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <p className="px-4 py-3 text-xs text-steel-500 flex items-center gap-2">
                  <MapPin size={14} className="text-brand-500" />
                  {SITE.direccion}, {SITE.ciudad}
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-3">
              <form
                action="https://formsubmit.co/roberto@tiferros.com"
                method="POST"
                onSubmit={() => setEnviando(true)}
                className="bg-white border border-steel-200 p-6 md:p-8"
              >
                {/* Configuración FormSubmit (temporal; ver README para conectar backend propio) */}
                <input type="hidden" name="_subject" value="Nueva solicitud de cotización — Sitio web TIFERROS" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.tiferros.com/contacto?enviado=1"
                />

                <h2 className="font-display font-bold text-3xl uppercase text-grafito-900">
                  Formulario de cotización
                </h2>
                <p className="mt-1.5 text-sm text-steel-500">
                  Los campos marcados con * son obligatorios.
                </p>

                {(producto || servicio || proyecto) && (
                  <div className="mt-4 flex flex-wrap gap-2 bg-brand-50 border border-brand-500/30 p-3 text-sm">
                    <FileText size={16} className="text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-brand-700">
                      {producto && (
                        <>Solicitaste cotización del producto: <strong>{producto}</strong></>
                      )}
                      {servicio && (
                        <>Solicitaste cotización del servicio: <strong>{servicio}</strong></>
                      )}
                      {proyecto && (
                        <>Interesado en: <strong>{proyecto}</strong></>
                      )}
                    </span>
                  </div>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grafito-900">
                      <User size={13} aria-hidden="true" /> Nombre *
                    </label>
                    <input id="nombre" name="nombre" required placeholder="Tu nombre completo" className={`${inputClase} mt-1.5`} />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grafito-900">
                      <Building2 size={13} aria-hidden="true" /> Empresa
                    </label>
                    <input id="empresa" name="empresa" placeholder="Nombre de tu empresa" className={`${inputClase} mt-1.5`} />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grafito-900">
                      <Phone size={13} aria-hidden="true" /> Teléfono / WhatsApp *
                    </label>
                    <input id="telefono" name="telefono" type="tel" required placeholder="10 dígitos" className={`${inputClase} mt-1.5`} />
                  </div>
                  <div>
                    <label htmlFor="correo" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grafito-900">
                      <Mail size={13} aria-hidden="true" /> Correo electrónico *
                    </label>
                    <input id="correo" name="correo" type="email" required placeholder="correo@empresa.com" className={`${inputClase} mt-1.5`} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="servicio" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grafito-900">
                      <FileText size={13} aria-hidden="true" /> Servicio requerido *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      defaultValue={servicio || ""}
                      className={`${inputClase} mt-1.5`}
                    >
                      <option value="" disabled>
                        Selecciona un servicio…
                      </option>
                      {SERVICIOS.map((s) => (
                        <option key={s.id} value={s.titulo}>
                          {s.titulo}
                        </option>
                      ))}
                      <option value="Productos / Material handling">Productos / Material handling</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="producto" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grafito-900">
                      <FileText size={13} aria-hidden="true" /> Producto de interés (opcional)
                    </label>
                    <input
                      id="producto"
                      name="producto"
                      value={productoField}
                      onChange={(e) => setProductoField(e.target.value)}
                      placeholder="Código del catálogo (ej. DP1T9BL)"
                      className={`${inputClase} mt-1.5`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="mensaje" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grafito-900">
                      <MessageCircle size={13} aria-hidden="true" /> Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      placeholder="Describe tu proyecto, pieza o reparación: cantidades, materiales, planos, urgencia…"
                      className={`${inputClase} mt-1.5 resize-y`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-bold uppercase tracking-wide px-8 py-4 text-sm transition-colors"
                >
                  <Send size={16} /> {enviando ? "Enviando…" : "Enviar solicitud"}
                </button>
                <p className="mt-4 text-xs text-steel-400 leading-relaxed">
                  Al enviar, tus datos se usan únicamente para atender tu solicitud de cotización.
                  Preferimos WhatsApp o correo para darte seguimiento rápido.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
