import Lembaga from "../../models/PaludiModels/LembagaKristenModels.js";


export const getAllLembaga = async (req, res) => {
  try {
    const lembaga = await Lembaga.findAll();
    res.status(200).json(lembaga);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Lembaga by ID
export const getLembagaById = async (req, res) => {
  try {
    const lembaga = await Lembaga.findOne({ where: { id: req.params.id } });
    if (!lembaga) return res.status(404).json({ msg: "Lembaga not found" });
    res.status(200).json(lembaga);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create Lembaga
export const createLembaga = async (req, res) => {
  const { nama_lembaga, alamat, tahun_berdiri, nama_pimpinan, tahun_periode, jumlah_bidang, jumlah_anggota } = req.body;
  try {
    await Lembaga.create({ nama_lembaga, alamat, tahun_berdiri, nama_pimpinan, tahun_periode, jumlah_bidang, jumlah_anggota });
    res.status(201).json({ msg: "Lembaga created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Lembaga
export const updateLembaga = async (req, res) => {
  const { nama_lembaga, alamat, tahun_berdiri, nama_pimpinan, tahun_periode, jumlah_bidang, jumlah_anggota } = req.body;
  try {
    const lembaga = await Lembaga.findOne({ where: { id: req.params.id } });
    if (!lembaga) return res.status(404).json({ msg: "Lembaga not found" });
    await Lembaga.update({ nama_lembaga, alamat, tahun_berdiri, nama_pimpinan, tahun_periode, jumlah_bidang, jumlah_anggota }, { where: { id: req.params.id } });
    res.status(200).json({ msg: "Lembaga updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Lembaga
export const deleteLembaga = async (req, res) => {
  try {
    const lembaga = await Lembaga.findOne({ where: { id: req.params.id } });
    if (!lembaga) return res.status(404).json({ msg: "Lembaga not found" });
    await Lembaga.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Lembaga deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
