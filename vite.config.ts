import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For project sites (not user root), set: base: "/<repo>/"
  // base: "/<repo>/"
});
