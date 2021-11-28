import { Router } from "express";
import CoursesController from "../controllers/CoursesController";
import InstructorController from "../controllers/InstructorController";

const router = Router();

const courseController = new CoursesController();
const instructorController = new InstructorController();

router.post("/", courseController.store);

router.get("/", courseController.show);

router.get("/instructors", instructorController.show);

router.get("/:courseId/students-hours", courseController.studentHours);

export default router;
