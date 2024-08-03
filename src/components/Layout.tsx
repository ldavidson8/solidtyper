import type { ParentComponent } from "solid-js";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: ParentComponent = (props) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</>
	);
};
