import express from "express";
import {
  getSekolahMinggu,
  getSekolahMingguById,
  createSekolahMinggu,
  updateSekolahMinggu,
  deleteSekolahMinggu,
} from "../../controllers/Paludi/SekolahMinggu.js";

const router = express.Router();

router.get("/sekolahminggu", getSekolahMinggu);
router.get("/sekolahminggu/:id", getSekolahMingguById);
router.post("/sekolahminggu", createSekolahMinggu);
router.patch("/sekolahminggu/:id", updateSekolahMinggu);
router.delete("/sekolahminggu/:id", deleteSekolahMinggu);

export default router;
