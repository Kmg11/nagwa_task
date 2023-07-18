import { ProgressBar, Question } from "components";

export const Activity = () => {
	return (
		<>
			<ProgressBar answeredQuestionsNumber={5} questionsNumber={10} />
			<Question questionNumber={1} word={{ id: 1, pos: "noun", word: "dog" }} />
		</>
	);
};
