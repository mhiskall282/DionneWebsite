import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function expressDevPlugin() {
  return {
    name: "express-dev-server",
    configureServer(server: any) {
      server.middlewares.use("/api", async (req: any, res: any, next: any) => {
        try {
          // Dynamically import the api handler so it hot reloads
          const { default: apiHandler } = await server.ssrLoadModule("/api/index.ts");
          apiHandler(req, res, next);
        } catch (err) {
          console.error(err);
          next(err);
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    expressDevPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    external: ["../prisma/client/index.js", "prisma/client"],
  },
}));
