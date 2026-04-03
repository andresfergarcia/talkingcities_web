# Guía: De Abacus → GitHub → Hostinger

## Paso 1: Preparar los archivos para descargar

Descarga la carpeta `nextjs_space/` completa desde el botón "Files" en la esquina superior derecha de DeepAgent.

## Paso 2: Preparar para GitHub

Antes de subir a GitHub, haz estos cambios en tu copia local:

### 2.1 Reemplazar `next.config.js`

El archivo actual tiene configuraciones específicas de Abacus. 
**Reemplaza TODO el contenido de `next.config.js`** con:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
```

### 2.2 Generar `yarn.lock`

El `yarn.lock` actual es un enlace simbólico. En tu computador:

```bash
cd tu-carpeta-del-proyecto/
rm -f yarn.lock
yarn install
```

Esto creará un `yarn.lock` real con todas las dependencias.

### 2.3 Crear archivo `.env` en Hostinger

Necesitas crear un archivo `.env` en el servidor con:

```
DATABASE_URL=tu_url_de_base_de_datos_postgres
```

Si no necesitas la base de datos (contacto/newsletter), puedes omitir esta variable.

### 2.4 Verificar `.gitignore`

Ya está creado. Asegúrate de que incluya:
- `node_modules/`
- `.next/`
- `.build/`
- `.env`
- `.deploy/`

### 2.5 i18n y Middleware
Asegúrate de que la carpeta `messages/` esté en la raíz del proyecto al subir a GitHub. Sin estos archivos JSON, el sistema multiidioma `next-intl` no podrá cargar los textos y el sitio dará error en las rutas con prefijo de idioma (`/es`, `/en`, etc.).

## Paso 3: Subir a GitHub

```bash
cd tu-carpeta-del-proyecto/
git init
git add .
git commit -m "Initial commit - Talking Cities website"
git branch -M main
git remote add origin https://github.com/tu-usuario/talkingcities.git
git push -u origin main
```

## Paso 4: Desplegar en Hostinger

### Opción A: Hostinger con Node.js (recomendado)

Si tienes un plan de Hostinger que soporte Node.js:

1. Conecta tu repositorio GitHub en el panel de Hostinger
2. Configura:
   - **Build command**: `yarn install && yarn build`
   - **Start command**: `yarn start`
   - **Node version**: 18 o superior
3. Añade las variables de entorno en el panel
4. Despliega

### Opción B: Export estático (si Hostinger no soporta Node.js)

Si tu plan de Hostinger es solo hosting estático:

1. Modifica `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
module.exports = nextConfig;
```

2. Ejecuta: `yarn build`
3. Sube la carpeta `out/` generada a Hostinger via FTP

**Nota**: Con export estático, las rutas de API (`/api/contact`, `/api/newsletter`) NO funcionarán. El formulario de contacto y newsletter necesitan un backend con Node.js.

## Paso 5: Conectar dominio talkingcities.eu

En Hostinger:
1. Ve a "Dominios" → "Conectar dominio existente"
2. Si talkingcities.eu ya está en Hostinger, simplemente apunta al nuevo hosting
3. Actualiza los DNS si es necesario

## Posibles errores y soluciones

### Error: "Module not found"
→ Ejecuta `yarn install` de nuevo

### Error: "Cannot find module 'prisma'"
→ Ejecuta `npx prisma generate` después de `yarn install`
→ Si no usas base de datos, puedes comentar las rutas API

### Error: "ENOENT: no such file" con archivos de audio
→ Verifica que la carpeta `public/audio/` se haya subido correctamente a GitHub
→ Los archivos MP3 son grandes; asegúrate de no exceder los límites de GitHub (100MB por archivo)

### Error: ESLint con formato antiguo
→ El proyecto usa ESLint 9 con flat config (`eslint.config.mjs`)
→ NO crees archivos `.eslintrc.json` — usará el formato nuevo automáticamente

### Error en VS Code con ESLint
→ Asegúrate de tener la extensión ESLint v3+ instalada
→ ESLint 9 requiere la extensión actualizada
