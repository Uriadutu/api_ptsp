import { getRumahIbadahIslam, getRumahIbadahIslambyId, createRumahIbadahIslam, updateRumahIbadahIslam, deleteRumahIbadahIslam } from "../../controllers/Saria/RumahIbdahIslam.js";
import express from "express"

const router = express.Router();

router.get("/rumah-ibadah-islam", getRumahIbadahIslam);
router.get("/rumah-ibadah-islam/:id", getRumahIbadahIslambyId);
router.post("/rumah-ibadah-islam", createRumahIbadahIslam);
router.patch("/rumah-ibadah-islam/:id", updateRumahIbadahIslam);
router.delete("/rumah-ibadah-islam/:id", deleteRumahIbadahIslam);

export default router