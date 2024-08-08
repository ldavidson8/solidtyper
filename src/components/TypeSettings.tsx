import { createStore } from "solid-js/store";
import { Button } from "./ui/button";
import { createSignal, For, Show } from "solid-js";

interface Settings {
	punctuation: boolean;
	numbers: boolean;
}

const wordsSettings: Array<keyof Settings> = ["punctuation", "numbers"];
const modes = ["time", "words", "quote"];
const timeDurations = [15, 30, 60, 120];
const wordsAmounts = [10, 25, 50, 100];
const quoteLengths = ["short", "medium", "long"];

export const TypeSettings = () => {
	const [mode, setMode] = createSignal("time");
	const [selectedDuration, setSelectedDuration] = createSignal(15);
	const [selectedWordsAmount, setSelectedWordsAmount] = createSignal(10);
	const [selectedQuoteLength, setSelectedQuoteLength] = createSignal("short");
	const [settingStore, setSettingStore] = createStore<Settings>({
		punctuation: false,
		numbers: false,
	});
	return (
		<div class="w-full flex justify-around">
			<div class="flex bg-white/20 rounded-md">
				<div>
					<Show when={mode() === "words"}>
						<For each={wordsSettings}>
							{(setting) => (
								<Button
									variant="ghost"
									class={settingStore[setting] ? "text-accent" : ""}
									onClick={() =>
										setSettingStore(setting as keyof Settings, (prev) => !prev)
									}
								>
									{setting}
								</Button>
							)}
						</For>
					</Show>
				</div>
				<div>
					<For each={modes}>
						{(modeLabel) => (
							<Button
								variant="ghost"
								class={mode() === modeLabel ? "text-accent" : ""}
								onClick={() => setMode(modeLabel)}
							>
								{modeLabel}
							</Button>
						)}
					</For>
				</div>
				<div>
					<Show when={mode() === "time"}>
						<For each={timeDurations}>
							{(duration) => (
								<Button
									variant="ghost"
									class={selectedDuration() === duration ? "text-accent" : ""}
									onClick={() => setSelectedDuration(duration)}
								>
									{duration}
								</Button>
							)}
						</For>
					</Show>
					<Show when={mode() === "words"}>
						<For each={wordsAmounts}>
							{(amount) => (
								<Button
									variant="ghost"
									class={selectedWordsAmount() === amount ? "text-accent" : ""}
									onClick={() => setSelectedWordsAmount(amount)}
								>
									{amount}
								</Button>
							)}
						</For>
					</Show>
					<Show when={mode() === "quote"}>
						<For each={quoteLengths}>
							{(length) => (
								<Button
									variant="ghost"
									class={selectedQuoteLength() === length ? "text-accent" : ""}
									onClick={() => setSelectedQuoteLength(length)}
								>
									{length}
								</Button>
							)}
						</For>
					</Show>
				</div>
			</div>
		</div>
	);
};
