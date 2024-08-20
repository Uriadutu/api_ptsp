import express from "express";
import { createHakAkses, getHakAkses, updateHakAkses } from "../controllers/HakAkses.js";

const Router = express.Router();

Router.get("/hakakses/pegawai/:id", getHakAkses);
Router.post("/hakakses", createHakAkses);
Router.patch("/hakakses/pegawai/:id", updateHakAkses);

export default Router;
