import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works at a domain root (Netlify)
// and from a sub-path (GitHub Pages) without changes.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // keep product images as real files, never inlined or re-encoded
  },
});
