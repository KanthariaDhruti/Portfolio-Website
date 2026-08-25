import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        /**
         * Matched by path rather than by package name: GSAP's plugins are
         * imported from subpaths (gsap/SplitText), which a bare-name mapping
         * misses and dumps into the entry chunk.
         */
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("gsap")) return "vendor-gsap";
          if (id.includes("lenis")) return "vendor-lenis";
          if (id.includes("emailjs")) return "vendor-emailjs";
          if (
            id.includes("react-router") ||
            id.includes("react-dom") ||
            id.includes("/react/")
          ) {
            return "vendor-react";
          }
          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
