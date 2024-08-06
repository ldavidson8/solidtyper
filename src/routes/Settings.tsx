import type { Component } from "solid-js";
import { FontSelector } from "~/components/FontSelector";
import { ThemeSelector } from "~/components/ThemeSelector";
import PaletteIcon from "~icons/lucide/palette";
import TypeIcon from "~icons/lucide/type";

export const Settings: Component = () => {
	return (
		<div class="flex flex-col max-w-4xl mx-auto gap-8">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-2">
					<PaletteIcon class="size-5" />
					<h2>Theme</h2>
				</div>
				<ThemeSelector />
			</div>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-2">
					<TypeIcon class="size-5" />
					<h2>Font Family</h2>
				</div>
				<FontSelector />
			</div>
			<div>
				<h2>Min Speed</h2>
				<p>Automatically fails a test if your speed falls below a threshold.</p>
			</div>
		</div>
	);
};
