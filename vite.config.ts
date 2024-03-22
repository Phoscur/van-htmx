
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import devServer from '@hono/vite-dev-server'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  server: {
    port: 4000, // change to a custom port
  },
  build: {
    outDir: "dist",
  },
  plugins: [
    react(),
    devServer({
        entry: "server.ts",
        exclude: [ // We need to override this option since the default setting doesn't fit
            /.*\.(j|t)sx?($|\?)/,
            /.*\.(s?css|less)($|\?)/,
            /.*\.(svg|png)($|\?)/,
            /^\/@.+$/,
            /^\/favicon\.ico$/,
            /^\/(public|assets|static)\/.+/,
            /^\/node_modules\/.*/
        ],
        injectClientScript: false, // This option is buggy, disable it and inject the code manually
    })
  ],
})