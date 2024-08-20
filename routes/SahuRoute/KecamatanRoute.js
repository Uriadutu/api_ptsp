import express from "express"
import { getKecamatan, getKecamatanById, createKecamatan, updateKecamatan, deleteKecamatan } from "../../controllers/Sahu/Kecamatan.js"

const Router = express.Router()

Router.get("/kecamatan", getKecamatan)
Router.get("/kecamatan/:id", getKecamatanById)
Router.post("/kecamatan", createKecamatan)
Router.patch("/kecamatan/:id", updateKecamatan)
Router.delete("/kecamatan/:id", deleteKecamatan)

export default Router
