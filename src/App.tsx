import type { Component } from "solid-js";
import { BaseLayout } from "./components/BaseLayout";
import { Route, Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Settings } from "./routes/Settings";
import { MetaTags } from "./components/MetaTags";
import { ThemeProvider } from "./context/ThemeProvider";

import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/nunito";
import "@fontsource-variable/roboto-mono";
import "@fontsource-variable/source-code-pro";
import "@fontsource/ibm-plex-mono";
import "@fontsource/lato";
import "@fontsource/roboto";
import "@fontsource/ubuntu";

const App: Component = () => {
	return (
		<>
			<MetaProvider>
				<MetaTags />
				<ThemeProvider>
					<BaseLayout>
						<Router>
							<Route path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/settings" component={Settings} />
						</Router>
					</BaseLayout>
				</ThemeProvider>
			</MetaProvider>
		</>
	);
};

export default App;
