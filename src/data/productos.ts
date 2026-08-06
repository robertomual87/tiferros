/**
 * CATÁLOGO DE PRODUCTOS TIFERROS
 * ------------------------------------------------------------
 * Catálogo B2B de cotización (sin precios). Códigos y descripciones
 * técnicamente genéricos, sin marca de proveedor.
 *
 * NOTA: las imágenes de producto son marcadores visuales temporales
 * (SVG generado por componente). Para usar imágenes reales, agrega
 * un campo `imagen` al producto y coloca el archivo en /public/images/productos/.
 */

export interface Producto {
  codigo: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  /** Imagen opcional. Si no existe, se muestra un marcador generado. */
  imagen?: string;
}

export const CATEGORIAS = [
  "Tubos modulares",
  "Conectores negros",
  "Conectores zincados",
  "Rieles",
  "Accesorios para riel",
  "Accesorios para tubo deslizable",
  "Accesorios plásticos",
  "Accesorios varios",
  "Patas niveladoras e insertos",
  "Perfiles PVC",
  "Sujetadores",
  "Rodajas",
  "Herramientas",
  "Soluciones Lean",
] as const;

const producto = (
  codigo: string,
  nombre: string,
  categoria: (typeof CATEGORIAS)[number],
  descripcion: string
): Producto => ({ codigo, nombre, categoria, descripcion });

const p = producto;

/* ------------------------------------------------------------------ */
/* TUBOS MODULARES                                                     */
/* ------------------------------------------------------------------ */
const TUBOS_DESC =
  "Tubo modular de aluminio con ranuras para el ensamble de estructuras de material handling, estaciones de trabajo, racks y carros industriales.";

const tubos: Producto[] = [
  p("DP1T9BL", "Tubo modular — negro", "Tubos modulares", `${TUBOS_DESC} Acabado color negro.`),
  p("DP1T9BR", "Tubo modular — café", "Tubos modulares", `${TUBOS_DESC} Acabado color café.`),
  p("DP1T9IV", "Tubo modular — marfil", "Tubos modulares", `${TUBOS_DESC} Acabado color marfil.`),
  p("DP1T9RD", "Tubo modular — rojo", "Tubos modulares", `${TUBOS_DESC} Acabado color rojo.`),
  p("DP1T9GR", "Tubo modular — gris", "Tubos modulares", `${TUBOS_DESC} Acabado color gris.`),
  p("DP1T9VD", "Tubo modular — verde", "Tubos modulares", `${TUBOS_DESC} Acabado color verde.`),
  p("DP1T9WH", "Tubo modular — blanco", "Tubos modulares", `${TUBOS_DESC} Acabado color blanco.`),
  p("DP2T7SS", "Tubo modular compacto — plata", "Tubos modulares", "Tubo modular de sección compacta, acabado plata. Ideal para estructuras ligeras."),
  p("DP2T1SS", "Tubo modular cuadrado — plata", "Tubos modulares", "Tubo modular de sección cuadrada, acabado plata, para ensambles estructurales."),
  p("DP3T9BK", "Tubo modular reforzado — negro", "Tubos modulares", "Tubo modular de mayor rigidez para cargas medias. Acabado color negro."),
  p("DP3T9GR", "Tubo modular reforzado — gris", "Tubos modulares", "Tubo modular de mayor rigidez para cargas medias. Acabado color gris."),
  p("DP4T9AL", "Tubo modular rectangular — aluminio", "Tubos modulares", "Tubo modular de sección rectangular, acabado aluminio, para estructuras de trabajo pesado."),
  p("DP5T9AL", "Tubo modular gran sección — aluminio", "Tubos modulares", "Tubo modular de gran sección para estructuras de alta resistencia. Acabado aluminio."),
];

/* ------------------------------------------------------------------ */
/* CONECTORES NEGROS                                                   */
/* ------------------------------------------------------------------ */
const CON_NEGRO_DESC =
  "Conector de fundición para la unión y ensamble de tubos modulares. Acabado negro. Serie RJ y HJ para ángulos, alineaciones, uniones en T y cruces.";

