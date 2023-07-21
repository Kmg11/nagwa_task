import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "../../errors";

export const errorHandlerMiddleware = (
	err: CustomAPIError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const customError = {
		message: err.message,
		statusCode:
			err instanceof CustomAPIError
				? err.statusCode
				: StatusCodes.INTERNAL_SERVER_ERROR,
	};

	return res
		.status(customError.statusCode)
		.json({ message: customError.message });
};
