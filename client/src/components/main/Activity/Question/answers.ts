import { PosType } from "@types";

export interface AnswerType {
	label: "A" | "B" | "C" | "D";
	pos: PosType;
}

export const answers: AnswerType[] = [
	{ label: "A", pos: "noun" },
	{ label: "B", pos: "verb" },
	{ label: "C", pos: "adjective" },
	{ label: "D", pos: "adverb" },
];
