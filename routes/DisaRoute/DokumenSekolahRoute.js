import express from "express";
import {
  getAllDokumenSekolah,
  getDokumenSekolahById,
  createDokumenSekolah,
  updateDokumenSekolah,
  deleteDokumenSekolah,
} from "../../controllers/Disa/DokumenSekolah.js";


const Router = express.Router();

Router.get("/dokumen-sekolah/data/:id", getAllDokumenSekolah);
Router.get("/dokumen-sekolah/:id", getDokumenSekolahById);
Router.post("/dokumen-sekolah", createDokumenSekolah);
Router.patch("/dokumen-sekolah/:id", updateDokumenSekolah);
Router.delete("/dokumen-sekolah/:id", deleteDokumenSekolah);

export default Router;