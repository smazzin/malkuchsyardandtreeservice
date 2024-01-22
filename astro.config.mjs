import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'
import purgecss from 'astro-purgecss';
const baseURL = process.env.NODE_ENV === 'production' ? 'https://malkuchsyardandtreeservice.com/' : 'http://localhost:4321/';


// https://astro.build/config
export default defineConfig({
  site: baseURL,
  integrations: [
    sitemap(),
    purgecss({
      fontFace: true,
      keyframes: true,
      content: [
        process.cwd() + '/src/pages/**/*.astro',
      ]
    }),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ]
});