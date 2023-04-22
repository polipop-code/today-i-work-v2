import React from "react";
import { AppUI } from "./AppUI";
import { GeneralProvider } from "./context";

function App() {
	return (
		<GeneralProvider>
			<AppUI />
		</GeneralProvider>
	);
}

export default App;
