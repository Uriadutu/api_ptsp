import { getLembagaKeagamaan, getLembagaKeagamaanById, createLembagaKeagamaan, updateLembagaKeagamaan, deleteLembagaKeagamaan } from "../../controllers/Saria/LembagaKeagamaan.js";

import express from "express"

const route = express.Router()

route.get("/lembaga-keagamaan", getLembagaKeagamaan)
route.get("/lembaga-keagamaan/:id", getLembagaKeagamaanById)
route.post("/lembaga-keagamaan", createLembagaKeagamaan)
route.patch("/lembaga-keagamaan/:id", updateLembagaKeagamaan)
route.delete("/lembaga-keagamaan/:id", deleteLembagaKeagamaan)

export default route
