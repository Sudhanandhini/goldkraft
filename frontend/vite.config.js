import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spawn } from 'node:child_process'

const PHP_PORT = 8000

// Dev only: start PHP's built-in server for /api (contact form) alongside Vite
const phpServer = () => ({
  name: 'php-server',
  apply: 'serve',
  configureServer(server) {
    const php = spawn('php', ['-S', `localhost:${PHP_PORT}`, '-t', 'public'], { stdio: 'ignore' })
    php.on('error', err => console.error(`\n[php-server] Could not start PHP (is php on PATH?): ${err.message}\n`))
    const stop = () => php.kill()
    server.httpServer?.on('close', stop)
    process.on('exit', stop)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), phpServer()],
  base: '/',
  server: {
    proxy: {
      '/api': `http://localhost:${PHP_PORT}`,
    },
  },
})
