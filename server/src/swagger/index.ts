import { Express, Request, Response } from "express";
import config from "config";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { logger } from "../utils//logger/logger.util";
import { errorSchemas, errorsResponses } from "./errors/errors";

const port = config.get<string>("port");

const options: swaggerJsdoc.OAS3Options = {
	definition: {
		openapi: "3.0.0",
		info: { title: "Nagwa Task API", version: "1.0.0" },
		components: {
			schemas: { ...errorSchemas },
			responses: { ...errorsResponses },
		},

		servers: [
			{
				url: `http://localhost:${port}/api/v1`,
				description: "Development server",
			},
			{
				url: "https://nagwa-task.onrender.com/api/v1",
				description: "Production server",
			},
		],
	},

	apis: ["./src/routes/**/*.yaml"],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app: Express): void => {
	// * Swagger page
	app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

	// * Docs in JSON format
	app.get("/swagger.json", (req: Request, res: Response) => {
		res.setHeader("Content-Type", "application/json");
		res.send(swaggerSpec);
	});

	logger.info(`Docs available at http://localhost:${port}/docs`);
};
