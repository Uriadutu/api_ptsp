import { getPengaduan, getPengaduanById, createPengaduan,updatePengaduan,deletePengaduan } from "../controllers/LayananPengaduan.js";
import express from "express"
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/pengaduan", getPengaduan);
router.get("/pengaduan/layanan/:id", getPengaduanById);
router.post("/pengaduan", verifyUser, createPengaduan);
router.patch("/pengaduan/:id", updatePengaduan);
router.delete("/pengaduan/:id", deletePengaduan);

export default router;