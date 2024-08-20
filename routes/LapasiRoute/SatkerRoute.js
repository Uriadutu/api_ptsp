import { getSatker, getSatkerById, createSatker, updateSatker, deleteSatker } from "../../controllers/Lapasi/Satker.js";
import express from "express";

const Router = express.Router();

Router.get("/satker", getSatker);
Router.get("/satker/:id", getSatkerById);
Router.post("/satker", createSatker);
Router.patch("/satker/:id", updateSatker);
Router.delete("/satker/:id", deleteSatker);

export default Router