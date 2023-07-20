import { ScreensType } from "@types";
import { Activity, Welcome } from "components";
import { AppProvider } from "context";
import { Container } from "layout";
import { useState } from "react";

export function App() {
	const [currentScreen, setCurrentScreen] = useState<ScreensType>("welcome");

	return (
		<AppProvider value={{ setCurrentScreen }}>
			<Container>
				<div className="my-5 bg-gray-900 py-6 px-6 rounded text-center">
					{currentScreen === "welcome" && <Welcome />}
					{currentScreen === "activity" && <Activity />}
				</div>
			</Container>
		</AppProvider>
	);
}
