import express from "express"
import { getAllZakat, getZakatById, createZakat, updateZakat, deleteZakat, getZakatByKategori } from "../../controllers/Sahu/Zakat.js"


const Router = express.Router()

Router.get("/zakat", getAllZakat)
Router.get("/zakat/:id", getZakatById)
Router.get("/zakat/kategori/:kategori", getZakatByKategori);
Router.post("/zakat", createZakat)
Router.patch("/zakat/:id", updateZakat)
Router.delete("/zakat/:id", deleteZakat)

export default Router