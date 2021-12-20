import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createExam } from "../factories/examFactory";
import { clearDatabase } from "../utils/database";
import { insertExam } from "../utils/examsRepository";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /exams", () => {
    it("should answer with array of exam objects and status 200", async () => {
        const mockExam = await createExam();
        await insertExam(mockExam);

        const response = await supertest(app).get("/exams");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0]).toHaveProperty("category");
        expect(response.body[0]).toHaveProperty("exams");
        expect(Array.isArray(response.body[0].exams)).toBeTruthy();
    });

    it("should answer empty array with 200", async () => {
        const response = await supertest(app).get("/exams");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0]).toBeUndefined();
    });
});

describe("POST /exams", () => {
    it("should answer status 201 for correct req body", async () => {
        const mockExam = await createExam();
        delete mockExam.class;

        const response = await supertest(app).post("/exams").send(mockExam);

        expect(response.status).toBe(201);
    });

    it("should answer status 400 for wrong req body", async () => {
        const mockExam = await createExam();
        delete mockExam.class;
        delete mockExam.name;

        const response = await supertest(app).post("/exams").send(mockExam);

        expect(response.status).toBe(400);
    });
});

describe("GET /exams/categories", () => {
    it("should answer with array of exam categories and status 200", async () => {
        const response = await supertest(app).get("/exams/categories");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("name");
    });
});
