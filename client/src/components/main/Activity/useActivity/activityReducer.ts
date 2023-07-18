import { Reducer } from "react";
import {
	ActivityAction,
	ActivityActionTypeEnum,
	ActivityState,
} from "./ActivityReducer.type";
import { QuestionType } from "@types";

export const activityInitialState: ActivityState = {
	questions: null,
	currentQuestion: null,
	currentQuestionIndex: 0,
	questionsCount: 0,
	answeredQuestionsCount: 0,
};

export const activityReducer: Reducer<ActivityState, ActivityAction> = (
	state = activityInitialState,
	action,
) => {
	switch (action.type) {
		case ActivityActionTypeEnum.SET_ACTIVITY: {
			const questionsCount = action.payload.words.length;
			const questions: QuestionType[] = action.payload.words.map((word) => ({
				...word,
				status: "unanswered",
			}));

			return {
				...state,
				questions,
				currentQuestion: questions[0],
				currentQuestionIndex: 0,
				questionsCount,
				answeredQuestionsCount: 0,
			};
		}

		case ActivityActionTypeEnum.CHECK_ANSWER: {
			const { answer } = action.payload;
			const isAnswerCorrect =
				answer.toLowerCase() === state.currentQuestion?.pos.toLowerCase();

			return {
				...state,
				questions: [
					...state.questions!.slice(0, state.currentQuestionIndex),
					{
						...state.questions![state.currentQuestionIndex],
						status: isAnswerCorrect ? "correct" : "incorrect",
					},
					...state.questions!.slice(state.currentQuestionIndex + 1),
				],
			};
		}

		case ActivityActionTypeEnum.NEXT_QUESTION: {
			return {
				...state,
				answeredQuestionsCount: state.answeredQuestionsCount + 1,
				currentQuestionIndex: state.currentQuestionIndex + 1,
				currentQuestion: state.questions![state.currentQuestionIndex + 1],
			};
		}

		default: {
			return state;
		}
	}
};
