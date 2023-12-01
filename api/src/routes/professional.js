import { Router } from "express";

const router = Router();

router.get("/", getAllprofessionals);
router.get("/:id", getProfessionalById);
router.get("/:id/:id", getProfessionalById);
router.post("/:id/:id", postProfessionById);
router.post("/:id", postProfesionalById);
router.delete("/:id", deleteProfessionalById);
router.put("/:id", editProfessionalById);

export default router;
