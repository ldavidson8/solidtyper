import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';
import Icons from "unplugin-icons/vite";

export default defineConfig({
	plugins: [
		/* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
		// devtools(),
		solidPlugin(),
		Icons({
			compiler: "jsx",
			jsx: "preact",
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
