import { useActivityContext } from "../../ActivityProvider";
import { AnswerType } from "../answers";

interface AnswerButtonProps {
	answer: AnswerType;
}

export const AnswerButton = ({ answer }: AnswerButtonProps) => {
	const {
		activityState: { currentQuestion },
		selectAnswer,
	} = useActivityContext();

	const isSameAnswer = answer.pos === currentQuestion?.selectedAnswer;
	const isAnswerCorrect = answer.pos === currentQuestion?.pos;
	const isAnswerIncorrect = answer.pos !== currentQuestion?.pos;
	const isChecked = currentQuestion?.status !== "unanswered";

	const handleSelectAnswer = () => {
		if (isChecked) return;

		selectAnswer(answer.pos);
	};

	return (
		<button
			className={`
				bg-gray-800 text-white font-bold py-2 px-4 rounded capitalize transition-colors
				${isSameAnswer ? "bg-purple-700" : ""}
				${isChecked ? "cursor-default" : "hover:bg-purple-700"}
				${isChecked && isSameAnswer && isAnswerCorrect ? "!bg-green-700" : ""}
				${isChecked && isSameAnswer && isAnswerIncorrect ? "!bg-red-700" : ""}
			`}
			disabled={isChecked}
			onClick={handleSelectAnswer}
		>
			{answer.label}. {answer.pos}
		</button>
	);
};
