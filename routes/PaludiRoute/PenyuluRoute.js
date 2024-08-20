import express from "express";
import {
  getPenyulus,
  getPenyuluById,
  createPenyulu,
  updatePenyulu,
  deletePenyulu
} from "../../controllers/Paludi/Penyulu.js";

const router = express.Router();

router.get("/penyulu", getPenyulus);
router.get("/penyulu/:id", getPenyuluById);
router.post("/penyulu", createPenyulu);
router.patch("/penyulu/:id", updatePenyulu);
router.delete("/penyulu/:id", deletePenyulu);

export default router;
