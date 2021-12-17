import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import healthRouter from "./routers/healthRouter";
import teacherRouter from "./routers/teachersRouter";

const app = express();
app.use(cors());
app.use(express.json());

app.use(healthRouter);
app.use(teacherRouter);

export async function init() {
    await connectDatabase();
}

export default app;
