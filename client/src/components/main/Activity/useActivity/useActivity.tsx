import { PosType, WordType } from "@types";
import { useReducer } from "react";
import { activityReducer, activityInitialState } from "./activityReducer";
import { ActivityActionTypeEnum } from "./ActivityReducer.type";

export const useActivity = () => {
	const [state, dispatch] = useReducer(activityReducer, activityInitialState);

	const setActivity = (words: WordType[]) => {
		dispatch({
			type: ActivityActionTypeEnum.SET_ACTIVITY,
			payload: { words },
		});
	};

	const selectAnswer = (answer: PosType) => {
		dispatch({
			type: ActivityActionTypeEnum.SELECT_ANSWER,
			payload: { answer },
		});
	};

	const checkAnswer = () => {
		dispatch({ type: ActivityActionTypeEnum.CHECK_ANSWER });
	};

	const nextQuestion = () => {
		dispatch({ type: ActivityActionTypeEnum.NEXT_QUESTION });
	};

	return {
		activityState: state,
		setActivity,
		selectAnswer,
		checkAnswer,
		nextQuestion,
	};
};