const codigosRJNegro = [
  "RJ1B","RJ1AB","RJ2B","RJ3B","RJ4B","RJ5B","RJ6B","RJ6AB","RJ7B","RJ8B",
  "RJ9B","RJ10B","RJ11B","RJ12B","RJ13B","RJ13CB","RJ13DB","RJ14B","RJ15B",
  "RJ150B","RJ16B","RJ17B","RJ18B",
];
const codigosHJNegro = [
  "HJ6AB","HJ8B","HJ9B","HJ10B","HJ13BB","HJ20B","HJ20AB","HJ24B","HJ30B",
  "HJ34B","HJ38B","HJ39B","HJ45B","HJ60B","HJ110B","HJ160B",
];

const conectoresNegros: Producto[] = [
  ...codigosRJNegro.map((c) =>
    p(c, `Conector modular RJ — negro (${c})`, "Conectores negros", CON_NEGRO_DESC)
  ),
  ...codigosHJNegro.map((c) =>
    p(c, `Conector modular HJ — negro (${c})`, "Conectores negros", CON_NEGRO_DESC)
  ),
];

/* ------------------------------------------------------------------ */
/* CONECTORES ZINCADOS                                                 */
/* ------------------------------------------------------------------ */
const CON_ZINC_DESC =
  "Conector de fundición para la unión y ensamble de tubos modulares. Acabado zincado, con mayor resistencia a la corrosión para ambientes industriales exigentes.";

const codigosRJZinc = [
  "RJ1Z","RJ1AZ","RJ2Z","RJ3Z","RJ4Z","RJ5Z","RJ6Z","RJ6AZ","RJ7Z","RJ8Z",
  "RJ9Z","RJ10Z","RJ11Z","RJ12Z","RJ13Z","RJ13CZ","RJ13DZ","RJ14Z","RJ15Z",
  "RJ150Z",
];
const codigosHJZinc = [
  "HJ6AZ","HJ8Z","HJ9Z","HJ10Z","HJ13BZ","HJ20Z","HJ20AZ","HJ24Z","HJ30Z",
  "HJ34Z","HJ38Z","HJ39Z","HJ45Z","HJ60Z","HJ110Z","HJ160Z",
];

const conectoresZincados: Producto[] = [
  ...codigosRJZinc.map((c) =>
    p(c, `Conector modular RJ — zincado (${c})`, "Conectores zincados", CON_ZINC_DESC)
  ),
  ...codigosHJZinc.map((c) =>
    p(c, `Conector modular HJ — zincado (${c})`, "Conectores zincados", CON_ZINC_DESC)
  ),
];

/* ------------------------------------------------------------------ */
/* RIELES                                                              */
/* ------------------------------------------------------------------ */
const RIEL_DESC =
  "Riel para rodajas y sistemas de flujo por gravedad. Se instala en racks y estaciones de trabajo para el deslizamiento de contenedores y producto.";

const rieles: Producto[] = [
  p("PWC40A", "Riel serie PWC40 — variante A", "Rieles", `${RIEL_DESC} Perfil 40 mm, variante estándar.`),
  p("PWC40B", "Riel serie PWC40 — variante B", "Rieles", `${RIEL_DESC} Perfil 40 mm, variante con refuerzo.`),
  p("PWC40AF", "Riel serie PWC40 — variante AF", "Rieles", `${RIEL_DESC} Perfil 40 mm, variante reforzada.`),
  p("PWC40BF", "Riel serie PWC40 — variante BF", "Rieles", `${RIEL_DESC} Perfil 40 mm, variante reforzada.`),
  p("PWC40R", "Riel serie PWC40 — variante R", "Rieles", `${RIEL_DESC} Perfil 40 mm, variante para cargas rodantes.`),
  p("PWC60A", "Riel serie PWC60 — variante A", "Rieles", `${RIEL_DESC} Perfil 60 mm, variante estándar.`),
  p("PWC80A", "Riel serie PWC80 — variante A", "Rieles", `${RIEL_DESC} Perfil 80 mm, variante estándar.`),
  p("PWC80B", "Riel serie PWC80 — variante B", "Rieles", `${RIEL_DESC} Perfil 80 mm, variante con refuerzo.`),
];

/* ------------------------------------------------------------------ */
/* ACCESORIOS PARA RIEL                                                */
/* ------------------------------------------------------------------ */
const ACC_RIEL_DESC =
  "Accesorio para riel: soportes, uniones, topes y fijaciones para el montaje de rieles serie PWC en racks y estaciones de trabajo.";

