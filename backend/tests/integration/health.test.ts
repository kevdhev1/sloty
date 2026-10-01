import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Server } from "node:http";
import app from "../../src/app.js";

describe("Health check", () => {
	let server: Server;
	let baseUrl: string;

	beforeAll(async () => {
		server = app.listen(0);
		await new Promise<void>((resolve) => server.once("listening", resolve));
		const address = server.address();

		if (address === null || typeof address === "string") {
			throw new Error("Failed to get server address");
		}

		baseUrl = `http://127.0.0.1:${address.port}`;
	});

	afterAll(async () => {
		await new Promise<void>((resolve, reject) => {
			server.close((err) => (err ? reject(err) : resolve()));
		});
	});

	it("returns 200 with { status: 'ok' }", async () => {
		const res = await fetch(`${baseUrl}/health`);

		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({ status: "ok" });
	});
});
