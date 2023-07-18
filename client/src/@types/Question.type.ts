import { WordType } from "./Word.type";

export interface QuestionType extends WordType {
	status: "correct" | "incorrect" | "unanswered";
}
