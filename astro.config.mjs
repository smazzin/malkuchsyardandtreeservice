import { defineConfig } from 'astro/config'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://malkuchsyardandtreeservice.com/'
  : 'http://localhost:4321/'

// https://astro.build/config
export default defineConfig({
  site: baseURL,
  integrations: []
})