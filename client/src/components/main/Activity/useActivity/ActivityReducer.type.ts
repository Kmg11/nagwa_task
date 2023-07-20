import { PosType, QuestionType, WordType } from "@types";

export enum ActivityActionTypeEnum {
	SET_ACTIVITY = "SET_ACTIVITY",
	SELECT_ANSWER = "SELECT_ANSWER",
	CHECK_ANSWER = "CHECK_ANSWER",
	NEXT_QUESTION = "NEXT_QUESTION",
}

export interface ActivityState {
	questions: QuestionType[] | null;

	currentQuestion: QuestionType | null;
	currentQuestionIndex: number;

	questionsCount: number;
	answeredQuestionsCount: number;
	correctAnswersCount: number;

	isLastQuestion: boolean;
}

interface SetActivityAction {
	type: ActivityActionTypeEnum.SET_ACTIVITY;
	payload: { words: WordType[] };
}

interface SelectAnswerAction {
	type: ActivityActionTypeEnum.SELECT_ANSWER;
	payload: { answer: PosType };
}

interface CheckAnswerAction {
	type: ActivityActionTypeEnum.CHECK_ANSWER;
}

interface NextQuestionAction {
	type: ActivityActionTypeEnum.NEXT_QUESTION;
}

export type ActivityAction =
	| SetActivityAction
	| SelectAnswerAction
	| CheckAnswerAction
	| NextQuestionAction;
