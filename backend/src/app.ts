import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";
import cors from "cors";
import { env } from "./config/env.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: "1mb" }));

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	console.error(err);

	res.status(500).json({
		error: {
			code: "INTERNAL_SERVER_ERROR",
			message: "Internal server error",
		},
	});
};

app.use(errorHandler);

export default app;
