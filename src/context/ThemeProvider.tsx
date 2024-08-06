import {
	createContext,
	useContext,
	createEffect,
	createSignal,
	type ParentComponent,
	onCleanup,
} from "solid-js";
import type { ThemeName } from "~/config/themeConfig";

type ThemeContextType = {
	theme: () => ThemeName;
	setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType>();

export const ThemeProvider: ParentComponent = (props) => {
	const [theme, setTheme] = createSignal<ThemeName>(
		(localStorage.getItem("theme") as ThemeName) || "system",
	);

	const applyTheme = (themeName: ThemeName) => {
		const root = document.documentElement;
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";
		const activeTheme = themeName === "system" ? systemTheme : themeName;

		root.setAttribute("data-theme", activeTheme);
		root.className = activeTheme;

		// const themeVars =
		// 	themeConfig[activeTheme === "system" ? systemTheme : activeTheme];
		// for (const [key, value] of Object.entries(themeVars)) {
		// 	root.style.setProperty(key, value);
		// 	root.style.setProperty("background-color", );
		// }
	};

	createEffect(() => {
		const currentTheme = theme();
		localStorage.setItem("theme", currentTheme);
		applyTheme(currentTheme);

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			if (theme() === "system") {
				applyTheme("system");
			}
		};
		mediaQuery.addEventListener("change", handleSystemThemeChange);

		onCleanup(() => {
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
		});
	});

	const value = {
		theme,
		setTheme: (newTheme: ThemeName) => setTheme(newTheme),
	};

	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
