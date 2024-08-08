import SettingsIcon from "~icons/lucide/settings-2";
import InfoIcon from "~icons/lucide/info";

export const Header = () => {
	return (
		<nav class="max-w-5xl w-full px-6 h-[72px] flex items-center justify-between mx-auto">
			<div class="flex-1">
				<a href="/" class="text-2xl font-bold">
					SolidTyper
				</a>
			</div>
			<div class="flex-1 flex items-center justify-end gap-6">
				<a href="/settings" class="text-xl">
					<SettingsIcon />
				</a>
				<a href="/about">
					<InfoIcon />
				</a>
			</div>
		</nav>
	);
};
