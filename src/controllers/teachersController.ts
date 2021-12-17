import { Request, Response } from "express";
import * as teacherService from "../services/teacherService";

async function getTeachers(req: Request, res: Response) {
    try {
        const teachers = await teacherService.fetchTeachers();
        res.send(teachers);
    } catch (error) {
        res.sendStatus(500);
    }
}
export { getTeachers };
