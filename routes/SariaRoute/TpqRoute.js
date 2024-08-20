import express from "express";
import {
  getAllTpg,
  getTpgById,
  createTpg,
  updateTpg,
  deleteTpg,
} from "../../controllers/Saria/Tpq.js";

const router = express.Router();

router.get("/tpq", getAllTpg);
router.get("/tpq/:id", getTpgById);
router.post("/tpq", createTpg);
router.patch("/tpq/:id", updateTpg);
router.delete("/tpq/:id", deleteTpg);

export default router;