const accesoriosRiel: Producto[] = [
  "PWC4A","PWC4B","PWC4B2","PWC4C","PWC4C1","PWC4C2","PWC4D",
  "PWC6A","PWC6B","PWC6C","PWC6D",
  "PWC8A","PWC8B","PWC8C","PWC8D",
].map((c) => p(c, `Accesorio para riel — ${c}`, "Accesorios para riel", ACC_RIEL_DESC));

/* ------------------------------------------------------------------ */
/* ACCESORIOS PARA TUBO DESLIZABLE                                     */
/* ------------------------------------------------------------------ */
const ACC_TUBO_DESC =
  "Accesorio para tubo deslizable: soportes, topes y guías para movimientos lineales en estaciones de trabajo y mecanismos de extracción.";

const accesoriosTuboDeslizable: Producto[] = ["PBA", "PBB", "PBC"].map((c) =>
  p(c, `Accesorio para tubo deslizable — ${c}`, "Accesorios para tubo deslizable", ACC_TUBO_DESC)
);

/* ------------------------------------------------------------------ */
/* ACCESORIOS PLÁSTICOS                                                */
/* ------------------------------------------------------------------ */
const ACC_PLAST_DESC =
  "Accesorio plástico fabricado en polímero de ingeniería: tapas, guías, protecciones y componentes de cierre para tubos y estructuras modulares.";

const accesoriosPlasticos: Producto[] = [
  "DJP38AI","DJP38B","DJP49AI","DJP202","DJP112B","DJP146",
].map((c) => p(c, `Accesorio plástico — ${c}`, "Accesorios plásticos", ACC_PLAST_DESC));

/* ------------------------------------------------------------------ */
/* ACCESORIOS VARIOS                                                   */
/* ------------------------------------------------------------------ */
const accesoriosVarios: Producto[] = [
  p("PBE", "Brida de unión para tubo", "Accesorios varios", "Brida de unión y acoplamiento para tubos modulares."),
  p("PBE1", "Brida de unión reforzada", "Accesorios varios", "Brida de unión de mayor resistencia para tubos modulares."),
  p("PBUA", "Soporte universal — A", "Accesorios varios", "Soporte universal para fijación de accesorios en estructuras modulares."),
  p("PBUB", "Soporte universal — B", "Accesorios varios", "Soporte universal para fijación de accesorios en estructuras modulares."),
  p("PBUC", "Soporte universal — C", "Accesorios varios", "Soporte universal para fijación de accesorios en estructuras modulares."),
  p("RL6", "Tope para riel — 6 mm", "Accesorios varios", "Tope de retención para rieles con ranura de 6 mm."),
  p("RL8", "Tope para riel — 8 mm", "Accesorios varios", "Tope de retención para rieles con ranura de 8 mm."),
  p("RF1", "Fijación para riel — tipo 1", "Accesorios varios", "Fijación para el montaje de rieles en perfiles y estructuras."),
  p("RF2", "Fijación para riel — tipo 2", "Accesorios varios", "Fijación para el montaje de rieles en perfiles y estructuras."),
  p("PBCA", "Conector angular para tubo", "Accesorios varios", "Conector angular para el ensamble de tubos modulares."),
  p("DFHRA", "Fijación DHR — variante A", "Accesorios varios", "Fijación de la familia DHR para soporte de accesorios en tubo modular."),
  p("DRHRB", "Fijación DHR — variante B", "Accesorios varios", "Fijación de la familia DHR para soporte de accesorios en tubo modular."),
  p("DRHRC", "Fijación DHR — variante C", "Accesorios varios", "Fijación de la familia DHR para soporte de accesorios en tubo modular."),
  p("PBL", "Tope para tubo", "Accesorios varios", "Tope de retención para tubos modulares y deslizables."),
  p("DRHRSC", "Fijación DHR — variante SC", "Accesorios varios", "Fijación de la familia DHR, variante de sujeción rápida."),
  p("DFHRS", "Fijación DHR — variante S", "Accesorios varios", "Fijación de la familia DHR, variante estándar."),
  p("DCS1", "Conector estructural — tipo 1", "Accesorios varios", "Conector para uniones estructurales en perfiles modulares."),
  p("DCS2", "Conector estructural — tipo 2", "Accesorios varios", "Conector para uniones estructurales en perfiles modulares."),
  p("DHR", "Fijación DHR estándar", "Accesorios varios", "Fijación de la familia DHR para soporte de accesorios en tubo modular."),
];

