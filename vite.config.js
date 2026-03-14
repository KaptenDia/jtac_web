import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   allowedHosts: [
  //     "4e43-2405-8180-803-d695-d95e-ee82-42b1-8f9b.ngrok-free.app",
  //   ],
  // },
});
