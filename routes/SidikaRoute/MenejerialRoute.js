import express from "express";
import { getMenejerial, getMenejerialbyId, createMenejerial, deleteMenejerial } from "../../controllers/Sidika/Menejerial.js";

const Router = express.Router();

Router.get("/menejerial", getMenejerial);
Router.get("/menejerial/:id", getMenejerialbyId);
Router.post("/menejerial", createMenejerial);
Router.delete("/menejerial/:id", deleteMenejerial);

export default Router;
