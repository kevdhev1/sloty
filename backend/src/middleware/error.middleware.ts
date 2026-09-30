import type { ErrorRequestHandler } from "express";
import { AppError } from "../errors/app-error.js";
import { ErrorCodes } from "../errors/error-codes.js";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			error: {
				code: err.code,
				message: err.message,
			},
		});
	}

	console.error(err);

	res.status(500).json({
		error: {
			code: ErrorCodes.INTERNAL_SERVER_ERROR,
			message: "Internal server error",
		},
	});
};
