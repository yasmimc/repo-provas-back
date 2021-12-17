import { Request, Response } from "express";
import * as subjectService from "../services/subjectService";

async function getSubjects(req: Request, res: Response) {
    try {
        const subjects = await subjectService.fetchSubjects();
        res.send(subjects);
    } catch (error) {
        res.sendStatus(500);
    }
}
export { getSubjects };
