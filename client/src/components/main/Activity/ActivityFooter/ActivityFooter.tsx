import { AppButton } from "components/ui";
import { useAppContext } from "context";
import { useActivityContext } from "../ActivityProvider";

export const ActivityFooter = () => {
	const { setCurrentScreen } = useAppContext();
	const {
		activityState: { currentQuestion, isLastQuestion },
		checkAnswer,
		nextQuestion,
		setShowScore,
	} = useActivityContext();

	const isSelected = currentQuestion?.selectedAnswer !== null;
	const isChecked = currentQuestion?.status !== "unanswered";

	return (
		<div className="mt-3 flex items-center gap-3 justify-center flex-wrap">
			<AppButton
				className="bg-red-500 hover:bg-red-600"
				onClick={() => setCurrentScreen("welcome")}
			>
				Exit
			</AppButton>

			{!isChecked && (
				<AppButton
					className={`
						${
							isSelected
								? "!bg-blue-500 !hover:bg-blue-600"
								: "!bg-gray-500 !hover:bg-gray-600"
						}
					`}
					disabled={!isSelected}
					onClick={checkAnswer}
				>
					Check
				</AppButton>
			)}

			{!isLastQuestion && isChecked && (
				<AppButton onClick={nextQuestion}>Next</AppButton>
			)}

			{isLastQuestion && isChecked && (
				<AppButton
					className="bg-yellow-500 hover:bg-yellow-600"
					onClick={() => setShowScore(true)}
				>
					Submit
				</AppButton>
			)}
		</div>
	);
};
