import { For } from "solid-js";
import { Button } from "~/components/ui/button";
import {
	FontFamilyName,
	fontFamilies,
	useFontFamily,
} from "~/config/fontConfig";
import { cn } from "~/lib/utils";

export const FontSelector = () => {
	const [fontFamily, setFontFamily] = useFontFamily();
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
						{fontFamilyName}
					</Button>
				)}
			</For>
		</div>
	);
};
