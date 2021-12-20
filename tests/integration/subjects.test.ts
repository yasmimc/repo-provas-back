import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /subjects", () => {
    it("should answer with array of subject objects and status 200", async () => {
        const response = await supertest(app).get("/subjects");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0]).toHaveProperty("period");
        expect(response.body[0]).toHaveProperty("subjects");
        expect(Array.isArray(response.body[0].subjects)).toBeTruthy();
    });
});
