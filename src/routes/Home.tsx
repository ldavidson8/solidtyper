import type { Component } from "solid-js";
import { TypeSettings } from "~/components/TypeSettings";
import { TypeTester } from "~/components/TypeTester";

export const Home: Component = () => {
	return (
		<>
			<TypeSettings />
			<TypeTester />
		</>
	);
};
