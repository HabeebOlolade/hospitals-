import { Router } from "express";

const router = Router();


router.get("/", getAllServices);
router.get("/:id", getServicesById);
router.get("/:id/:id", getServicesById);
router.post("/:id/:id", postServicesById);
router.post("/:id", postServicesById);
router.delete("/:id", deleteServicesById);
router.put("/:id", editServicesById);



export default router;