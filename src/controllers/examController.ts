import { Request, Response } from "express";
import * as examService from "../services/examService";

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
        console.log(error);
        res.sendStatus(500);
    }
}
export { getExams, getExamsCategories };
