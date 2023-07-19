import { answers } from "./answers";
import { useActivityContext } from "../ActivityProvider";

export const Question = () => {
	const {
		activityState: { questionsCount, currentQuestion, currentQuestionIndex },
		selectAnswer,
	} = useActivityContext();

	const isChecked = currentQuestion?.status !== "unanswered";

	return (
		<div className="bg-gray-900 py-6 px-6 rounded-tl-2xl rounded-br-2xl text-center">
			<h2 className="text-2xl font-bold bg-purple-700 inline-block py-2 px-3 rounded-tl-2xl rounded-br-2xl mb-4">
				Question {currentQuestionIndex + 1} of {questionsCount}
			</h2>

			<p className="text-xl font-bold mb-6">
				What is the pos for {currentQuestion?.word}?
			</p>

			<div className="flex items-center gap-3 justify-center">
				{answers.map((answer, index) => (
					<button
						key={index}
						type="button"
						className={`
							bg-gray-800 text-white font-bold py-2 px-4 rounded mb-3 capitalize transition-colors
							${answer.pos === currentQuestion?.selectedAnswer ? "bg-purple-700" : ""}
							${isChecked ? "cursor-default" : "hover:bg-purple-700"}
							${
								isChecked &&
								answer.pos === currentQuestion?.selectedAnswer &&
								answer.pos === currentQuestion?.pos
									? "bg-green-700"
									: ""
							}
							${
								isChecked &&
								answer.pos !== currentQuestion?.pos &&
								answer.pos === currentQuestion?.selectedAnswer
									? "bg-red-700"
									: ""
							}
						`}
						disabled={isChecked}
						onClick={() => selectAnswer(answer.pos)}
					>
						{answer.label}. {answer.pos}
					</button>
				))}
			</div>
		</div>
	);
};
