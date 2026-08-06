/**
 * Datos generales de TIFERROS.
 * Si cambia algún dato de contacto, actualízalo aquí (se usa en todo el sitio).
 */
export const SITE = {
  nombre: "TIFERROS",
  eslogan: "Calidad, precisión y confianza para tus proyectos industriales.",
  descripcion:
    "Empresa especializada en servicios industriales y transformación de metales: maquinado, pailería, soldadura, tuberías industriales, automatización, diseño industrial y productos Lean Manufacturing.",
  telefono: "411 133 0810",
  telefonoIntl: "+52 411 133 0810",
  whatsappNumero: "524111330810",
  correo: "roberto@tiferros.com",
  direccion: "Cuauhtémoc No. 705",
  ciudad: "Villagrán, Guanajuato, México",
  contacto: "Roberto Guadalupe Muñiz Álvarez",
  url: "https://www.tiferros.com",
  horario: "Lun – Vie · 8:00 – 18:00",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumero}?text=${encodeURIComponent(
  "Hola TIFERROS, me gustaría solicitar una cotización para un proyecto industrial."
)}`;

/** Sellos de confianza mostrados en el hero del inicio. */
export const SELLOS = ["REPSE", "DC3", "AWS", "END Nivel 2", "Diseño y memorias de cálculo"];

/**
 * CLIENTES: empresa ha trabajado con estas compañías.
 * IMPORTANTE: los logotipos solo deben publicarse si se tiene autorización
 * de uso de imagen por parte de cada cliente. Por ahora se muestran como
 * textos simples; reemplazar por logotipos autorizados en /public/images/clientes.
 */
export const CLIENTES = [
  { nombre: "Deacero", rubro: "Acero" },
  { nombre: "Bachoco", rubro: "Alimentos" },
  { nombre: "Losifra", rubro: "Industria" },
  { nombre: "Abocosa", rubro: "Construcción" },
  { nombre: "Herdez", rubro: "Alimentos" },
  { nombre: "Adm", rubro: "Agroindustria" },
  { nombre: "Cordicontrol", rubro: "Servicios" },
];

/** Menú principal del sitio. */
export const NAVEGACION = [
  { nombre: "Inicio", ruta: "/" },
  { nombre: "Nosotros", ruta: "/nosotros" },
  { nombre: "Servicios", ruta: "/servicios" },
  { nombre: "Productos", ruta: "/productos" },
  { nombre: "Proyectos", ruta: "/proyectos" },
  { nombre: "Certificaciones", ruta: "/certificaciones" },
  { nombre: "Contacto", ruta: "/contacto" },
];

/** Certificaciones y capacidades (solo información real proporcionada por la empresa). */
export const CERTIFICACIONES = [
  {
    grupo: "Registro y cumplimiento",
    descripcion: "Requisitos oficiales para operar como subcontratista industrial.",
    items: [
      {
        nombre: "REPSE",
        detalle:
          "Registro en el Padrón Público de Contratistas de Subcontratación (REPSE), requisito para prestar servicios especializados ante la STPS.",
      },
    ],
  },
  {
    grupo: "Capacitación y seguridad (DC3)",
    descripcion: "Personal capacitado con constancias DC3 vigentes.",
    items: [
      { nombre: "Trabajos en caliente", detalle: "Personal capacitado para ejecutar trabajos en caliente con control de riesgos." },
      { nombre: "Trabajos en altura", detalle: "Capacitación para trabajos en altura con uso correcto de equipos de protección contra caídas." },
      { nombre: "Manejo de equipos de elevación", detalle: "Operación segura de montacargas, grúas y equipos de elevación." },
      { nombre: "Manejo de extintores", detalle: "Capacitación en combate de incendios con manejo de extintores." },
    ],
  },
  {
    grupo: "Ensayos no destructivos (END)",
    descripcion: "Control de calidad en uniones soldadas y materiales.",
    items: [
      { nombre: "Líquidos penetrantes — Nivel 2", detalle: "Certificación Nivel 2 en inspección por líquidos penetrantes para detección de discontinuidades superficiales." },
      { nombre: "Inspección visual", detalle: "Inspección visual de uniones soldadas y fabricaciones conforme a criterios de aceptación." },
      { nombre: "Ultrasonido (SNT-TC-1A)", detalle: "Inspección ultrasónica conforme a SNT-TC-1A para detección de discontinuidades internas." },
    ],
  },
  {
    grupo: "Soldadura",
    descripcion: "Garantía de calidad en procesos de unión.",
    items: [
      { nombre: "Soldadores certificados ante AWS", detalle: "Soldadores calificados ante AWS para procesos TIG, MIG y SMAW." },
    ],
  },
  {
    grupo: "Ingeniería y diseño",
    descripcion: "Desarrollo de proyectos con respaldo técnico documentado.",
    items: [
      { nombre: "Diseño industrial", detalle: "Certificación para diseño industrial: piezas, conjuntos y sistemas." },
      { nombre: "Modelado", detalle: "Modelado 3D de piezas y conjuntos para visualización y fabricación." },
      { nombre: "Memorias de cálculo", detalle: "Elaboración de memorias de cálculo con revisión de cargas y documentación técnica." },
    ],
  },
];
