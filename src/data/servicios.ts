export interface Servicio {
  id: string;
  titulo: string;
  corto: string;
  descripcion: string;
  capacidades: string[];
  materiales?: string[];
  piezas?: string[];
  imagen: string;
  alt: string;
}

export const SERVICIOS: Servicio[] = [
  {
    id: "maquinado",
    titulo: "Maquinado industrial de precisión",
    corto: "Torneado, fresado, rectificado y fabricación de piezas sobre muestra o plano.",
    descripcion:
      "Fabricamos y reparamos piezas industriales con maquinado convencional de precisión. Trabajamos sobre plano, muestra o modelo, con tolerancias controladas y materiales que van del acero al carbón hasta plásticos de ingeniería.",
    capacidades: [
      "Torneado convencional",
      "Fresado convencional",
      "Taladrado",
      "Roscado",
      "Mandrinado",
      "Rectificado plano y cilíndrico",
      "Fabricación sobre muestra o plano",
      "Reparación de piezas desgastadas",
    ],
    piezas: [
      "Engranes rectos",
      "Engranes cónicos",
      "Engranes helicoidales",
      "Engranes cónico-helicoidales",
      "Coronas y sinfines",
      "Piñones",
      "Rodillos",
      "Flechas escalonadas",
      "Bujes",
    ],
    materiales: [
      "Acero al carbón",
      "Aceros aleados",
      "Acero inoxidable",
      "Aluminio",
      "Bronce",
      "Latón",
      "Baquelita",
      "Plásticos de ingeniería",
    ],
    imagen:
      "/Maquinado.jpg",
    alt: "Operador de torno industrial maquinando una pieza metálica en taller de TIFERROS",
  },
  {
    id: "paileria",
    titulo: "Pailería industrial y fabricación metálica",
    corto: "Corte, doblado, rolado y conformado de lámina, perfil, tubo y placa.",
    descripcion:
      "Fabricamos estructuras y componentes metálicos a la medida: desde soportes y bastidores hasta tanques, tolvas, ductos y recipientes industriales. También realizamos modificaciones y adecuaciones de equipos existentes.",
    capacidades: [
      "Corte, doblado, rolado y conformado",
      "Trabajo en lámina, perfiles, tubos y placas",
      "Estructuras metálicas",
      "Soportes, bastidores y bases de maquinaria",
      "Tanques, tolvas y ductos",
      "Recipientes industriales",
      "Carcasas, gabinetes y protecciones",
      "Cubiertas y modificaciones",
      "Adecuaciones y refuerzos",
    ],
    imagen:
      "/Paileria.jpg",
    alt: "Soldador realizando fabricación metálica con chispas en taller industrial",
  },
  {
    id: "soldadura",
    titulo: "Soldadura especializada e inspección",
    corto: "Procesos TIG, MIG y SMAW con soldadores certificados ante AWS.",
    descripcion:
      "Ejecutamos soldadura especializada con soldadores calificados ante AWS y respaldamos cada unión con inspección y ensayos no destructivos: inspección visual, líquidos penetrantes Nivel 2 y ultrasonido conforme a SNT-TC-1A.",
    capacidades: [
      "Soldadura TIG",
      "Soldadura MIG",
      "Soldadura SMAW",
      "Reparación de piezas",
      "Recuperación dimensional",
      "Recubrimientos protectores y anticorrosivos",
      "Acorazado y forrado contra desgaste o corrosión",
      "Líquidos penetrantes Nivel 2",
      "Inspección visual",
      "Ultrasonido conforme a SNT-TC-1A",
      "Soldadores certificados ante AWS",
    ],
    imagen:
      "/Soldaduraesp.png",
    alt: "Soldador certificado ejecutando soldadura especializada en taller industrial",
  },
  {
    id: "tuberias",
    titulo: "Instalación y mantenimiento de tuberías industriales",
    corto: "Líneas hidráulicas, neumáticas, de solubles y de proceso.",
    descripcion:
      "Instalamos, modificamos y mantenemos sistemas de tuberías industriales en planta: líneas hidráulicas, neumáticas, de solubles y de proceso, con equipos de bombeo, drenes y reparación de fugas.",
    capacidades: [
      "Líneas hidráulicas",
      "Líneas neumáticas",
      "Líneas de solubles",
      "Líneas de proceso",
      "Equipos de bombeo",
      "Drenes de descarga",
      "Reparación de fugas",
      "Modificación y ampliación de tuberías",
    ],
    materiales: ["PVC", "Acero inoxidable", "Cobre", "Aluminio", "Acero A-36"],
    imagen:
      "/Tuberia.png",
    alt: "Tuberías y equipos de acero inoxidable en planta industrial",
  },
  {
    id: "automatizacion",
    titulo: "Automatización industrial",
    corto: "Dispositivos, PLC, control de procesos y sistemas de transporte.",
    descripcion:
      "Diseñamos, fabricamos e instalamos dispositivos y sistemas de automatización para optimizar tus procesos: programación PLC, control de procesos, conveyors, manipuladores y bandas transportadoras, con montaje mecánico, eléctrico y neumático.",
    capacidades: [
      "Diseño, fabricación e instalación de dispositivos de automatización",
      "Programación PLC",
      "Control de procesos",
      "Monitoreo y control de alumbrado",
      "Sistemas neumáticos",
      "Sistemas hidráulicos",
      "Sistemas eléctricos y electrónicos",
      "Automatización de conveyors",
      "Fabricación de repuestos",
      "Manipuladores y transportadores",
      "Bandas transportadoras",
      "Vallados de seguridad e interlocks",
      "Cabinas de soldadura",
      "Montaje mecánico, eléctrico y neumático",
    ],
    imagen:
      "/Automatizacion.png",
    alt: "Brazo robótico industrial en instalación de automatización",
  },
  {
    id: "diseno",
    titulo: "Diseño industrial, modelado y memorias de cálculo",
    corto: "Ingeniería de detalle con modelado 3D y documentación técnica.",
    descripcion:
      "Desarrollamos la ingeniería de tus proyectos: diseño de piezas y conjuntos, modelado 3D, planos de fabricación, despieces y memorias de cálculo con revisión de cargas y documentación técnica completa.",
    capacidades: [
      "Diseño de piezas y conjuntos",
      "Modelado 3D",
      "Planos de fabricación",
      "Despieces",
      "Memorias de cálculo",
      "Revisión de cargas",
      "Documentación técnica",
    ],
    imagen:
      "/Diseno.jpg",
    alt: "Ingeniero realizando modelado 3D y diseño industrial en estación CAD",
  },
];
