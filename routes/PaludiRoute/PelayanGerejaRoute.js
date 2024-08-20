import express from "express";
import {
  getPelayanGereja,
  getPelayanGerejaById,
  createPelayanGereja,
  updatePelayanGereja,
  deletePelayanGereja,
} from "../../controllers/Paludi/PelayanGereja.js"

const router = express.Router();

router.get("/pelayangereja", getPelayanGereja);
router.get("/pelayangereja/:id", getPelayanGerejaById);
router.post("/pelayangereja", createPelayanGereja);
router.put("/pelayangereja/:id", updatePelayanGereja);
router.delete("/pelayangereja/:id", deletePelayanGereja);

export default router;
