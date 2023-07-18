import { ActivityFooter } from "./ActivityFooter/ActivityFooter";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { Question } from "./Question/Question";

export const Activity = () => {
	return (
		<div>
			<ProgressBar answeredQuestionsNumber={5} questionsNumber={10} />
			<Question questionNumber={1} word={{ id: 1, pos: "noun", word: "dog" }} />
			<ActivityFooter />
		</div>
	);
};
