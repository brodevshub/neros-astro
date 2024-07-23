import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.fisioterapianeros.com',
  integrations: [
    react(),
    sitemap({
      customPages: [
        'https://www.fisioterapianeros.com',
        'https://www.fisioterapianeros.com/nosotros',
        'https://www.fisioterapianeros.com/nosotros/fernando_sanchez_colmenero',
        'https://www.fisioterapianeros.com/nosotros/belen_colmenero_rubio',
        'https://www.fisioterapianeros.com/nosotros/laura_sanchez_colmenero',
        'https://www.fisioterapianeros.com/tecnicas',
        'https://www.fisioterapianeros.com/contacto',
        'https://www.fisioterapianeros.com/novedades',
        'https://www.fisioterapianeros.com/informacion/aviso-legal',
        'https://www.fisioterapianeros.com/informacion/condiciones-de-uso',
        'https://www.fisioterapianeros.com/informacion/politica-de-privacidad',
        'https://www.fisioterapianeros.com/informacion/cookies',
        'https://www.fisioterapianeros.com/media/logo.png'
      ]
    })
  ],
  adapter: vercel()
});