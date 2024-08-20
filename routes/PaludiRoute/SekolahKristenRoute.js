import express from "express";
import {
  getSekolahKristens,
  getSekolahKristenById,
  getJumlahSekolah,
  createSekolahKristen,
  getSekolahKristenByStatus,
  updateSekolahKristen,
  deleteSekolahKristen,
  getSekolahKristenByNama,
} from "../../controllers/Paludi/SekolahKristen.js";

const router = express.Router();

router.get("/sekolah-kristen", getSekolahKristens);
router.get("/sekolah-kristen/:id", getSekolahKristenById);
router.get("/sekolah-kristen/jumlah/:sekolah", getJumlahSekolah);
router.get("/sekolah-kristen/nama/:nama", getSekolahKristenByNama);
router.get("/sekolah-kristen/status/:status", getSekolahKristenByStatus);
router.post("/sekolah-kristen", createSekolahKristen);
router.patch("/sekolah-kristen/:id", updateSekolahKristen);
router.delete("/sekolah-kristen/:id", deleteSekolahKristen);

export default router;
