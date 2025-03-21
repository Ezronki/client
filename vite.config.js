import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    historyApiFallback: true, // Ensures the app serves index.html for any route
  },
  preview: {
    allowedHosts: ["client-jla8.onrender.com", "www.sudohackers.shop"],
  },
});
