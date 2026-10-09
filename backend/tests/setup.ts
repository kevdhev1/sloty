import { config } from "dotenv";
import { resolve } from "node:path";

config({ path: resolve(__dirname, "../.env.test"), override: true });

const url = process.env.DATABASE_URL;

if (!url) {
	throw new Error(
		"DATABASE_URL is not defined. Did you forget to create .env.test?",
	);
}

const looksLikeTestDb =
	url.includes("test") ||
	url.includes("_test") ||
	url.includes("test-db") ||
	process.env.NODE_ENV === "test";

if (!looksLikeTestDb) {
	throw new Error(
		`Refusing to run tests against a database that does not look like a test database.\n` +
			`Expected the hostname or database name to contain "test".`,
	);
}
