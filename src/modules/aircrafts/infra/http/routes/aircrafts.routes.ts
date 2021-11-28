import { Router } from "express";
import AircraftController from "../controllers/AircraftController";

const router = Router();
const aircraftController = new AircraftController();

router.post("/", aircraftController.store);
router.get("/", aircraftController.show);

export default router;
