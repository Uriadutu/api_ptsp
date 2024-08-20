import {
  getHajibyId,
  getHaji,
  createHaji,
  updateHaji,
  deleteHaji,
  getHajibyPorsi,
  berangkatHaji,
  getJumlahHajiBerangkat,
  getHajibyTanggal,
  getHajiStatusByYear,
} from "../../controllers/Akesahu/DataHaji.js";
import express from "express"
const router = express.Router();

router.get("/haji", getHaji);
router.get("/haji/:id", getHajibyId);
router.get("/haji/porsi/:porsi", getHajibyPorsi); 
router.get("/haji/status/berangkat", getHajiStatusByYear); 
router.get("/haji/tanggal/:year", getHajibyTanggal);
router.patch("/haji/berangkat/:id", berangkatHaji);
router.get("/haji/status/info/:berangkat/", getJumlahHajiBerangkat);
router.post("/haji", createHaji);
router.patch("/haji/:id", updateHaji);
router.delete("/haji/:id", deleteHaji);

export default router