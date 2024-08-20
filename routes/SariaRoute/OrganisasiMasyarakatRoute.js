import {
  getOrganisasiMasyarakat,
  getOrganisasiMasyarakatById,
  createOrganisasiMasyarakat,
  updateOrganisasiMasyarakat,
  deleteOrganisasiMasyarakat,
} from "../../controllers/Saria/OrganisasiMasyarakat.js";
import express from "express"

const router = express.Router();

router.get("/organisasi-masyarakat", getOrganisasiMasyarakat);
router.get("/organisasi-masyarakat/:id", getOrganisasiMasyarakatById);
router.post("/organisasi-masyarakat", createOrganisasiMasyarakat);
router.patch("/organisasi-masyarakat/:id", updateOrganisasiMasyarakat);
router.delete("/organisasi-masyarakat/:id", deleteOrganisasiMasyarakat);

export default router