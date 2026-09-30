import type { ErrorCode } from "./error-codes.js";

export class AppError extends Error {
	readonly statusCode: number;
	readonly code: ErrorCode;

	constructor(statusCode: number, code: ErrorCode, message: string) {
		super(message);
		this.name = "AppError";
		this.statusCode = statusCode;
		this.code = code;

		Error.captureStackTrace?.(this, this.constructor);
	}

	static badRequest(code: ErrorCode, message: string) {
		return new AppError(400, code, message);
	}

	static unauthorized(code: ErrorCode, message: string) {
		return new AppError(401, code, message);
	}

	static forbidden(code: ErrorCode, message: string) {
		return new AppError(403, code, message);
	}

	static notFound(code: ErrorCode, message: string) {
		return new AppError(404, code, message);
	}

	static conflict(code: ErrorCode, message: string) {
		return new AppError(409, code, message);
	}
}
