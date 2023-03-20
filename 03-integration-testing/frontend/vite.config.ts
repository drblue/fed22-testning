// vite.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			reporter: ['text', 'html'],
		},
		exclude: ['**/node_modules/**', '**/dist/**', '00-nogit/**'],
	},
})
