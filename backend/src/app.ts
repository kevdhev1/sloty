import express from "express";
import helmet from "helmet";
import cors from "cors";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: "1mb" }));

app.use(errorHandler);

export default app;
