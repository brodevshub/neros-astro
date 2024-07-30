import partytown from '@astrojs/partytown';
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
        'https://www.fisioterapianeros.com/nosotros/fernando_sanchez_colmenero',
        'https://www.fisioterapianeros.com/nosotros/belen_colmenero_rubio',
        'https://www.fisioterapianeros.com/nosotros/laura_sanchez_colmenero',
        'https://www.fisioterapianeros.com/media/logo.png'
      ]
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ],
  adapter: vercel()
});