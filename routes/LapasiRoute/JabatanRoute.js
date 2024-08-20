import { getJabatan, getJabatanById, createJabatan, updateJabatan, deleteJabatan } from "../../controllers/Lapasi/Jabatan.js";
import express from "express";

const Router = express.Router();

Router.get("/jabatan", getJabatan);
Router.get("/jabatan/:id", getJabatanById);
Router.post("/jabatan", createJabatan);
Router.patch("/jabatan/:id", updateJabatan);
Router.delete("/jabatan/:id", deleteJabatan);

export default Router