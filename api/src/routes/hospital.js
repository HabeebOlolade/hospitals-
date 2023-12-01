import { Router } from "express";

const router = Router();

router.get("/", getAllHospitals)
router.get("/:id", getHospitalsById)
router.post("/:id", getHospitalsById)


export default router;