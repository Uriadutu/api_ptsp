import express from "express";
import {
  getDataUmatKristens,
  getDataUmatKristenById,
  createDataUmatKristen,
  updateDataUmatKristen,
  deleteDataUmatKristen
} from "../../controllers/Paludi/UmatKristen.js";

const router = express.Router();

router.get("/data-umat-kristen", getDataUmatKristens);
router.get("/data-umat-kristen/:id", getDataUmatKristenById);
router.post("/data-umat-kristen", createDataUmatKristen);
router.patch("/data-umat-kristen/:id", updateDataUmatKristen);
router.delete("/data-umat-kristen/:id", deleteDataUmatKristen);

export default router;
