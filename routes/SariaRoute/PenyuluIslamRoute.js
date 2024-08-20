import { getPenyuluIslam, getPenyuluIslamById, createPenyuluIslam, updatePenyuluIslam, deletePenyuluIslam } from "../../controllers/Saria/PenyuluhIslam.js";
import express from "express";

const Router = express.Router();

Router.get("/penyuluh/islam", getPenyuluIslam);
Router.get("/penyuluh/islam/:id", getPenyuluIslamById);
Router.post("/penyuluh/islam", createPenyuluIslam);
Router.put("/penyuluh/islam/:id", updatePenyuluIslam);
Router.delete("/penyuluh/islam/:id", deletePenyuluIslam);

export default Router