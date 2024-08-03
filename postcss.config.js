import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

export default {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	plugins: [
		tailwindcss,
		autoprefixer,
	],
};

