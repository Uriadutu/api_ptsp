import { getSuratKeluar, getSuratKeluarbyId, createSuratKeluar, updateSuratKeluar, deleteSuratKeluar, getSuratKeluarbySub } from "../controllers/SuratKeluar.js";
import express from "express"

const Route = express.Router()

Route.get("/suratkeluar", getSuratKeluar)
Route.get("/suratkeluar/:id", getSuratKeluarbyId)
Route.get("/suratkeluar/sub/:sub", getSuratKeluarbySub)
Route.post("/suratkeluar", createSuratKeluar)
Route.patch("/suratkeluar/:id", updateSuratKeluar)
Route.delete("/suratkeluar/:id", deleteSuratKeluar)

export default Route;

