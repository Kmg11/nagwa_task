import { Activity, Welcome } from "components";
import { AppProvider } from "context";
import { Container } from "layout";
import { useState } from "react";

export function App() {
	const [startActivity, setStartActivity] = useState(false);

	const openActivity = () => setStartActivity(true);
	const exitActivity = () => setStartActivity(false);

	return (
		<AppProvider value={{ exitActivity, openActivity }}>
			<Container>
				<div className="my-5">
					{!startActivity && <Welcome />}

					{startActivity && <Activity />}
				</div>
			</Container>
		</AppProvider>
	);
}
