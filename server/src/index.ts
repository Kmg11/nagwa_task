import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import express from "express";
import { routes } from "./routes";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middleware";
import { logger } from "./utils";
import { swaggerDocs } from "./swagger";

const app = express();

// * Middleware
app.use(express.json());

// * Security
app.use(helmet());
app.use(
	cors({
		origin: config.get<string>("frontendBaseURL"),
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
	})
);
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

// * Router
routes(app);

// * Swagger
swaggerDocs(app);

// * Error Handler Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

async function start() {
	const port = config.get<number>("port");

	app.listen(port, () => {
		// * Get domain name
		logger.info(`Server is running on http://localhost:${port}`);
	});
}

start();
