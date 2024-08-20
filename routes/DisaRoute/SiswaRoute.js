import express from "express"
import { getSiswa, getSiswaById, getSiswaBySekolah, createSiswa, updateSiswa, deleteSiswa } from "../../controllers/Disa/Siswa.js"

const router = express.Router()

router.get("/siswa", getSiswa)
router.get("/siswa/:id", getSiswaById)
router.get("/siswa/sekolah/:id", getSiswaBySekolah)
router.post("/siswa", createSiswa)
router.patch("/siswa/:id", updateSiswa)
router.delete("/siswa/:id", deleteSiswa)

export default router
