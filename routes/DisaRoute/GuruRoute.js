import {
  getGuru,
  getGurubyId,
  getGurubySekolah,
  createGuru,
  updateGuru,
  deleteGuru,
} from "../../controllers/Disa/Guru.js";
import express from "express";

const Route = express.Router();

Route.get("/guru", getGuru);
Route.get("/guru/:id", getGurubyId);
Route.get("/guru/sekolah/:id", getGurubySekolah);
Route.post("/guru", createGuru);
Route.patch("/guru/:id", updateGuru);
Route.delete("/guru/:id", deleteGuru);

export default Route;
