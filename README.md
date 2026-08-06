# TIFERROS — Sitio Web Corporativo

Sitio web industrial B2B de **TIFERROS**, empresa especializada en servicios industriales y
transformación de metales en **Villagrán, Guanajuato, México**.

> **Concepto:** *Calidad, precisión y confianza para tus proyectos industriales.*

![TIFERROS](https://img.shields.io/badge/TIFERROS-Soluciones%20Industriales-%23d72631)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

---

## 🏭 ¿Qué incluye?

- **7 páginas:** Inicio, Nosotros, Servicios, Productos (catálogo B2B), Proyectos, Certificaciones y Contacto.
- **Catálogo de cotización** con ~190 productos: tubos modulares, conectores, rieles, rodajas, perfiles PVC, accesorios, patas niveladoras, herramientas y soluciones Lean. Con buscador por código/nombre y filtro por categoría. **Sin precios y sin marca de proveedor.**
- **Formulario de cotización** con FormSubmit (temporal) conectado a `roberto@tiferros.com`, más botón de WhatsApp directo.
- **SEO:** meta title/description por página, Open Graph, Schema.org LocalBusiness, `sitemap.xml`, `robots.txt`, HTML semántico y alt text en imágenes.
- **Diseño 100% responsive** con identidad industrial: grafito, gris acero, rojo del logotipo y amarillo de seguridad.

## 🚀 Instalación

Requisitos: **Node.js 18+** y **npm**.

```bash
# 1. Instalar dependencias
npm install

# 2. Desarrollo local
npm run dev

# 3. Build de producción (genera la carpeta dist/)
npm run build

# 4. Vista previa del build
npm run preview
```

## 📁 Estructura del proyecto

```
├── public/
│   ├── favicon.svg          # Favicon industrial
│   ├── robots.txt           # SEO
│   ├── sitemap.xml          # SEO
│   └── _redirects           # SPA fallback para Cloudflare Pages
├── src/
│   ├── components/          # Header, Footer, tarjetas, CTA, etc.
│   ├── data/
│   │   ├── site.ts          # Datos de contacto, clientes, certificaciones
│   │   ├── servicios.ts     # 6 servicios industriales
│   │   ├── productos.ts     # Catálogo completo (~190 códigos)
│   │   └── proyectos.ts     # Proyectos representativos
│   ├── hooks/usePageMeta.ts # SEO dinámico por página
│   └── pages/               # Una página por ruta
├── index.html               # SEO base + Schema.org LocalBusiness
└── package.json
```

## ✏️ Personalización

| ¿Qué quieres cambiar? | ¿Dónde? |
|---|---|
| Teléfono, correo, dirección, clientes, certificaciones | `src/data/site.ts` |
| Servicios y sus capacidades | `src/data/servicios.ts` |
| Catálogo (códigos, descripciones, categorías) | `src/data/productos.ts` |
| Proyectos | `src/data/proyectos.ts` |
| Colores y tipografías | `src/index.css` (`@theme`) |

### Imágenes

- Las imágenes actuales son **temporales y libres de uso** (Pexels). Para reemplazarlas, guarda tus
  fotografías en `public/images/` y actualiza las URLs en `src/data/*.ts`.
- Las tarjetas del catálogo usan un **marcador visual generado**. Para usar foto real de un producto,
  agrega el campo `imagen: "/images/productos/<codigo>.jpg"` en `src/data/productos.ts`.
- En `src/pages/Certificaciones.tsx` hay bloques con espacio reservado para subir imágenes reales de
  los certificados (`/images/certificados/`).

### ⚠️ Notas importantes

- **Logotipos de clientes:** publicar los logotipos solo si se tiene autorización de uso. Por ahora
  se muestran como nombres en tarjetas neutras (ver comentario en `src/components/ClientLogos.tsx`).
- **FormSubmit:** el formulario usa FormSubmit de forma temporal. La **primera vez** recibirás un
  correo de confirmación en `roberto@tiferros.com`; confírmalo para activar las entregas. Para usar
  otro backend, edita el `action` del formulario en `src/pages/Contacto.tsx`.

## ☁️ Despliegue

### GitHub

```bash
git init
git add .
git commit -m "Sitio web TIFERROS"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/tiferros-web.git
git push -u origin main
```

### Cloudflare Pages

1. Entra a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Selecciona el repositorio `tiferros-web`.
3. Configura el build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Haz clic en **Save and Deploy**. Cada push a `main` desplegará automáticamente.
5. (Opcional) En **Custom domains** conecta `www.tiferros.com`.

> El archivo `public/_redirects` (`/* /index.html 200`) ya está incluido para el correcto
> funcionamiento de las rutas en Cloudflare Pages.

### GitHub Pages

```bash
npm install --save-dev gh-pages
# agrega "homepage": "https://TU-USUARIO.github.io/tiferros-web/" en package.json
# agrega "deploy": "gh-pages -d dist" en scripts
npm run build
npm run deploy
```

---

## 🔎 SEO

- Palabras clave: maquinado industrial en Guanajuato, pailería industrial, soldadura TIG-MIG-SMAW,
  tuberías industriales, automatización industrial, flow rack FIFO, estaciones de trabajo Lean,
  material handling, diseño industrial y memorias de cálculo.
- `Schema.org LocalBusiness` en `index.html` con datos reales de la empresa.
- `sitemap.xml` y `robots.txt` en `public/`.

## 📞 Contacto

- **Dirección:** Cuauhtémoc No. 705, Villagrán, Guanajuato, México
- **Teléfono:** 411 133 0810
- **Correo:** roberto@tiferros.com
- **WhatsApp:** https://wa.me/524111330810
- **Contacto:** Roberto Guadalupe Muñiz Álvarez

---

© TIFERROS — Sitio desarrollado con código (React + Vite + Tailwind CSS). Sin WordPress.
