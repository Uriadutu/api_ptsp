import express from "express";
import { getSekolahByNama } from "../controllers/NamaSekolahSidika.js";

const router = express.Router();

router.get("/sekolahsidika/:nama", getSekolahByNama);

export default router;
