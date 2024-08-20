import { getUmatIslam, getUmatIslambyId, createUmatIslam, updateUmatIslam, deleteUmatIslam } from "../../controllers/Saria/UmatIslam.js";
import express from "express"

const router = express.Router();

router.get("/umat-islam", getUmatIslam);
router.get("/umat-islam/:id", getUmatIslambyId);
router.post("/umat-islam", createUmatIslam);
router.patch("/umat-islam/:id", updateUmatIslam);
router.delete("/umat-islam/:id", deleteUmatIslam);

export default router