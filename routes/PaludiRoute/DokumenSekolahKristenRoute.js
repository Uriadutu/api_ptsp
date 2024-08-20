import express from "express";
import {
  getAllDokumenSekolah,
  getDokumenSekolahById,
  createDokumenSekolah,
  updateDokumenSekolah,
  deleteDokumenSekolah,
} from "../../controllers/Paludi/DokumenSekolahKristen.js";


const Router = express.Router();

Router.get("/dokumen-sekolah-kristen/data/:id", getAllDokumenSekolah);
Router.get("/dokumen-sekolah-kristen/:id", getDokumenSekolahById);
Router.post("/dokumen-sekolah-kristen", createDokumenSekolah);
Router.patch("/dokumen-sekolah-kristen/:id", updateDokumenSekolah);
Router.delete("/dokumen-sekolah-kristen/:id", deleteDokumenSekolah);

export default Router;