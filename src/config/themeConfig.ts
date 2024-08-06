export type ThemeName =
	| "light"
	| "dark"
	| "system"
	| "synthwave"
	| "vanilla"
	| "evergreen";

export const themes: ThemeName[] = [
	"light",
	"dark",
	"system",
	"synthwave",
	"vanilla",
	"evergreen",
];

export const themeConfig = {
	light: {
		"--background": "#ffffff",
		"--foreground": "#000000",
		"--primary": "#8ccf7e",
	},
	dark: {
		"--background": "#1a1a1a",
		"--foreground": "#ffffff",
		"--primary": "#8ccf7e",
	},
	synthwave: {
		"--background": "#2b213a",
		"--foreground": "#ff7edb",
		"--primary": "#f92aad",
	},
	vanilla: {
		"--background": "#f0ead6",
		"--foreground": "#8b4513",
		"--primary": "#d2691e",
	},
	evergreen: {
		"--background": "#141b1e",
		"--foreground": "#dadada",
		"--primary": "#8ccf7e",
	},
};
