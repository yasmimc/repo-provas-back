import { Request, Response } from "express";
import * as examService from "../services/examService";
import examSchema from "../validations/examSchema";

async function getExams(req: Request, res: Response) {
    try {
        const { teacher, subject } = req.query;
        const exams = await examService.fetchExams(teacher, subject);
        res.send(exams);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getExamsCategories(req: Request, res: Response) {
    try {
        const examsCategories = await examService.fetchExamsCategories();
        res.send(examsCategories);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function postExam(req: Request, res: Response) {
    try {
        const newExam = req.body;
        const valitation = examSchema.validate(newExam);
        if (valitation.error) {
            return res.sendStatus(400);
        }
        await examService.insertExam(newExam);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}
export { getExams, getExamsCategories, postExam };
