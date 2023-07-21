import { Application } from "express";
import { StatusCodes } from "http-status-codes";
import { getWords } from "../controllers";

export function routes(app: Application) {
	app.get("/", (req, res) => {
		res.status(StatusCodes.OK).send(
			`
				<h1>API Documentation</h1>
				<p>Visit <a href="/docs">/docs</a> to view the API documentation.</p>
			`
		);
	});

	app.get("/api/v1/words", getWords);

	app.post("/api/v1/rank", (req, res) => {
		console.log("POST /api/v1/words");
		res.status(StatusCodes.OK).send("POST /api/v1/rank");
	});
}
