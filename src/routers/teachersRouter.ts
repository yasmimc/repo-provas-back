import { Router } from "express";
import * as teacherController from "../controllers/teachersController";

const router = Router();

router.get("/teachers", teacherController.getTeachers);

export default router;
