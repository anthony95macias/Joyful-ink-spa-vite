import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vite configuration
export default defineConfig({
  // Include the React plugin
  plugins: [react()],
  // Resolve module imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias "@" to "./src" directory
    },
  },
  // Add the envPrefix configuration
  envPrefix: "VITE_", // This ensures Vite picks up environment variables starting with 'VITE_'
});
