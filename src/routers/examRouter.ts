import { Router } from "express";
import * as examController from "../controllers/examController";

const router = Router();

router.get("/exams", examController.getExams);
router.get("/exams/categories", examController.getExamsCategories);
router.post("/exams", examController.postExam);

export default router;
