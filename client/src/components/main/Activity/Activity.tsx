import { useActivity } from "./useActivity/useActivity";
import { ActivityFooter } from "./ActivityFooter/ActivityFooter";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { Question } from "./Question/Question";
import { ActivityProvider } from "./ActivityProvider";
import { useState } from "react";
import { Score } from "./Score/Score";
import { AppErrorMessage, AppLoading } from "components";
import { useGetWordsQuery } from "api";

export const Activity = () => {
	const [showScore, setShowScore] = useState(false);

	const { data, isLoading, isError, error } = useGetWordsQuery({
		onSuccess: (data) => {
			setActivity(data.data.words);
		},
	});

	const {
		activityState,
		setActivity,
		checkAnswer,
		nextQuestion,
		selectAnswer,
	} = useActivity();

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
			{isLoading && <AppLoading />}

			{isError && <AppErrorMessage>{error.message}</AppErrorMessage>}

			{!showScore && data && (
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