/* ------------------------------------------------------------------ */
/* PATAS NIVELADORAS E INSERTOS                                        */
/* ------------------------------------------------------------------ */
const patas: Producto[] = [
  p("DA1", "Pata niveladora con inserto — DA1", "Patas niveladoras e insertos", "Pata niveladora roscada con inserto para tubo modular. Permite nivelación fina de estructuras."),
  p("DA4", "Pata niveladora con inserto — DA4", "Patas niveladoras e insertos", "Pata niveladora roscada con inserto para tubo modular. Permite nivelación fina de estructuras."),
  p("DA50", "Pata niveladora — DA50", "Patas niveladoras e insertos", "Pata niveladora de mayor capacidad para estructuras de material handling."),
  p("RL3", "Pata niveladora con base — RL3", "Patas niveladoras e insertos", "Pata niveladora con base de apoyo para estaciones de trabajo y racks."),
  p("RL4", "Pata niveladora con base — RL4", "Patas niveladoras e insertos", "Pata niveladora con base de apoyo para estaciones de trabajo y racks."),
  p("RL5", "Pata niveladora con base — RL5", "Patas niveladoras e insertos", "Pata niveladora con base de apoyo para estaciones de trabajo y racks."),
];

/* ------------------------------------------------------------------ */
/* PERFILES PVC                                                        */
/* ------------------------------------------------------------------ */
const PVC_DESC =
  "Perfil de PVC para canalizaciones, guías, cubiertas y protecciones en estaciones de trabajo y líneas de ensamble.";

const perfilesPVC: Producto[] = [
  "DPC1","DPC3","DPC4","DPC6","DPC7","DPC8","DPC9","DPC9A","DPC10","DPC11","DPC13","DPC14",
].map((c) => p(c, `Perfil PVC — ${c}`, "Perfiles PVC", PVC_DESC));

/* ------------------------------------------------------------------ */
/* SUJETADORES                                                        */
/* ------------------------------------------------------------------ */
const sujetadores: Producto[] = [
  p("KTT06B", "Sujetador para ranura 6 mm — negro", "Sujetadores", "Sujetador para ranura de 6 mm en tubos y perfiles modulares. Acabado negro."),
  p("KTT06Z", "Sujetador para ranura 6 mm — zincado", "Sujetadores", "Sujetador para ranura de 6 mm en tubos y perfiles modulares. Acabado zincado."),
  p("KTTM840G", "Tuerca para ranura — M8", "Sujetadores", "Tuerca deslizable para ranura de perfil modular, rosca M8."),
  p("DPH19", "Perno de fijación — 19 mm", "Sujetadores", "Perno de fijación para el ensamble de tubos y conectores modulares."),
  p("DPH25", "Perno de fijación — 25 mm", "Sujetadores", "Perno de fijación para el ensamble de tubos y conectores modulares."),
];

/* ------------------------------------------------------------------ */
/* RODAJAS                                                             */
/* ------------------------------------------------------------------ */
const RODAJA_DESC =
  "Rodaja industrial para estructuras modulares de material handling. Capacidad y diámetro según requerimiento de la aplicación.";

const rodajas: Producto[] = [
  p("R-TUB-GIR", "Rodaja giratoria para insertar en tubo", "Rodajas", `${RODAJA_DESC} Con inserto para tubo modular y giro libre.`),
  p("R-TUB-FIJ", "Rodaja fija para insertar en tubo", "Rodajas", `${RODAJA_DESC} Con inserto para tubo modular, sin giro.`),
  p("R-TUB-SOB", "Rodaja para sobreponer en tubo", "Rodajas", `${RODAJA_DESC} Se sobrepone sobre el tubo modular con fijación superior.`),
  p("R-TUB-AMO", "Rodaja con amortiguación", "Rodajas", `${RODAJA_DESC} Con sistema de amortiguación para cargas sensibles.`),
  p("R-ESD-INS", "Rodaja ESD para insertar", "Rodajas", `${RODAJA_DESC} Con disipación electrostática (ESD), para insertar en tubo.`),
  p("R-ESD-SOB", "Rodaja ESD para sobreponer", "Rodajas", `${RODAJA_DESC} Con disipación electrostática (ESD), para sobreponer en tubo.`),
  p("R-GRAN-CAP", "Rodaja de gran capacidad", "Rodajas", `${RODAJA_DESC} Diseñada para cargas pesadas.`),
  p("R-AGV-01", "Rodaja para AGV", "Rodajas", `${RODAJA_DESC} Especial para vehículos de guiado automático (AGV).`),
];

