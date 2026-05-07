# 📚 GUÍA COMPLETA - Talking Cities

## Índice
1. [Cambiar el logotipo](#1-cambiar-el-logotipo)
2. [Añadir imágenes personalizadas](#2-añadir-imágenes-personalizadas)
3. [Sistema multiidioma](#3-sistema-multiidioma)
4. [Subir a Hostinger](#4-subir-a-hostinger)
5. [Editar menú y otras secciones](#5-editar-menú-y-otras-secciones)
6. [Cómo crear un nuevo Relato (Artículo)](#6-cómo-crear-un-nuevo-relato-artículo)

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

---

## 4. Subir a Hostinger

### PASO 1: Exportar el proyecto

**Opción A - Desde Abacus AI:**
1. Haz clic en el botón **"Files"** (arriba a la derecha de la interfaz)
2. Descarga el archivo ZIP del proyecto
3. Extrae el contenido

**Opción B - Comando en terminal:**
```bash
cd /home/ubuntu/talkingcities_web
zip -r talkingcities_export.zip nextjs_space/
```

### PASO 2: Preparar para Hostinger

#### Si usas Hostinger con Node.js (recomendado):

1. **Sube los archivos** a tu hosting vía FTP o el administrador de archivos
2. **Configura las variables de entorno** en el panel de Hostinger:
   - `DATABASE_URL` → Tu URL de PostgreSQL
   - `NEXTAUTH_URL` → https://talkingcities.eu
   - `NEXTAUTH_SECRET` → Una clave secreta larga

3. **Ejecuta los comandos:**
   ```bash
   npm install
   npx prisma generate
   npx prisma db push
   npm run build
   npm start
   ```

#### Si usas Hostinger con hosting compartido (estático):

No es posible directamente. Next.js requiere Node.js. Opciones:

- **Vercel** (gratis): La mejor opción para Next.js
- **Hostinger VPS**: Soporte completo de Node.js
- **Hostinger Cloud**: También soporta Node.js

### PASO 3: Configurar dominio

1. En Hostinger, ve a **Dominios** → **DNS Zone**
2. Apunta el dominio a la IP de tu servidor
3. Espera propagación DNS (hasta 48 horas)

### PASO 4: Configurar SSL (HTTPS)

1. En Hostinger, ve a **SSL** → **Instalar SSL gratuito**
2. Selecciona tu dominio
3. Actívalo

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
  "tagline": "Self-guided audio tours...",
  "description": "Descripción para SEO",
  "contactEmail": "hello@talkingcities.eu",
  "social": {
    "instagram": "https://instagram.com/...",
    "facebook": "https://facebook.com/..."
  }
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

### Paso 3: Gestión de Tarjetas (Sección "Nuevos Relatos")
Las tarjetas que aparecen en la Home bajo el título "Nuevos Relatos" se controlan desde `data/content/cities.json`.

- **Para cambiar de "Próximamente" a "Explorar":** Cambia `"available": false` por `"available": true`.
- **Para cambiar la imagen de la tarjeta:** Edita el campo `"image"`.
- **Para cambiar el texto descriptivo:** Edita `"description_es"`.

*Ejemplo de tarjeta de ciudad:*
```json
{
  "slug": "warsaw",
  "name": "Warsaw",
  "tagline_es": "Un Fénix de Hormigón",
  "description_es": "Capital de Polonia, reconstruida desde las cenizas...",
  "image": "/images/cities/warsaw_modern.jpg",
  "available": true
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

### Paso 4: Publicar
Usa estos comandos en la terminal:
1. `git add .`
2. `git commit -m "Nuevo artículo: [Título]"`
3. `git push origin master`

---

## 📞 ¿Necesitas ayuda?

Si tienes dudas sobre algún punto específico o quieres que implemente:
- El sistema multiidioma completo
- Cambios específicos en el diseño
- Nuevas funcionalidades

¡Solo dime y lo hago!

