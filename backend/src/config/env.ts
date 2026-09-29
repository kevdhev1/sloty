import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]),
	PORT: z.coerce.number().int().positive(),
	FRONTEND_URL: z.url(),
});

export const env = envSchema.parse(process.env);
