// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default {
	build: {
		rollupOptions: {
			input: {
				index: 'index.html',
				about: 'about.html',
				post: 'post.html',
			},
		},
	},
};
