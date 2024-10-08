import { resolve } from 'path';
import atomico from '@atomico/vite';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
	build: {
		target: 'esnext',
		sourcemap: true,
		minify: true,
		lib: {
			entry: resolve(__dirname, 'src/index.tsx'),
			name: 'input-pincode',
			fileName: 'index'
		}
	},
	optimizeDeps: {
		exclude: ['/__web-dev-server__web-socket.js']
	},
	plugins: [
		atomico({ cssLiterals: { minify: true, postcss: true } }),
		istanbul({
			include: 'src/*',
			exclude: ['node_modules', 'src/*.test.js'],
			extension: ['.ts', '.tsx', '.js', '.jsx']
		}),
		{
			name: 'deep-index',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					if (req.url === '/') {
						req.url = './test.html';
					}
					next();
				});
			}
		}
	],
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: ['node_modules/**', 'test/*'],
		deps: {
			registerNodeLoader: true
		},
		reporters: ['verbose', 'junit'],
		coverage: {
			provider: 'istanbul',
			reportsDirectory: '../../tests/input-pincode/coverage'
		}
	}
});
