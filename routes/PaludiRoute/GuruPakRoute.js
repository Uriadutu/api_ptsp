import express from "express"
import {
  getAllGuruPak,
  getGuruPakById,
  createGuruPak,
  updateGuruPak,
  deleteGuruPak,
  getGuruPakBySekolah,
  getGuruPakByJenjang,
} from "../../controllers/Paludi/GuruPak.js";


const Route = express.Router();

Route.get("/gurupak", getAllGuruPak);
Route.get("/gurupak/:id", getGuruPakById);
Route.get("/gurupak/sekolah/:id", getGuruPakBySekolah);
Route.get("/gurupak/jenjang/:jenjang", getGuruPakByJenjang);
Route.post("/gurupak", createGuruPak);
Route.patch("/gurupak/:id", updateGuruPak);
Route.delete("/gurupak/:id", deleteGuruPak);

export default Route;