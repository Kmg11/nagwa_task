import { PosType, QuestionType, WordType } from "@types";

export enum ActivityActionTypeEnum {
	SET_ACTIVITY = "SET_ACTIVITY",
	CHECK_ANSWER = "CHECK_ANSWER",
	NEXT_QUESTION = "NEXT_QUESTION",
}

export interface ActivityState {
	questions: QuestionType[] | null;
	currentQuestion: QuestionType | null;
	currentQuestionIndex: number;
	questionsCount: number;
	answeredQuestionsCount: number;
}

interface SetActivityAction {
	type: ActivityActionTypeEnum.SET_ACTIVITY;
	payload: { words: WordType[] };
}

interface CheckAnswerAction {
	type: ActivityActionTypeEnum.CHECK_ANSWER;
	payload: { answer: PosType };
}

interface NextQuestionAction {
	type: ActivityActionTypeEnum.NEXT_QUESTION;
}

export type ActivityAction =
	| SetActivityAction
	| CheckAnswerAction
	| NextQuestionAction;
