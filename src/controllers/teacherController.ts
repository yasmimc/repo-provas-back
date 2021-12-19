import { Request, Response } from "express";
import * as teacherService from "../services/teacherService";

async function getTeachers(req: Request, res: Response) {
    const { subject } = req.query;
    try {
        const teachers = await teacherService.fetchTeachers(subject);
        res.send(teachers);
    } catch (error) {
        res.sendStatus(500);
    }
}
export { getTeachers };
