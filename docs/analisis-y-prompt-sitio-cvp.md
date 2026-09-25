# Análisis del "Mapa CVP" y Prompt para construir el sitio web

## 1. Resumen del documento analizado

El archivo `docs/Mapa CVP.docx` contiene dos versiones del mapa de navegación del **Centro Virtual del Patrimonio (CVP)** de la Universidad Rafael Landívar:

- **Mapa original**: estructura vigente (Home, Museo Virtual, Obra del mes, Bicentenario GT, URL, Patrimonio Cultural, Buscar).
- **Propuesta 2026** (la que debe implementarse): reordena las secciones, cambia nombres y agrupa contenido. Cambios clave:
  - Cambio de logo institucional e identificador.
  - Header con: **Home**, **Buscar** (lupa), **Opciones** (bloques/tarjetas tipo "Chispudo", cada una con su propia página de aterrizaje), **Acerca del Museo**, **Redes Sociales**, **Contacto** (correo y extensiones).
  - `ComunicArte` cambia de nombre a **"Agenda del Centro y Sugerencias"** (incluye etiquetas por tipo de actividad y sección "¿Qué hacemos luego? Déjanos tu sugerencia").
  - `Obra del mes` se absorbe dentro de **Museo Virtual Landivariano → Obras Plásticas** (Alto valor, Colecciones: pintura/escultura/murales/fotos, Autores).
  - Nueva sección **"Nación de Sueños"** y **"Patrimonio del semestre"**.
  - `URL` se renombra a **"Patrimonio Cultural Landivariano"** y agrupa 60 Aniversario URL, Galería Rectores, Centro de Artes Landívar, Línea de tiempo MOMENTUM, Memorias (Laboratorio Teatral), Capilla Santa Sofía (tour 360°).
  - **Patrimonio Cultural Guatemalteco**: BIC (Ermitas de Antigua Guatemala + 6 tours virtuales 360°) y PCI (Barriletes de Santiago Sacatepéquez, Cacao).
  - Se mantiene **Bicentenario GT** (Himno Nacional, Galería Otto Becker Meyer).
  - Referencias de diseño explícitas en el documento:
    - Van Gogh Museum (https://www.vangoghmuseum.nl) → hero grande, tarjetas de exposición, tipografía grande y limpia.
    - Museo del Prado – Visitas virtuales (https://www.museodelprado.es/visitas-virtuales) → visor de obra en detalle con zoom, panel lateral con ficha descriptiva y miniaturas de navegación, ideal para los **tours 360°** y **galerías de obra**.

### Sitemap final recomendado (Propuesta 2026)

```
Home
├── Buscar
├── Museo Virtual Landivariano
│   ├── Obras Plásticas
│   │   ├── Alto valor
│   │   ├── Colecciones (Pintura, Escultura, Murales, Fotografía)
│   │   └── Autores
│   ├── GlosariArte
│   ├── Agenda del Centro y Sugerencias
│   ├── Nación de Sueños
│   └── Patrimonio del semestre
├── Patrimonio Cultural Guatemalteco
│   ├── Bien de Interés Cultural (BIC)
│   │   ├── Ermitas de la Antigua Guatemala
│   │   └── Tours virtuales 360°
│   │       ├── Capilla San Jerónimo
│   │       ├── Espíritu Santo
│   │       ├── Manchén
│   │       ├── Nuestra Señora de los Dolores del Cerro
│   │       ├── Santa Piedra de la Cruz
│   │       └── San Jerónimo Recolecto
│   └── PCI
│       ├── Barriletes de Santiago Sacatepéquez
│       └── Cacao
├── Patrimonio Cultural Landivariano (antes "URL")
│   ├── 60 Aniversario URL
│   │   ├── Evolución Histórica y Arquitectónica URL
│   │   ├── Momentos Landívar
│   │   └── Capilla Santa Sofía (tour 360°)
│   ├── Galería Rectores URL
│   ├── Centro de Artes Landívar
│   ├── Línea de tiempo MOMENTUM
│   └── Memorias: Laboratorio Teatral URL
├── Bicentenario GT
│   ├── Himno Nacional
│   └── Galería Otto Becker Meyer
├── Acerca del Museo
├── Redes Sociales
└── Contacto
```

## 2. ¿Es viable usar Angular?

**Sí, Angular es una opción viable y recomendada.** No es necesario cambiar de tecnología. Motivos:

1. **Separación nativa HTML/CSS/TS por componente**: cada `ng generate component` ya crea `*.component.html`, `*.component.scss` y `*.component.ts` como archivos independientes (arquitectura que el usuario pidió). No requiere configuración extra.
2. **Angular Router** resuelve perfectamente el árbol de navegación profundo (hasta 4 niveles) mediante rutas anidadas (`children`) y **lazy loading** por sección (`Museo Virtual`, `Patrimonio Cultural Guatemalteco`, `Patrimonio Cultural Landivariano`, `Bicentenario GT`), mejorando el tiempo de carga inicial.
3. **Standalone Components** (Angular 15+) permiten componentes de tarjeta ("Chispudo"), galería, visor 360°, línea de tiempo, etc., totalmente reutilizables y con estilos encapsulados (`ViewEncapsulation.Emulated` por defecto), evitando choques de CSS entre secciones.
4. **Librerías que cubren los requerimientos especiales** sin salir del ecosistema Angular:
   - Visor de imágenes con zoom estilo Prado: `ngx-image-zoom`, `photoswipe` (con wrapper Angular) o componente propio con CSS `transform: scale()`.
   - Tours virtuales 360°: `Pannellum` o `Three.js` (`three` + `ngx-three` o integración directa) embebidos en un componente Angular dedicado.
   - Línea de tiempo (MOMENTUM): librería `vis-timeline` o componente propio con CSS Grid/Flex.
   - Buscador global: Angular `HttpClient` + un servicio de índice (Algolia/Lunr.js/Elasticsearch) o filtrado local si el catálogo es pequeño.
   - Íconos/UI: Angular Material o PrimeNG (opcional, solo para inputs/menús, sin imponer su theming sobre la identidad visual de la URL).
5. **SEO/SSR**: si se requiere buen posicionamiento del contenido patrimonial, usar **Angular Universal (SSR)** o migrar a **Angular con `@angular/ssr`** (soportado nativamente desde Angular 17+).

**Conclusión**: se recomienda Angular (versión 17 o superior) con *standalone components*, *Angular Router* con *lazy loading*, y `@angular/ssr` si se necesita SEO. No se recomienda cambiar a otro framework; el único ajuste sería incorporar librerías puntuales para los visores 360° y de zoom.

---

## 3. Prompt maestro para generar el sitio web

Copia y usa el siguiente prompt (en un agente de IA de código, p. ej. GitHub Copilot Chat en modo agente) para generar el proyecto Angular completo del Centro Virtual del Patrimonio:

```
Eres un ingeniero frontend senior. Crea un sitio web institucional para el
"Centro Virtual del Patrimonio (CVP)" de la Universidad Rafael Landívar
(https://principal.url.edu.gt/), usando Angular 17+ con standalone components,
Angular Router con lazy loading y SCSS.

CONTEXTO DE MARCA
- Institución: Universidad Rafael Landívar (Jesuita, Guatemala).
- Usa la hoja de estilos general ubicada en docs/estilos-generales.css como
  fuente de verdad para colores, tipografía y botones (variables CSS :root).
- Tono visual: institucional, cultural/museográfico, elegante, accesible.
- Referencias de diseño: Van Gogh Museum (https://www.vangoghmuseum.nl) para
  el home/hero y tarjetas de exposiciones; Museo del Prado - Visitas Virtuales
  (https://www.museodelprado.es/visitas-virtuales) para el visor de obras con
  zoom y para los recorridos 360°.

ARQUITECTURA
- Angular standalone components, cada uno con archivos separados
  (*.component.ts, *.component.html, *.component.scss).
- Angular Router con rutas anidadas y lazy loading por sección principal.
- Servicios (Injectable) para consumir datos de obras, autores, eventos y
  tours 360° desde un backend/API o archivos JSON mock en /assets/data.
- Estructura de carpetas por feature: core/, shared/ (componentes UI
  reutilizables: botones, tarjetas, header, footer, buscador), y features/
  (museo-virtual, patrimonio-guatemalteco, patrimonio-landivariano,
  bicentenario, acerca, contacto).
- Diseño responsive mobile-first, accesible (WCAG AA), con navegación por
  teclado en menús y visores.

MAPA DE NAVEGACIÓN A IMPLEMENTAR (Propuesta 2026)
- Home: hero principal, buscador (lupa), bloques "Chispudo" (tarjetas grandes
  de acceso a cada sección principal), acceso a Acerca del Museo, Redes
  Sociales y Contacto.
- Museo Virtual Landivariano:
  - Obras Plásticas: Alto valor, Colecciones (Pintura, Escultura, Murales,
    Fotografía), Autores.
  - GlosariArte (glosario de términos de arte, buscable alfabéticamente).
  - Agenda del Centro y Sugerencias (listado de actividades con etiquetas por
    tipo + formulario "¿Qué hacemos luego? Déjanos tu sugerencia").
  - Nación de Sueños.
  - Patrimonio del semestre.
- Patrimonio Cultural Guatemalteco:
  - BIC (Bien de Interés Cultural): explicación conceptual, Ermitas de la
    Antigua Guatemala, y 6 tours virtuales 360° (Capilla San Jerónimo,
    Espíritu Santo, Manchén, Nuestra Señora de los Dolores del Cerro, Santa
    Piedra de la Cruz, San Jerónimo Recolecto).
  - PCI (Patrimonio Cultural Inmaterial): explicación conceptual, Barriletes
    de Santiago Sacatepéquez, Cacao.
- Patrimonio Cultural Landivariano (antes "URL"):
  - 60 Aniversario URL: Evolución Histórica y Arquitectónica URL, Momentos
    Landívar, Capilla Santa Sofía (tour 360°).
  - Galería Rectores URL, Centro de Artes Landívar, Línea de tiempo MOMENTUM,
    Memorias: Laboratorio Teatral URL.
- Bicentenario GT: Himno Nacional, Galería Otto Becker Meyer.
- Acerca del Museo, Redes Sociales, Contacto (correo y extensiones).

COMPONENTES CLAVE A CONSTRUIR
1. Header/Navbar con menú de "Opciones" en tarjetas y submenú contextual al
   entrar a una sección (breadcrumb + menú lateral/superior de la sección
   activa).
2. Buscador global (modal o página) que filtre por título, autor, categoría.
3. Tarjeta "Chispudo" reutilizable (imagen, título, descripción corta, CTA).
4. Galería de obras con visor de detalle: imagen con zoom, ficha (autor,
   año, técnica, colección) y miniaturas de navegación (estilo Prado).
5. Visor de tours virtuales 360° (integrar Pannellum o Three.js) reutilizable
   para todos los tours listados (BIC + Capilla Santa Sofía).
6. Línea de tiempo interactiva para "Línea de tiempo MOMENTUM" y "60
   Aniversario URL".
7. Glosario alfabético con anclas/scroll-spy (GlosariArte).
8. Agenda de eventos con filtros por etiqueta + formulario de sugerencias
   (con validaciones Reactive Forms).
9. Footer institucional con redes sociales, contacto y enlaces legales.

REQUISITOS TÉCNICOS
- TypeScript estricto, sin `any` salvo justificado.
- Formularios con Angular Reactive Forms y validación accesible.
- Imágenes con `loading="lazy"` y atributos `alt` descriptivos.
- Internacionalización lista para agregar inglés a futuro (estructura de
  textos centralizada, aunque el contenido inicial sea en español).
- Pruebas unitarias básicas (Jasmine/Karma) para servicios y componentes de
  lógica (buscador, formulario de sugerencias).
- Documentar en README cómo correr, construir y desplegar el proyecto.

ENTREGABLE
- Proyecto Angular funcional con datos mock, navegación completa según el
  mapa anterior, y estilos aplicados desde docs/estilos-generales.css
  (convertir a variables SCSS si es necesario, sin cambiar la paleta).
```

> Nota: ajusta los colores exactos de marca (`--color-primary`, `--color-secondary`) en `docs/estilos-generales.css` con los valores oficiales del manual de marca de la Universidad Rafael Landívar si difieren de los propuestos.
