import { getMajelis, getMajelisbyId, createMajelis, updateMajelis, deleteMajelis } from "../../controllers/Saria/Majelis.js";

import express from "express"

const router = express.Router();

router.get("/majelis", getMajelis);
router.get("/majelis/:id", getMajelisbyId);
router.post("/majelis", createMajelis);
router.patch("/majelis/:id", updateMajelis);
router.delete("/majelis/:id", deleteMajelis);

export default router