import { defineConfig } from 'astro/config';
import site from './src/data/site.json';

export default defineConfig({
  site: site.seo_url || 'https://monsite.fr',
  output: 'static',
});
