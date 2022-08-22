/** @type {import('next').NextConfig} */
const { relative, join } = require('path');

module.exports = {
	distDir: `${relative(process.cwd(), __dirname)}.next`,
	reactStrictMode: true,
	cssModules: true,
	// env: {
	// 	exmple: process.env.example,
	// },
	// i18n: {
	// 	locales: ['en-US'],
	// 	defaultLocale: 'en-US',
	// },
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	sassOptions: {
		includePaths: [join(__dirname, 'styles')],
	},
	webpack: config => {
		config.resolve = {
			...config.resolve,
			fallback: {
				fs: false,
				path: false,
				os: false,
			},
		};

		return config;
	},
	async redirects() {
		return [
			// {
			// 	source: '/example',
			// 	destination: '/',
			// 	permanent: true,
			// },
		];
	},
};
