import { defineConfig } from 'astro/config';
import site from './src/data/site.json';

export default defineConfig({
  site: site.website || 'https://monsite.fr',
  output: 'static',
});
