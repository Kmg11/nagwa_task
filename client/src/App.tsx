import { Question } from "components";
import { Container } from "layout";

export function App() {
	return (
		<Container>
			<div className="my-5">
				<Question
					questionNumber={1}
					word={{ id: 1, pos: "noun", word: "dog" }}
				/>
			</div>
		</Container>
	);
}
