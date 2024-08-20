import express from "express"

import { getLembagaById, getAllLembaga, createLembaga, updateLembaga, deleteLembaga } from "../../controllers/Paludi/LembagaKristen.js"


const Route = express.Router()


Route.get("/lembaga-kristen", getAllLembaga)
Route.get("/lembaga-kristen/:id",getLembagaById)
Route.post("/lembaga-kristen", createLembaga)
Route.patch("/lembaga-kristen/:id", updateLembaga)
Route.delete("/lembaga-kristen/:id", deleteLembaga)

export default Route