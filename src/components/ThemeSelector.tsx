import { For } from "solid-js";
import { Button } from "~/components/ui/button";
import { themes } from "~/config/themeConfig";
import { cn } from "~/lib/utils";
import { useTheme } from "~/context/ThemeProvider";

export const ThemeSelector = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div class="grid grid-cols-[repeat(auto-fit,minmax(13.5rem,1fr))] gap-2">
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
	);
};
