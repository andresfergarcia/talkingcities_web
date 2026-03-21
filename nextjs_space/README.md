# Talking Cities - Guía de Edición de Contenido

## 📁 Dónde están los archivos editables

Todo el contenido del sitio web se gestiona mediante archivos JSON ubicados en:

```
data/content/
├── site-settings.json    → ⚙️  Configuración general (nombre, email, redes sociales)
├── homepage.json         → 🏠  Página de inicio (hero, propuesta de valor, CTAs)
├── tours.json            → 🎧  Tours de audio (precios, duración, descripción)
├── cities.json           → 🏙️  Ciudades (nombre, imagen, descripción)
├── testimonials.json     → ⭐  Testimonios de clientes
├── about.json            → ℹ️  Página "Sobre Nosotros"
└── stories.json          → 📖  Artículos/Historias orales gratuitas
```

## ✏️ Cómo editar textos

1. Abre el archivo JSON correspondiente con cualquier editor de texto
2. Busca el texto que quieres cambiar
3. Modifica el texto entre comillas `"..."`
4. Guarda el archivo
5. Los cambios se verán automáticamente al recargar la página

### Ejemplo: Cambiar el título del hero

En `homepage.json`, busca:
```json
"hero": {
  "title": "The city is speaking.",
  "titleHighlight": "You just have to listen.",
```
Cambia el texto entre comillas y guarda.

## 📷 Cómo cambiar imágenes

1. Sube tu nueva imagen a la carpeta `public/images/`
2. En el archivo JSON correspondiente, cambia la ruta de la imagen
3. Usa el formato: `/images/tu-carpeta/nombre-imagen.jpg`

### Carpetas de imágenes
```
public/images/
├── architecture/    → Fotos de edificios y arquitectura
├── cities/          → Fotos generales de ciudades
├── resistance/      → Fotos de resistencia polaca
└── other/           → Otras imágenes
```

## 🎧 Cómo añadir un nuevo tour

En `tours.json`, añade un nuevo objeto dentro del array `tours`:

```json
{
  "slug": "mi-nuevo-tour",
  "city": "NombreCiudad",
  "citySlug": "nombre-ciudad",
  "title": "Título del Tour",
  "subtitle": "Subtítulo evocador",
  "type": "Voices of Resistance",
  "description": "Descripción del tour...",
  "price": 9.99,
  "currency": "€",
  "duration": "1.5 hours",
  "distance": "3 km",
  "stops": 7,
  "languages": ["English", "Polish", "Spanish", "German"],
  "image": "/images/cities/mi-imagen.jpg",
  "highlights": ["Punto 1", "Punto 2", "Punto 3"],
  "includes": ["GPS-guided audio narration", "Stories in 4 languages", "Offline access via VoiceMap", "Map with all stops"],
  "voicemapUrl": "https://voicemap.me/...",
  "status": "available",
  "articleSlug": ""
}
```

**Notas importantes:**
- `slug`: Usado en la URL. Solo letras minúsculas, números y guiones
- `status`: Usa `"available"` para tours activos o `"coming-soon"` para próximos
- `articleSlug`: Si hay un artículo relacionado en stories.json, pon su slug aquí

## 📖 Cómo añadir una nueva historia

En `stories.json`, añade un nuevo objeto dentro del array `stories`:

```json
{
  "slug": "mi-nueva-historia",
  "city": "NombreCiudad",
  "citySlug": "nombre-ciudad",
  "type": "Voices of Resistance",
  "title": "Título de la Historia",
  "introduction": "Texto introductorio...",
  "image": "/images/mi-imagen-hero.jpg",
  "sections": [
    {
      "title": "Título de la sección",
      "content": "Texto completo de la sección...",
      "image": "/images/imagen-seccion.jpg"
    }
  ],
  "conclusion": "Texto de conclusión...",
  "audioFiles": {
    "english": "https://url-del-audio-en-ingles.mp3",
    "polish": "https://url-del-audio-en-polaco.mp3",
    "spanish": "",
    "german": ""
  },
  "relatedTourSlug": "slug-del-tour-relacionado"
}
```

## ⭐ Cómo añadir testimonios

En `testimonials.json`, añade al array `testimonials`:

```json
{
  "quote": "Texto del testimonio...",
  "author": "Nombre del autor",
  "location": "Ciudad, País",
  "rating": 5,
  "tour": "Nombre del tour"
}
```

## 🏙️ Cómo añadir una nueva ciudad

En `cities.json`, añade al array `cities`:

```json
{
  "slug": "gdansk",
  "name": "Gdańsk",
  "tagline": "The Pearl of the Baltic",
  "description": "Descripción de la ciudad...",
  "image": "/images/architecture/gdansk_old_town_hall.jpg",
  "available": false
}
```

Cambia `available` a `true` cuando haya tours disponibles para esa ciudad.

## ⚠️ Reglas importantes

1. **No borres las comillas** `""` - siempre escribe el texto dentro de ellas
2. **No borres las comas** `,` entre campos
3. **No borres los corchetes** `[]` ni las llaves `{}`
4. **Valida tu JSON** antes de guardar en: https://jsonlint.com/
5. Las imágenes deben ser `.jpg`, `.png` o `.webp`
6. Los slugs solo pueden contener letras minúsculas, números y guiones `-`

## 🌍 Idiomas

El contenido del sitio está actualmente en inglés. Los audios están disponibles en 4 idiomas (EN, PL, ES, DE) mediante el reproductor de audio integrado.

## 📧 Formularios

- **Formulario de contacto**: Los mensajes se guardan en la base de datos
- **Newsletter**: Las suscripciones se guardan en la base de datos

Puedes ver los datos almacenados a través del panel de administración de la plataforma.
