import express from "express";
import { getPegawai, getPegawaiById, createPegawai, updatePegawai, deletePegawai } from "../../controllers/Lapasi/Pegawai.js";

const Router = express.Router();

Router.get("/pegawai", getPegawai);
Router.get("/pegawai/:id", getPegawaiById);
Router.post("/pegawai", createPegawai);
Router.patch("/pegawai/:id", updatePegawai);
Router.delete("/pegawai/:id", deletePegawai);

export default Router