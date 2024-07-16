import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import dotenv from 'dotenv';
import vercel from "@astrojs/vercel/serverless";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: vercel()
});