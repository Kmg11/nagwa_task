import { Activity, Welcome } from "components";
import { Container } from "layout";
import { useState } from "react";

export function App() {
	const [startActivity, setStartActivity] = useState(false);

	return (
		<Container>
			<div className="my-5">
				{!startActivity && <Welcome setStartActivity={setStartActivity} />}

				{startActivity && <Activity />}
			</div>
		</Container>
	);
}
