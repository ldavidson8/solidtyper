import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class", "[data-theme='dark']"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
