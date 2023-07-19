import { useActivityContext } from "../ActivityProvider";

export const ProgressBar = () => {
	const {
		activityState: { answeredQuestionsCount, questionsCount },
	} = useActivityContext();

	const percentage = (answeredQuestionsCount / questionsCount) * 100 + "%";

	return (
		<div className="w-full h-2 mb-3 bg-gray-900 rounded relative">
			<div
				className="transition-width duration-500 ease-in-out bg-purple-700 absolute top-0 left-0 bottom-0 h-full"
				style={{ width: percentage }}
			/>
		</div>
	);
};
