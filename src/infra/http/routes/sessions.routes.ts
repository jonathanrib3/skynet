import { Router } from "express";
import { SessionController } from "../../../controllers";

const sessionRouter = Router();

const sessionController = new SessionController();

sessionRouter.post("/login", sessionController.store);

export default sessionRouter;
