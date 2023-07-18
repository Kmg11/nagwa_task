interface ProgressBarProps {
	questionsNumber: number;
	answeredQuestionsNumber: number;
}

export const ProgressBar = ({
	answeredQuestionsNumber,
	questionsNumber,
}: ProgressBarProps) => {
	const percentage = (answeredQuestionsNumber / questionsNumber) * 100 + "%";

	return (
		<div className="w-full h-2 mb-3 bg-gray-900 rounded relative">
			<div
				className="transition-width duration-500 ease-in-out bg-purple-700 absolute top-0 left-0 bottom-0 h-full"
				style={{ width: percentage }}
			/>
		</div>
	);
};
