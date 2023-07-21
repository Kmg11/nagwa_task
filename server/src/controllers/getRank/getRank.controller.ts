import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Data from "../../data/data.json";
import { BadRequestError } from "../../errors";

type GetRankRequestType = Request<unknown, unknown, { score: number }>;

export const getRank = (req: GetRankRequestType, res: Response) => {
	const { score } = req.body;

	if (!score) throw new BadRequestError("Score is required.");

	if (typeof score !== "number") {
		throw new BadRequestError("Score must be a number.");
	}

	const scoresList = Data.scoresList;
	const result = scoresList.filter((n) => n < score);
	const percent = (result.length / scoresList.length) * 100;
	const rank = Math.round(percent * 100) / 100;

	res.status(StatusCodes.OK).json({ rank });
};
