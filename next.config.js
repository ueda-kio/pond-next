/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 200,
		}
		return config
	},
	webpack: (cfg) => {
		cfg.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
			options: {
				mode: ['react-component']
			}
		})
		return cfg;
	},
	images: {
		domains: ['images.microcms-assets.io']
	}
}

module.exports = nextConfig