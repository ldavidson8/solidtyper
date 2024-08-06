import { createEffect, createSignal } from "solid-js";

export type FontFamilyName =
	| "JetBrains Mono"
	| "Nunito"
	| "Roboto Mono"
	| "Source Code Pro"
	| "IBM Plex Mono"
	| "Lato"
	| "Roboto"
	| "Ubuntu";

export const fontFamilies: FontFamilyName[] = [
	"JetBrains Mono",
	"Nunito",
	"Roboto Mono",
	"Source Code Pro",
	"IBM Plex Mono",
	"Lato",
	"Roboto",
	"Ubuntu",
];

const DEFAULT_FONT = "Roboto";

export function useFontFamily() {
	const [fontFamily, setFontFamily] = createSignal<FontFamilyName>(
		(localStorage.getItem("fontFamily") as FontFamilyName) || DEFAULT_FONT,
	);

	createEffect(() => {
		const currentFont = fontFamily();
		localStorage.setItem("fontFamily", currentFont);
		document.documentElement.style.fontFamily = `"${currentFont}", sans-serif`;
	});

	return [fontFamily, setFontFamily] as const;
}
