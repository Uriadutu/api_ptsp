import { getSekolah, getSekolahbyId, createSekolah,getJumlahSekolah, getSekolahByNama, updateSekolah, deleteSekolah, getSekolahbyStatus } from "../../controllers/Disa/Sekolah.js";
import express from "express"

const Route = express.Router()

Route.get("/sekolah", getSekolah)
Route.get("/sekolah/:id", getSekolahbyId)
Route.get("/sekolah/status/:status", getSekolahbyStatus)
Route.get("/sekolah/jumlah/:sekolah", getJumlahSekolah)
Route.get("/sekolah/jumlah/:sekolah", getJumlahSekolah)
Route.get("/sekolah/nama/:nama", getSekolahByNama)
Route.post("/sekolah", createSekolah)
Route.patch("/sekolah/:id", updateSekolah)
Route.delete("/sekolah/:id", deleteSekolah)

export default Route;

