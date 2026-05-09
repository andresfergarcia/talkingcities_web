# 📚 GUÍA COMPLETA - Talking Cities

## Índice
1. [Cambiar el logotipo](#1-cambiar-el-logotipo)
2. [Añadir imágenes personalizadas](#2-añadir-imágenes-personalizadas)
3. [Sistema multiidioma](#3-sistema-multiidioma)
4. [Subir a Hostinger VPS](#4-subir-a-hostinger-vps)
5. [Editar menú y otras secciones](#5-editar-menú-y-otras-secciones)
6. [Cómo crear un nuevo Relato (Artículo)](#6-cómo-crear-un-nuevo-relato-artículo)
7. [Cómo activar un Tour](#7-cómo-activar-un-tour)
8. [Estructura del Proyecto](#8-estructura-del-proyecto)
9. [Flujo de Trabajo GitHub → Hostinger VPS](#9-flujo-de-trabajo-github--hostinger-vps)
10. [Base de Datos (Prisma)](#10-base-de-datos-prisma)
11. [Gestión de Audio](#11-gestión-de-audio)
12. [SEO y Mapas del Sitio](#12-seo-y-mapas-del-sitio)
13. [Solución de Problemas Comunes](#13-solución-de-problemas-comunes)

---

## 1. Cambiar el logotipo

### Opción A: Usar una imagen de logo

1. **Sube tu logo** a `/public/images/logo.png` (o .svg)
2. El logo debe ser de aproximadamente 150x40 píxeles para el header

**Archivo:** `components/layout/header.tsx`

El logo ha sido optimizado para ser más grande y legible. Para cambiar la imagen:
1. Sube tu logo a `/public/images/logo.png`.
2. El componente ya está configurado para manejar una altura de `h-14` (56px) o superior para una apariencia premium.

```tsx
{/* Logo */}
<Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
  <Image 
    src="/images/logo.png" 
    alt="Talking Cities" 
    width={200} // Ajustado para mejor proporción
    height={60}
    className="h-14 w-auto object-contain"
    priority
  />
</Link>
```

### Opción B: Solo cambiar el texto del logo

Si solo quieres cambiar el texto "Talking Cities", edita:
- **Archivo:** `data/content/site-settings.json`
- **Campo:** `"siteName": "Tu Nuevo Nombre"`

---

## 2. Añadir imágenes personalizadas

### Estructura de carpetas de imágenes

```
public/images/
├── logo.png              → Tu logotipo
├── hero/                  → Imágenes de fondo principales
│   └── hero-home.jpg
├── sections/              → Imágenes para secciones específicas
│   ├── value-proposition.jpg
│   ├── how-it-works-1.jpg
│   └── about-hero.jpg
├── cities/                → Fotos de ciudades
├── architecture/          → Edificios y monumentos
├── resistance/            → Fotos históricas
└── tours/                 → Imágenes de tours específicos
```

### Cómo subir tus imágenes diseñadas

1. **Crea la carpeta** si no existe (por ejemplo: `public/images/sections/`)
2. **Sube tu imagen** a esa carpeta
3. **Edita el JSON correspondiente** para usar la nueva ruta

### Ejemplo: Cambiar la imagen del hero de la homepage

**Archivo:** `data/content/homepage.json`

```json
"hero": {
  "backgroundImage": "/images/hero/mi-nueva-imagen.jpg",
  ...
}
```

### Ejemplo: Cambiar imagen de una ciudad

**Archivo:** `data/content/cities.json`

```json
{
  "slug": "warsaw",
  "name": "Warsaw",
  "image": "/images/cities/mi-imagen-varsovia.jpg",
  ...
}
```

### Tamaños recomendados de imágenes

| Tipo de imagen | Tamaño recomendado | Relación de aspecto |
|----------------|-------------------|--------------------|
| Hero/Banner    | 1920x1080 px      | 16:9              |
| Cards de tours | 800x600 px        | 4:3               |
| Cards de ciudades | 800x600 px     | 4:3               |
| Secciones      | 1200x800 px       | 3:2               |
| Logo           | 200x60 px         | Flexible          |

---

## 3. Sistema multiidioma

### Estado actual
- ✅ **Sistema multiidioma COMPLETO**: Implementado con `next-intl`.
- ✅ **Soporte para 4 idiomas**: Español (ES), Inglés (EN), Polaco (PL) y Alemán (DE).
- ✅ **Contenido enriquecido**: Historias completas integradas para 5 ciudades principales.

### Cómo editar traducciones de la interfaz
Los textos fijos (botones, menú, títulos de secciones) se encuentran en:
- `messages/es.json` (Español)
- `messages/en.json` (Inglés)
- `messages/pl.json` (Polaco)
- `messages/de.json` (Alemán)

### Cómo añadir/editar Historias (Historias de Resiliencia)
Las historias se gestionan en `data/content/stories.json`. Cada campo de texto soporta sufijos para los idiomas:
- `title`: Título en inglés (base)
- `title_es`: Título en español
- `title_pl`: Título en polaco
- `title_de`: Título en alemán
*(Lo mismo aplica para `introduction`, `sections[].content`, etc.)*

### Configuración de idiomas (middleware y routing)

**Archivo:** `i18n/routing.ts`
```typescript
export const locales = ["en", "es", "pl", "de"] as const;
export const defaultLocale: Locale = "en";
```

**Archivo:** `middleware.ts`
- Detecta idioma por cookie (`NEXT_LOCALE`) o cabecera `Accept-Language`
- Redirige automáticamente a `/es/`, `/en/`, `/pl/`, `/de/`
- Las rutas sin prefijo de idioma se redirigen al idioma detectado o al default (`en`)

---

## 4. Subir a Hostinger VPS

### Información del despliegue actual
- **Servidor:** Hostinger VPS KVM2
- **Repo:** GitHub (master/main)
- **Stack:** Node.js + Next.js (con servidor vivo, NO export estático)
- **Base de datos:** PostgreSQL (Prisma ORM)
- **SSL/HTTPS:** ✅ Configurado
- **Dominio:** talkingcities.eu

### Configuración del proyecto para Hostinger

En `next.config.js`:
```js
const nextConfig = {
  distDir: '.next',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }, // Necesario para Hostinger
};
```

### Comandos para desplegar en el VPS

```bash
# Conectarse por SSH
ssh usuario@IP_del_VPS

# Ir al proyecto
cd /ruta/del/proyecto

# Actualizar desde GitHub
git pull origin master

# Instalar dependencias
npm install

# Generar Prisma
npx prisma generate
npx prisma db push

# Build
npm run build

# Iniciar/reiniciar la app
pm2 restart talkingcities
# o si no usas PM2:
npx next start -p 3000 &
```

### Variables de entorno necesarias en producción
- `DATABASE_URL` — URL de PostgreSQL
- `NEXTAUTH_URL` — https://talkingcities.eu
- `NEXTAUTH_SECRET` — Clave secreta

### Comandos útiles para el VPS

```bash
# Ver procesos de Node.js
ps aux | grep node

# Ver logs de la app
pm2 logs talkingcities

# Listar procesos PM2
pm2 list
```

---

## 5. Editar menú y otras secciones

### Editar el menú de navegación

**Archivo:** `components/layout/header.tsx`

Busca el array `navLinks` al inicio del archivo:

```tsx
const navLinks = [
  { href: "/tours", label: "Tours", icon: MapPin },
  { href: "/stories", label: "Stories", icon: BookOpen },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];
```

**Para cambiar un enlace:**
```tsx
{ href: "/nueva-pagina", label: "Nuevo Nombre", icon: Star },
```

**Para añadir un enlace:**
Añade un nuevo objeto al array.

**Para quitar un enlace:**
Elimina el objeto correspondiente.

**Íconos disponibles:**
Todos los íconos de [Lucide Icons](https://lucide.dev/icons/). Impórtalos al inicio del archivo.

### Editar el footer

**Archivo:** `components/layout/footer.tsx`

El footer tiene estas secciones:
- **Explore**: Enlaces a Tours y Stories
- **About**: Enlaces a About y Contact
- **Get in Touch**: Email de contacto

Busca los arrays de enlaces y modifícalos igual que el menú.

### Editar textos del homepage

**Archivo:** `data/content/homepage.json`

| Sección | Campo JSON |
|---------|------------|
| Hero principal | `hero.title`, `hero.subtitle`, `hero.backgroundImage` |
| Propuesta de valor | `valueProposition.title`, `valueProposition.features[]` |
| Cómo funciona | `howItWorks.title`, `howItWorks.fromHome`, `howItWorks.onTheStreets` |
| Nuevos Relatos | Se edita en `messages/[id].json` (`cities.title` y `cities.subtitle`) |
| Historias Gratuitas | Se definen en `data/content/stories.json` |
| Compromiso social | `commitment.title`, `commitment.description`, `commitment.stat` |

### Editar página About

**Archivo:** `data/content/about.json`

| Sección | Campo JSON |
|---------|------------|
| Hero | `hero.title`, `hero.subtitle`, `hero.image` |
| Misión | `mission.title`, `mission.content` |
| Impacto | `impact.title`, `impact.content` |
| Modelo de negocio | `businessModel.philosophy`, `businessModel.free`, `businessModel.premium` |
| Origen | `origin.title`, `origin.content` |

### Editar configuración general del sitio

**Archivo:** `data/content/site-settings.json`

```json
{
  "siteName": "Talking Cities",
  "logoColorPath": "/images/logo-color.png",
  "logoWhitePath": "/images/logo-white.png",
  "siteTagline": "The city is speaking. You just have to listen.",
  "siteDescription": "Descripción para SEO",
  "contactEmail": "info@talkingcities.eu",
  "socialLinks": {
    "instagram": "https://instagram.com/talkingcities",
    "facebook": "https://facebook.com/talkingcities",
    "twitter": ""
  },
  "voicemapPublisher": "https://voicemap.me/publisher/1535-...",
  "appLinks": {
    "googlePlay": "https://play.google.com/store/apps/...",
    "appleStore": "https://apps.apple.com/us/app/..."
  },
  "currency": "€",
  "defaultLanguage": "en"
}
```

---

## 6. Cómo crear un nuevo Relato (Artículo)

Esta sección es fundamental para el archivo oral de **Talking Cities**. Los artículos se gestionan desde `data/content/stories.json`.

### Paso 1: Preparar Multimedia
- **Fotos:** Guárdalas en `public/images/stories/[nombre-del-relato]/`
- **Audio:** Guarda los MP3 en `public/audio/[nombre-del-relato]/`
- **Video:** Ten a mano el enlace de YouTube en formato `/embed/`.

### Paso 2: Estructura del Artículo (Relato)
Copia este bloque en `stories.json` y rellena tus textos:

```json
{
  "slug": "nombre-de-la-url",
  "title_es": "Título en Español",
  "introduction_es": "Párrafo introductorio.",
  "image": "/images/stories/portada.jpg",
  "sections": [
    {
      "title_es": "Subtítulo de bloque",
      "video": "https://www.youtube.com/embed/CÓDIGO",
      "content_es": "Texto del bloque..."
    }
  ],
  "audioFiles": {
    "spanish": "/audio/relato/es.mp3",
    "english": "/audio/relato/en.mp3"
  },
  "conclusion_es": "Cierre del artículo."
}
```

### Paso 3: Gestión de Tarjetas (Sección "Nuevos Relatos" en la Home)
Las tarjetas que aparecen en la Home bajo el título "Nuevos Relatos" se controlan desde `data/content/cities.json`.

**Puntos importantes:**
- **Mostrar/Ocultar tarjeta:** Solo las tarjetas con `"available": true` se mostrarán en la página de inicio. Las que tengan `false` quedarán ocultas automáticamente.
- **Vincular a un relato:** Por defecto, una tarjeta lleva a los Tours. Para enlazarla a un artículo, usa el campo `"link"`.
- **Etiquetas personalizadas:** Puedes cambiar el texto de las esquinas (que por defecto dice "Próximamente" o "Disponible") usando `"topLabel"` y `"bottomLabel"` (con sus respectivos sufijos de idioma como `_es`).
- **Imagen y textos:** Edita `"image"`, `"name"`, `"tagline"` y `"description"` para cambiar el contenido visual.

*Ejemplo de tarjeta de Nuevo Relato (Entrevista):*
```json
{
  "slug": "from-cattle-car-to-nation",
  "name": "Bronisława Raszkiewicz",
  "tagline_es": "Relato de Colona en Territorios Recuperados",
  "description_es": "La partida de los Kresy en febrero de 1946 fue un ritual de duelo y esperanza.",
  "image": "/images/stories/bronisława.jpeg",
  "available": true,
  "link": "/stories/from-cattle-car-to-nation",
  "topLabel_es": "Entrevista",
  "bottomLabel_es": "Revive la Historia"
}
```

### Paso 4: El Reproductor de Audio (Automático)
No necesitas "crear" el reproductor de audio. Este aparece **automáticamente** si rellenas el campo `audioFiles`.

1. **Ruta del archivo:** Asegúrate de que el MP3 esté en `public/audio/...`
2. **Configuración:** En el JSON, usa este formato:
```json
"audioFiles": {
  "spanish": "/audio/nombre-carpeta/es.mp3",
  "english": "/audio/nombre-carpeta/en.mp3"
}
```
*Si un idioma no tiene audio, simplemente no pongas esa línea.*

### Paso 5: Traducciones con IA
No necesitas traducir manualmente. Escribe tu artículo en español y dime: 
> *"Tradúceme este artículo al Polaco, Inglés y Alemán para stories.json"*



Yo te devolveré el código listo con todos los campos (`_es`, `_en`, `_pl`, `_de`) completados.

### Paso 6: Publicar
Usa estos comandos en la terminal:
1. `git add .`
2. `git commit -m "Nuevo artículo: [Título]"`
3. `git push origin master`

---

## 7. Cómo activar un Tour

Los tours se gestionan desde `data/content/tours.json`.

### Cambiar estado del tour
Cada tour tiene un campo `"status"`:
- `"coming-soon"` → Muestra "Próximamente"
- `"available"` → Muestra botón de compra

También hay un campo `"articleSlug"` que vincula el tour con un artículo de historia relacionado (si existe).

### Tours actualmente definidos (14 en total):

| Ciudad | Tour Resistencia | Tour Arquitectura |
|--------|-----------------|-------------------|
| Varsovia | `warsaw-voices-of-resistance` | `warsaw-buildings-with-heart` |
| Cracovia | `krakow-voices-of-resistance` | `krakow-buildings-with-heart` |
| Wrocław | `wroclaw-voices-of-resistance` | `wroclaw-buildings-with-heart` |
| Poznań | `poznan-voices-of-resistance` | `poznan-buildings-with-heart` |
| Katowice | `katowice-voices-of-resistance` | `katowice-buildings-with-heart` |
| Gdańsk | `gdansk-voices-of-resistance` | `gdansk-buildings-with-heart` |
| Zielona Góra | `zielona-gora-voices-of-resistance` | `zielona-gora-buildings-with-heart` |

### Tours con artículo asociado
Los siguientes tours tienen un `articleSlug` que los vincula a un artículo en `stories.json`:
- `warsaw-voices-of-resistance` → artículo: `warsaw-voices-of-resistance`
- `krakow-voices-of-resistance` → artículo: `krakow-voices-of-resistance`
- `wroclaw-voices-of-resistance` → artículo: `wroclaw-voices-of-resistance`
- `poznan-voices-of-resistance` → artículo: `poznan-voices-of-resistance`
- `zielona-gora-voices-of-resistance` → artículo: `zielona-gora-voices-of-resistance`
- `zielona-gora-buildings-with-heart` → artículo: `zielona-gora-buildings-with-heart`

### Precio actual
Todos los tours están a **€9.99** con soporte para 2 idiomas (Inglés y Polaco).

---

## 8. Estructura del Proyecto

### Stack tecnológico
- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + shadcn/ui
- **Base de datos:** PostgreSQL + Prisma ORM
- **Internacionalización:** next-intl
- **Autenticación:** NextAuth.js
- **Íconos:** Lucide React
- **Formularios:** react-hook-form + zod
- **Gráficos:** Chart.js, Recharts, Plotly.js
- **Mapas:** Mapbox GL
- **Animaciones:** Framer Motion

### Estructura de carpetas

```
├── app/                          # Páginas (App Router)
│   ├── [locale]/                 # Páginas por idioma
│   │   ├── about/                # Página "Sobre Nosotros"
│   │   ├── contact/              # Página de contacto
│   │   ├── stories/              # Historias orales
│   │   │   └── [slug]/           # Detalle de historia
│   │   ├── tours/                # Tours
│   │   │   └── [slug]/           # Detalle de tour
│   │   ├── layout.tsx            # Layout raíz
│   │   ├── page.tsx              # Homepage
│   │   └── not-found.tsx         # Página 404
│   ├── _api/                     # API routes
│   │   ├── contact/              # Formulario de contacto
│   │   └── newsletter/           # Suscripción newsletter
│   ├── layout.tsx                # Layout global
│   ├── sitemap.ts                # Sitemap automático
│   └── robots.ts                 # Configuración robots.txt
├── components/                   # Componentes React
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Secciones de página
│   ├── forms/                    # Formularios
│   └── ui/                       # Componentes shadcn/ui
├── data/content/                 # Contenido en JSON
│   ├── about.json                # Página About
│   ├── cities.json               # Ciudades (7)
│   ├── homepage.json             # Homepage
│   ├── site-settings.json        # Config global
│   ├── stories.json              # Historias (artículos)
│   ├── testimonials.json         # Testimonios
│   └── tours.json                # Tours (14)
├── i18n/                         # Config next-intl
├── lib/                          # Utilidades
├── messages/                     # Traducciones UI
│   ├── en.json / es.json / pl.json / de.json
├── public/                       # Archivos estáticos
│   ├── audio/                    # Archivos MP3 por ciudad
│   └── images/                   # Imágenes
├── prisma/                       # Schema de base de datos
└── middleware.ts                 # Middleware de idioma
```

---

## 9. Flujo de Trabajo GitHub → Hostinger VPS

### Ciclo de desarrollo

```
Código local (ediciones)
    → git add .
    → git commit -m "mensaje"
    → git push origin master
    → Hostinger VPS: git pull + npm run build + restart
```

### Comandos de despliegue rápido

```bash
# Local: subir cambios
git add .
git commit -m "Descripción del cambio"
git push origin master

# En el VPS (SSH):
cd /ruta/del/proyecto
git pull origin master
npm install
npx prisma generate
npm run build
pm2 restart talkingcities
```

---

## 10. Base de Datos (Prisma)

### Archivo: `prisma/schema.prisma`

### Modelos actuales:

```prisma
generator client {
    provider = "prisma-client-js"
    binaryTargets = ["native", "linux-musl-arm64-openssl-3.0.x"]
    output = "/home/ubuntu/talkingcities_web/nextjs_space/node_modules/.prisma/client"
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String   @default("")
  message   String
  status    String   @default("new")
  createdAt DateTime @default(now())
}

model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())
}
```

### Comandos útiles:

```bash
# Generar cliente Prisma
npx prisma generate

# Sincronizar schema con DB
npx prisma db push

# Abrir Prisma Studio (interfaz gráfica)
npx prisma studio

# Ejecutar seed (si existe)
npx tsx --require dotenv/config scripts/safe-seed.ts
```

---

## 11. Gestión de Audio

### Estructura de archivos de audio

```
public/audio/
├── zielona-gora/      → es.mp3, en.mp3, pl.mp3, de.mp3
├── wroclaw/           → es.mp3, en.mp3, pl.mp3, de.mp3
├── warsaw/            → es.mp3, en.mp3, pl.mp3, de.mp3
├── poznan/            → es.mp3, en.mp3, pl.mp3, de.mp3
├── krakow/            → es.mp3, en.mp3, pl.mp3, de.mp3
├── poland/            → es.mp3, en.mp3, pl.mp3, de.mp3
├── poland_2/          → es.mp3, en.mp3, pl.mp3, de.mp3
└── poland_3/          → es.mp3, en.mp3, pl.mp3, de.mp3
```

### Cómo añadir audio a un relato
En `data/content/stories.json`, añade el campo `"audioFiles"`:
```json
"audioFiles": {
  "spanish": "/audio/nombre-carpeta/es.mp3",
  "english": "/audio/nombre-carpeta/en.mp3",
  "polish": "/audio/nombre-carpeta/pl.mp3",
  "german": "/audio/nombre-carpeta/de.mp3"
}
```

**Importante:** El reproductor de audio aparece **automáticamente** cuando el campo `audioFiles` existe en el JSON del relato.

---

## 12. SEO y Mapas del Sitio

### Archivos existentes:
- `app/sitemap.ts` — Genera sitemap automático
- `app/robots.ts` — Configura robots.txt
- `data/content/site-settings.json` — Meta description y datos SEO

### Las URLs del sitio usan el patrón:
```
https://talkingcities.eu/{idioma}/{pagina}
```

Ejemplos:
- `https://talkingcities.eu/es/tours`
- `https://talkingcities.eu/en/stories/warsaw-voices-of-resistance`
- `https://talkingcities.eu/pl/about`

---

## 13. Solución de Problemas Comunes

### Error en build por TypeScript
En `next.config.js`:
```js
typescript: {
  ignoreBuildErrors: true, // Ya configurado
}
```

### Error en build por ESLint
En `next.config.js`:
```js
eslint: {
  ignoreDuringBuilds: true, // Ya configurado
}
```

### Imágenes no optimizadas
En `next.config.js`:
```js
images: { 
  unoptimized: true // Ya configurado para Hostinger
}
```

### Error de Prisma en producción
```bash
npx prisma generate
npx prisma db push
```

### El servidor no responde
```bash
# Verificar que Node.js está corriendo
ps aux | grep node

# Reiniciar la app
pm2 restart talkingcities
```

### Inconsistencia conocida en porcentajes (CORREGIDA)
- ~~En `homepage.json` el `commitment.stat.value` estaba en **40%**~~ ✅ Corregido a **10%**
- En `about.json` el `businessModel.socialCommitment` dice **10%** ✅ Correcto

---

## 📞 ¿Necesitas ayuda?

Si tienes dudas sobre algún punto específico o quieres que implemente:
- ✅ Traducciones automáticas a 4 idiomas (ES, EN, PL, DE)
- ✅ Cambios en diseño y contenido
- ✅ Nuevos relatos (artículos completos con multimedia)
- ✅ Activación de tours (cambiar de "coming-soon" a "available")
- ✅ Edición de cualquier sección (homepage, about, cities, etc.)
- ✅ Subida de imágenes y audio

¡Solo dime y lo hago!

