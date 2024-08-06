import type { Component } from "solid-js";
import { For } from "solid-js";
import { Button } from "~/components/ui/button";
import { themes } from "~/config/themeConfig";
import { useTheme } from "~/context/ThemeProvider";
import { cn } from "~/lib/utils";

export const Settings: Component = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div class="flex flex-col max-w-4xl mx-auto">
			<div>
				<h2>Theme</h2>
				<For each={themes}>
					{(themeName) => (
						<Button
							variant="outline"
							onClick={() => setTheme(themeName)}
							class={cn(
								"capitalize text-foreground",
								theme() === themeName && "bg-accent",
							)}
						>
							{themeName}
						</Button>
					)}
				</For>
			</div>
			<div>
				<h2>Min Speed</h2>
				<p>Automatically fails a test if your speed falls below a threshold.</p>
			</div>
		</div>
	);
};
