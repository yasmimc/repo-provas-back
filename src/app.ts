import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import healthRouter from "./routers/healthRouter";

const app = express();
app.use(cors());
app.use(express.json());

app.use(healthRouter);

export async function init() {
    await connectDatabase();
}

export default app;
