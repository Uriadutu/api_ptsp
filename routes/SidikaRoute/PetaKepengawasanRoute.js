import { getAllPetaPengawas, getPetaPengawasById, createPetaPengawas, updatePetaPengawas, deletePetaPengawas, getPetaPengawasByPegawai, getWilayahbyIdPengawas } from "../../controllers/Sidika/PetaKepengawasan.js";

import express from "express"
const Router = express.Router();

Router.get("/peta", getAllPetaPengawas);
Router.get("/peta/:id", getPetaPengawasById);
Router.get("/peta/pengawas/:id", getPetaPengawasByPegawai);
Router.get("/peta/wilayah/:id", getWilayahbyIdPengawas);
Router.post("/peta", createPetaPengawas);
Router.patch("/peta/:id", updatePetaPengawas);
Router.delete("/peta/:id", deletePetaPengawas);

export default Router
