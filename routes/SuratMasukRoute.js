import { getSuratMasuk, getSuratMasukbyId, createSuratMasuk, updateSuratMasuk, deleteSuratMasuk, getSuratMasukbySub } from "../controllers/SuratMasuk.js";
import express from "express"

const Route = express.Router()

Route.get("/suratmasuk", getSuratMasuk)
Route.get("/suratmasuk/:id", getSuratMasukbyId)
Route.get("/suratmasuk/sub/:sub", getSuratMasukbySub)
Route.post("/suratmasuk", createSuratMasuk)
Route.patch("/suratmasuk/:id", updateSuratMasuk)
Route.delete("/suratmasuk/:id", deleteSuratMasuk)

export default Route;

