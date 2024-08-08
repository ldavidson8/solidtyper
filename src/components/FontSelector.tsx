import { For } from "solid-js";
import { Button } from "@/components/ui/button";
import { fontFamilies, useFontFamily } from "@/config/fontConfig";
import { cn } from "@/lib/cn";

export const FontSelector = () => {
	const [fontFamily, setFontFamily] = useFontFamily();

	// Remove "variable" from the UI to make it more readable
	const formatFontName = (name: string) => {
		return name.replace(/variable/i, "").trim();
	};
	return (
		<div class="grid grid-cols-[repeat(auto-fit,minmax(13.5rem,1fr))] gap-2">
			<For each={fontFamilies}>
				{(fontFamilyName) => (
					<Button
						variant="outline"
						onClick={() => setFontFamily(fontFamilyName)}
						class={cn(fontFamily() === fontFamilyName && "bg-accent")}
						style={{ "font-family": `"${fontFamilyName}", sans-serif` }}
					>
						{formatFontName(fontFamilyName)}
					</Button>
				)}
			</For>
		</div>
	);
};
