export type PosType = "adverb" | "verb" | "noun" | "adjective";

export interface WordType {
	id: number;
	word: string;
	pos: PosType;
}
