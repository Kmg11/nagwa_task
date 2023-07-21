import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Data from "../../data/data.json";
import { WordType } from "../../@types";

export const getWords = (req: Request, res: Response) => {
	const wordsList = Data.wordList as WordType[];

	const result = new Set();

	while (result.size < 10) {
		const word = getRandomWord(wordsList);

		if (containsPartOfSpeech(word)) result.add(word);
	}

	res.status(StatusCodes.OK).json({ words: [...result] });
};

function getRandomWord(wordsList: WordType[]): WordType {
	return wordsList[Math.floor(Math.random() * wordsList.length)];
}

function containsPartOfSpeech(word: WordType) {
	const partOfSpeechRegex = /(verb|noun|adjective|adverb)/i;

	return partOfSpeechRegex.test(word.pos);
}
