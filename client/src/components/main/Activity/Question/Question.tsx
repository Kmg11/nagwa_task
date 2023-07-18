import { WordType } from "@types";
import { answers } from "./answers";

interface QuestionProps {
	questionNumber: number;
	word: WordType;
}

export const Question = ({ questionNumber, word }: QuestionProps) => {
	return (
		<div className="bg-gray-900 py-6 px-6 rounded-tl-2xl rounded-br-2xl text-center">
			<h2 className="text-2xl font-bold bg-purple-700 inline-block py-2 px-3 rounded-tl-2xl rounded-br-2xl mb-4">
				Question {questionNumber}
			</h2>

			<p className="text-xl font-bold mb-6">What is the pos for {word.word}?</p>

			<div className="flex items-center gap-3 justify-center">
				{answers.map((answer, index) => (
					<button
						key={index}
						type="button"
						className="bg-gray-800 text-white font-bold py-2 px-4 rounded mb-3 capitalize hover:bg-purple-700 transition-colors"
					>
						{answer.label}. {answer.pos}
					</button>
				))}
			</div>
		</div>
	);
};