/* ------------------------------------------------------------------ */
/* HERRAMIENTAS                                                        */
/* ------------------------------------------------------------------ */
const HERRAMIENTA_DESC =
  "Herramienta especializada para el ensamble, ajuste y mantenimiento de estructuras modulares: llaves, dados, extractores y accesorios de montaje.";

const herramientas: Producto[] = [
  "R122","E122","R151","E4546","R35S","E635","M2462","KL2153","SP2057",
  "D-523930W","5413M","KL2185","NM2004","SP2132","1213M","NN-100","AM4003",
  "TO2040","T33450","TL4002","TL4003",
].map((c) => p(c, `Herramienta para ensamble modular — ${c}`, "Herramientas", HERRAMIENTA_DESC));

/* ------------------------------------------------------------------ */
/* SOLUCIONES LEAN                                                     */
/* ------------------------------------------------------------------ */
const solucionesLean: Producto[] = [
  p("SL-FR-01", "Flow Rack FIFO", "Soluciones Lean", "Solución Lean a la medida: rack de flujo por gravedad para control de inventario FIFO en línea de producción. Diseño y fabricación según medidas y capacidad requeridas."),
  p("SL-ET-01", "Estación de trabajo modular", "Soluciones Lean", "Estación de trabajo modular con tubos, conectores y accesorios. Configurable según el proceso: iluminación, rieles, mesas y herramientas."),
  p("SL-SM-01", "Supermercado de línea", "Soluciones Lean", "Supermercado de materiales para abastecimiento de línea con señalización y control visual."),
  p("SL-CI-01", "Carro industrial modular", "Soluciones Lean", "Carro industrial fabricado con sistema modular para transporte de material en planta."),
  p("SL-RI-01", "Rack para área de inspección", "Soluciones Lean", "Rack con rieles y rodajas para el flujo de piezas en áreas de inspección de calidad."),
  p("SL-TM-01", "Transportador modular", "Soluciones Lean", "Transportador modular por gravedad para el flujo de contenedores y producto entre estaciones."),
];

/* ------------------------------------------------------------------ */
/* CATÁLOGO COMPLETO                                                   */
/* ------------------------------------------------------------------ */
export const PRODUCTOS: Producto[] = [
  ...tubos,
  ...conectoresNegros,
  ...conectoresZincados,
  ...rieles,
  ...accesoriosRiel,
  ...accesoriosTuboDeslizable,
  ...accesoriosPlasticos,
  ...accesoriosVarios,
  ...patas,
  ...perfilesPVC,
  ...sujetadores,
  ...rodajas,
  ...herramientas,
  ...solucionesLean,
];

/**
 * Categorías de producto mostradas en la página de inicio.
 * `imagen` es un marcador temporal: reemplázalo por una foto real
 * en /public/images/productos/inicio/ cuando la tengas.
 */
export const CATEGORIAS_INICIO = [
  {
    nombre: "Sistemas Lean",
    descripcion:
      "Tubos modulares, conectores, rieles y accesorios para armar flow racks, estaciones de trabajo y estructuras bajo la metodología Lean Manufacturing.",
    icono: "lean",
    imagen: "/productos/rack.jpg",
  },
  {
    nombre: "Ruedas y rodajas",
    descripcion:
      "Distintos diámetros y capacidades de carga, con base fija o giratoria, con freno o sin freno, en hule, poliuretano y otros materiales según la aplicación.",
    icono: "rodaja",
    imagen: "/productos/ruedas.jpg",
  },
  {
    nombre: "Rieles, conveyors y bolas de transferencia",
    descripcion:
      "Componentes para el flujo de materiales en línea: rieles, conveyors y bolas de transferencia en distintos diámetros, materiales y configuraciones según la carga.",
    icono: "riel",
    imagen: "/productos/bolas.jpg",
  },
  {
    nombre: "Tubería de inoxidable",
    descripcion:
      "Tubería en acero inoxidable en distintos diámetros, espesores y aleaciones, con accesorios y conexiones para líneas de proceso e higiénicas.",
    icono: "tuberia",
    imagen: "/productos/inoxidable.jpg",
  },
  {
    nombre: "Bombas",
    descripcion:
      "Bombas hidráulicas, neumáticas, sumergibles y de otros tipos para la transferencia de fluidos en procesos industriales.",
    icono: "bomba",
    imagen: "/productos/bombas.jpg",
  },
] as const;