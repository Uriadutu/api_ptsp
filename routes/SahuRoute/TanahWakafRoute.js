import { getTanahWakaf, getTanahWakafById, createTanahWakaf, updateTanahWakaf, deleteTanahWakaf, getTanahWakafByJenisTanah } from "../../controllers/Sahu/TanahWakaf.js";
import express from "express"

const Router = express.Router()

Router.get("/tanah-wakaf", getTanahWakaf)
Router.get("/tanah-wakaf/:id", getTanahWakafById)
Router.get("/tanah-wakaf/jenis/:tanah", getTanahWakafByJenisTanah);
Router.post("/tanah-wakaf", createTanahWakaf)
Router.patch("/tanah-wakaf/:id", updateTanahWakaf)
Router.delete("/tanah-wakaf/:id", deleteTanahWakaf)

export default Router