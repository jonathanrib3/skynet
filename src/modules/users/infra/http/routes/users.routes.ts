import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();

const userController = new UserController();

router.post("/", userController.store);

router.post("/login", userController.login);

export default router;
