# artes-landivar

Centro Virtual del Patrimonio (CVP) – Universidad Rafael Landívar. Angular 21 (standalone, signals, zoneless).

## Scripts

```bash
npm install
npm start            # http://localhost:4200
npm run build        # dist/artes-landivar
npm test             # pruebas unitarias (Vitest)
```

## Estructura

```
src/app/
  core/       config (datos del sitio), data (mapa del sitio y mocks), models, services, navigation
  layout/     header (menú responsive), breadcrumb, footer
  shared/     feature-card ("Chispudo"), page-hero, section-layout, section-nav, tour-viewer, timeline
  pages/      home, search, section, glossary, agenda (+ suggestion-form), tour, timeline, about, social, contact, not-found
```

- **Mapa del sitio**: `src/app/core/data/navigation.data.ts` genera menú, rutas (lazy), breadcrumb, submenús y buscador.
- **Estilos generales**: `docs/estilos-generales.css` se carga globalmente desde `angular.json`; los componentes solo usan sus variables `:root`.