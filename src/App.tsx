import type { Component } from "solid-js";
import { BaseLayout } from "./components/BaseLayout";
import { Route, Router } from "@solidjs/router";
import {
	ColorModeProvider,
	ColorModeScript,
	createLocalStorageManager,
} from "@kobalte/core";

import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Settings } from "./routes/Settings";

const App: Component = () => {
	const storageManager = createLocalStorageManager("vite-ui-theme");
	return (
		<>
			<ColorModeScript storageType={storageManager.type} />
			<ColorModeProvider storageManager={storageManager}>
				<BaseLayout>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/settings" component={Settings} />
					</Router>
				</BaseLayout>
			</ColorModeProvider>
		</>
	);
};

export default App;
