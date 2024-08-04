import type { ParentComponent } from "solid-js";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const BaseLayout: ParentComponent = (props) => {
	return (
		<div class="grid grid-rows-[auto_1fr_auto] h-dvh">
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};
