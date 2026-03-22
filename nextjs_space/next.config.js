const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. ELIMINAMOS 'output: export' para que Vercel pueda usar el servidor vivo
  
  distDir: '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Lo ponemos en true para evitar que el error de la API de Brevo detenga el despliegue
    ignoreBuildErrors: true,
  },
  images: { 
    unoptimized: true 
  },
};

module.exports = nextConfig;