import type { UserConfigFn, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    server: {
      port: 3001,
    },
    plugins: [react(), tsconfigPaths()],
    esbuild: {
      jsxFactory: "jsx",
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
  };
  return config;
};

export default defineConfig;
