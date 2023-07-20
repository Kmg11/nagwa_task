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
	correctAnswersCount: 0,

	isLastQuestion: false,
};

export const activityReducer: Reducer<ActivityState, ActivityAction> = (
	state = activityInitialState,
	action,
) => {
	switch (action.type) {
		case ActivityActionTypeEnum.SET_ACTIVITY: {
			const questions: QuestionType[] = action.payload.words.map((word) => ({
				...word,
				status: "unanswered",
				selectedAnswer: null,
			}));

			return {
				...state,
				questions,
				currentQuestion: questions[0],
				currentQuestionIndex: 0,
				questionsCount: action.payload.words.length,
				answeredQuestionsCount: 0,
				isLastQuestion: false,
			};
		}

		case ActivityActionTypeEnum.SELECT_ANSWER: {
			if (state.currentQuestion === null) return state;
			if (state.questions === null) return state;
			if (state.currentQuestion.status !== "unanswered") return state;

			const { answer: selectedAnswer } = action.payload;

			return {
				...state,
				currentQuestion: { ...state.currentQuestion, selectedAnswer },
				questions: [
					...state.questions.slice(0, state.currentQuestionIndex),
					{ ...state.questions[state.currentQuestionIndex], selectedAnswer },
					...state.questions.slice(state.currentQuestionIndex + 1),
				],
			};
		}

		case ActivityActionTypeEnum.CHECK_ANSWER: {
			if (state.currentQuestion === null) return state;
			if (state.questions === null) return state;
			if (state.currentQuestion?.selectedAnswer === null) return state;

			const selectedAnswer =
				state.currentQuestion?.selectedAnswer?.toLowerCase();
			const isAnswerCorrect =
				selectedAnswer === state.currentQuestion?.pos.toLowerCase();

			return {
				...state,
				answeredQuestionsCount: state.answeredQuestionsCount + 1,
				correctAnswersCount: isAnswerCorrect
					? state.correctAnswersCount + 1
					: state.correctAnswersCount,
				currentQuestion: {
					...state.currentQuestion,
					status: isAnswerCorrect ? "correct" : "incorrect",
				},
				questions: [
					...state.questions.slice(0, state.currentQuestionIndex),
					{
						...state.questions[state.currentQuestionIndex],
						status: isAnswerCorrect ? "correct" : "incorrect",
					},
					...state.questions.slice(state.currentQuestionIndex + 1),
				],
			};
		}

		case ActivityActionTypeEnum.NEXT_QUESTION: {
			if (state.currentQuestion === null) return state;
			if (state.questions === null) return state;
			if (state.isLastQuestion) return state;

			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex + 1,
				currentQuestion: state.questions[state.currentQuestionIndex + 1],
				isLastQuestion:
					state.currentQuestionIndex + 1 === state.questionsCount - 1,
			};
		}

		default: {
			return state;
		}
	}
};
