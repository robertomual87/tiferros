export interface Proyecto {
  titulo: string;
  servicio: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

/**
 * Proyectos representativos. Las imágenes son temporales (libres de uso):
 * reemplazar por fotografías reales en /public/images/proyectos/.
 */
export const PROYECTOS: Proyecto[] = [
  {
    titulo: "Refuerzo estructural de contenedor PPL",
    servicio: "Pailería industrial",
    descripcion:
      "Fabricación e instalación de estructura metálica de refuerzo en el lateral de un contenedor PPL, con soldadura calificada ante AWS para garantizar la integridad y resistencia de la unión.",
    imagen:
      "/proyectos/estructuralateralcontenedor.jpg",
    alt: "Estructura metálica de refuerzo lateral soldada en contenedor PPL",
  },
{
    titulo: "Línea de tubería neumática para compresor",
    servicio: "Tuberías industriales",
    descripcion:
      "Diseño e instalación de línea de tubería neumática para alimentación de un compresor industrial, incluyendo soportería, conexiones y pruebas de hermeticidad para asegurar una distribución de aire estable y sin fugas.",
    imagen:
      "/proyectos/compresor.png",
    alt: "Línea de tubería neumática instalada para alimentación de compresor industrial",
  },
{
    titulo: "Vallado de seguridad para alimentador de alambre",
    servicio: "Soldadura y fabricación",
    descripcion:
      "Fabricación e instalación de vallado de seguridad en PTR y metal desplegado para el alimentador de alambre de una máquina formadora de resortes de suspensión automotriz, delimitando el área de riesgo sin restar visibilidad al proceso.",
    imagen: "/proyectos/valladodeseguridad.jpg",
    alt: "Vallado de seguridad en PTR y metal desplegado para alimentador de alambre de máquina de resortes",
  },
{
    titulo: "Aumento en hierro colado para bomba de concreto",
    servicio: "Maquinado industrial",
    descripcion:
      "Fabricación de aumento (tapón) en hierro colado para bomba de concreto, maquinado a la medida para ajustar el plato de bombeo y garantizar el sello y la presión necesarios para impulsar el concreto hacia arriba.",
    imagen:
      "/proyectos/maquinadobomcaconcreto.jpg",
    alt: "Pieza de hierro colado maquinada como aumento para bomba de concreto",
  },
{
    titulo: "Mantenimiento a dedo recibidor de alambre",
    servicio: "Maquinado y soldadura",
    descripcion:
      "Mantenimiento y recuperación dimensional de dedo recibidor de alambre, componente encargado de recibir bobinas de alambre de hasta 2.5 toneladas, restableciendo su geometría y resistencia para continuar en operación segura.",
    imagen:
      "/proyectos/Mantenimientoadedo.png",
    alt: "Dedo recibidor de alambre reparado, componente para bobinas de 2.5 toneladas",
  },
{
    titulo: "Refuerzo estructural para grúa viajera",
    servicio: "Pailería industrial",
    descripcion:
      "Refuerzo de columnas y trabes en el área destinada a una grúa viajera, mediante soldadura calificada que garantiza la resistencia estructural necesaria para soportar las cargas dinámicas del equipo.",
    imagen: "/proyectos/soldadurarefuerzo.jpg",
    alt: "Columnas y trabes reforzadas con soldadura calificada para grúa viajera",
  },
{
    titulo: "Mezzanine con escalera para oficinas",
    servicio: "Pailería industrial",
    descripcion:
      "Diseño, fabricación e instalación de mezzanine estructural con su escalera de acceso para ampliar el área de oficinas, incluyendo barandales de seguridad y acabado listo para piso.",
    imagen: "/proyectos/mezzanine.jpg",
    alt: "Mezzanine estructural con escalera de acceso fabricado para área de oficinas",
  },
{
    titulo: "Fabricación de 100 racks para material de estampado",
    servicio: "Pailería industrial",
    descripcion:
      "Fabricación en serie de 100 racks metálicos para colgar y transportar piezas de estampado, con diseño estandarizado que agiliza el manejo de material y protege la pieza durante su traslado entre procesos.",
    imagen: "/proyectos/racks.jpg",
    alt: "Racks metálicos fabricados en serie para colgar piezas de estampado",
  },
];
