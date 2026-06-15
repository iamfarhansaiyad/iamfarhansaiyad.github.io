import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// ─────────────────────────────────────────────────────────────
// IMPORTANT for GitHub Pages:
//   • If your repo is a PROJECT site (e.g. github.com/<user>/portfolio),
//     set base to "/portfolio/" (your repo name with leading + trailing slash).
//   • If your repo is a USER site (e.g. <user>.github.io), leave base as "/".
// ─────────────────────────────────────────────────────────────
const REPO_NAME = ""; // ← change to your repo name, or set to "" for user/org site

export default defineConfig({
  base: REPO_NAME ? `/${REPO_NAME}/` : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});