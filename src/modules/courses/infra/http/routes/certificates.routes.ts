import { Router } from "express";
import CertificateController from "../controllers/CertificateController";
const router = Router();

const courseController = new CertificateController();

router.post("/", courseController.store);
router.get("/", courseController.show);

export default router;
