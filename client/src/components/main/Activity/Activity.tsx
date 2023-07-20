import { useActivity } from "./useActivity/useActivity";
import { ActivityFooter } from "./ActivityFooter/ActivityFooter";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { Question } from "./Question/Question";
import { ActivityProvider } from "./ActivityProvider";
import { useEffect, useState } from "react";
import { Score } from "./Score/Score";

export const Activity = () => {
	const [showScore, setShowScore] = useState(false);

	const {
		activityState,
		setActivity,
		checkAnswer,
		nextQuestion,
		selectAnswer,
	} = useActivity();

	useEffect(() => {
		setActivity([
			{ id: 1, pos: "noun", word: "dog" },
			{ id: 2, pos: "noun", word: "cat" },
			{ id: 3, pos: "noun", word: "bird" },
			{ id: 4, pos: "noun", word: "fish" },
			{ id: 5, pos: "verb", word: "eat" },
			{ id: 6, pos: "verb", word: "drink" },
			{ id: 7, pos: "verb", word: "sleep" },
			{ id: 8, pos: "verb", word: "run" },
			{ id: 9, pos: "adjective", word: "big" },
			{ id: 10, pos: "adjective", word: "small" },
		]);
	}, []);

	return (
		<ActivityProvider
			value={{
				activityState,
				checkAnswer,
				nextQuestion,
				selectAnswer,
				setShowScore,
			}}
		>
			{!showScore && (
				<div>
					<ProgressBar />
					<Question />
					<ActivityFooter />
				</div>
			)}

			{showScore && <Score />}
		</ActivityProvider>
	);
};
