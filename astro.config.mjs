import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://fisioterapianeros.com',
  integrations: [react(), sitemap()],
  adapter: vercel()
});