import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://monkeymenorca.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
});
