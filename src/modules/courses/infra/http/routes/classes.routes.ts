import { Router } from "express";
import ClassController from "../controllers/ClassController";

const router = Router();

const classController = new ClassController();

router.post("/", classController.store);

router.get("/", classController.show);

export default router;
