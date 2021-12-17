import { Router } from "express";
import * as subjectController from "../controllers/subjectController";

const router = Router();

router.get("/subjects", subjectController.getSubjects);

export default router;
