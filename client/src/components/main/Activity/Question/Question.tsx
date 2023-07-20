import { answers } from "./answers";
import { useActivityContext } from "../ActivityProvider";
import { AnswerButton } from "./AnswerButton/AnswerButton";

export const Question = () => {
	const {
		activityState: { questionsCount, currentQuestion, currentQuestionIndex },
	} = useActivityContext();

	return (
		<div className="mb-7">
			<h2 className="text-2xl font-bold bg-purple-700 inline-block py-2 px-3 rounded-tl-2xl rounded-br-2xl mb-4">
				Question {currentQuestionIndex + 1} of {questionsCount}
			</h2>

			<p className="text-xl font-bold mb-6">
				What is the pos for {currentQuestion?.word}?
			</p>

			<div className="flex items-center flex-wrap gap-3 justify-center">
				{answers.map((answer, index) => (
					<AnswerButton key={index} answer={answer} />
				))}
			</div>
		</div>
	);
};
