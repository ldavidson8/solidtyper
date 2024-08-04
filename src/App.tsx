import type { Component } from "solid-js";
import { BaseLayout } from "./components/BaseLayout";
import { Route, Router } from "@solidjs/router";

import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Settings } from "./routes/Settings";

const App: Component = () => {
	return (
		<>
			<BaseLayout>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/settings" component={Settings} />
				</Router>
			</BaseLayout>
		</>
	);
};

export default App;
