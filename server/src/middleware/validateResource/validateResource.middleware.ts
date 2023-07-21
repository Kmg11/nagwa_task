import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { BadRequestError } from "../../errors";

export const validateResource =
	(schema: AnyZodObject) =>
	(req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse({
				body: req.body,
				query: req.query,
				params: req.params,
			});

			next();
		} catch (e: unknown) {
			if (e instanceof ZodError) {
				const message = e.errors.map((error) => error.message).join(", ");

				throw new BadRequestError(message);
			}
		}
	};
