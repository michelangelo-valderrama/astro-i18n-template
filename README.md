Astro i18n template

Este es un template en el que se implementa i18n en Astro.

## Setup

```sh
nvm use

npm i
npm run dev
```

## Características

- Usas lo que necesitas.
- 100% customizable.
- Lo extiendes como prefieras.
- Evita duplicar código(1).
- Tipado en las traducciones.
- Adaptable a librerías de UI.
- Un proyecto con casos reales.

(1): Aquí hay un paréntesis. Hay que duplicar
```
import type { GetStaticPaths } from 'astro'

import { locales } from '@/i18n'

export const getStaticPaths = (() => {
  return locales.map((locale) => ({
    params: { locale }
  }))
}) satisfies GetStaticPaths
```

en la mayoría de los componentes `src/pages/[locale]/*.astro` por las rutas dinámicas.
Además, si se quiere que la ruta raiz sea el idioma por defecto, hay que duplicar la páginas (pero no el contenido).
Aún con todo, es mejor eso que tener que duplicar todas las páginas y su contenido para cada idioma, que es aún más propenso a errores.

## Cómo usar

- Copias el directorio `src/i18n/` y lo pegas a tu proyecto.
- Lo adaptas como lo necesites.

## Ejemplos

- **Página básica** en `src/pages/404.astro`.
- **Archivos Markdown traducidos** en `src/pages/[locale]/post/[slug].astro`.
- **Paginación con traducciones** en `src/pages/[locale]/blog/[...page].astro`.

## Estructura de este proyecto

```
📂 blog/
  📂 en/
    📄 hello.md
  📂 es/
    📄 hello.md
📂 src/
  📁 components/
  📂 i18n/
    📂 react/
      📄 set-locale.tsx
      📄 use-i18n.ts
      📄 index.ts
    📂 seo/
      📄 AlternateLinks.astro
      📄 OGLocales.astro
      📄 index.ts
    📂 store/
      📄 current-locale.ts
    📂 translations/
      📂 en/
        📄 common.json
        📄 home.json
        📄 index.ts
      📂 es/
        📄 common.json
        📄 home.json
        📄 index.ts
      📄 index.ts
    📄 config.ts
    📄 index.ts
    📄 types.ts
    📄 utils.ts
  📁 layouts/
  📁 libs/
  📁 pages/
  📁 styles/
  📄 content.config.ts
  📄 icons.tsx
```

---

- `blog/` - Directorio donde se encuentran los archivos Markdown del blog. Dentro de este directorio, los artículos se agrupan por su idioma. Todos tienen que tener el mismo id (el nombre del archivo).
- `src/i18n/` - Directorio donde se concentra todo lo relacionado a i18n.
  - `react/` - Los componentes y hooks necesarios para usar i18n en React.
  - `seo/` - Componentes relacionados al SEO.
  - `store/` - Archivos que interactuan con la store (NanoStores, por ser agnóstico) para llevar el registro del idioma actual en el lado del cliente y en los componentes de UI de librerías externas (React, Vue, etc...).
  - `translations/` - Las traducciones en archivos JSON agrupadas por su idioma.
  - `config.ts` - Lo que mayormente se debe editar para adaptar este template.
  - `index.ts` - Archivo de barril.
  - `types.ts` - Tipos de i18n.
  - `utils.ts` - Utilidades de i18n.

##
