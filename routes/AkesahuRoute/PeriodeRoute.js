import express from "express";
import {
    getPeriodeHaji,
    createPeriodeHaji,
    deletePeriodeHaji,
} from "../../controllers/Akesahu/Periode.js";

const router = express.Router();

router.get("/periode/haji", getPeriodeHaji);
router.post("/periode/haji", createPeriodeHaji);
router.delete("/periode/haji/:id", deletePeriodeHaji);

export default router