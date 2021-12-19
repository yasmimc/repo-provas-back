import { Router } from "express";
import * as examController from "../controllers/examController";

const router = Router();

router.get("/exams", examController.getExams);
router.get("/exams:teacher", examController.getExams);
router.get("/exams:subject", examController.getExams);

export default router;
