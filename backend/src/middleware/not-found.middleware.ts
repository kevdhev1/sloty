import type { RequestHandler } from "express";
import { AppError } from "../errors/app-error.js";
import { ErrorCodes } from "../errors/error-codes.js";

export const notFoundHandler: RequestHandler = (_req, _res, next) => {
	next(AppError.notFound(ErrorCodes.NOT_FOUND, "Route not found"));
};
