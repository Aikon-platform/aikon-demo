import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const __dirname = "./"

export default defineConfig({
  root: path.resolve(__dirname, 'src/demo'),
  plugins: [svelte()],
  base: './',
  build: {
    outDir: path.resolve(__dirname, 'demo-dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/demo/alignment.html'),
    },
  },
});
