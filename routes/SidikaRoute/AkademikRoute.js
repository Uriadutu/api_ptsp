import express from "express";
import { getAkademik, getAkademikbyId, createAkademik, deleteAkademik } from "../../controllers/Sidika/Akademik.js";

const Router = express.Router();

Router.get("/akademik", getAkademik);
Router.get("/akademik/:id", getAkademikbyId);
Router.post("/akademik", createAkademik);
Router.delete("/akademik/:id", deleteAkademik);

export default Router;