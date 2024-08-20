import express from "express";
import {
  getAllOrganisasi,
  getOrganisasiById,
  createOrganisasi,
  updateOrganisasi,
  deleteOrganisasi,
} from "../../controllers/Paludi/OrganisasiKristen.js";

const router = express.Router();

router.get("/organisasi/kristen", getAllOrganisasi);
router.get("/organisasi/kristen/:id", getOrganisasiById);
router.post("/organisasi/kristen", createOrganisasi);
router.patch("/organisasi/kristen/:id", updateOrganisasi);
router.delete("/organisasi/kristen/:id", deleteOrganisasi);

export default router;
