import express from "express"
import { getAllGereja, getGerejaById, createGereja, updateGereja, deleteGereja } from "../../controllers/Paludi/Gereja.js"


const Route = express.Router();

Route.get("/gereja", getAllGereja);
Route.get("/gereja/:id", getGerejaById);
Route.post("/gereja", createGereja);
Route.patch("/gereja/:id", updateGereja);
Route.delete("/gereja/:id", deleteGereja);

export default Route;