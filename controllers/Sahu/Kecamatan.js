import Kecamatan from "../../models/SahuModels/KecamatanModels.js";
// Get all Kecamatan
export const getKecamatan = async (req, res) => {
  try {
    const kecamatan = await Kecamatan.findAll();
    res.status(200).json(kecamatan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Kecamatan by ID
export const getKecamatanById = async (req, res) => {
  try {
    const kecamatan = await Kecamatan.findOne({ where: { id: req.params.id } });
    if (!kecamatan) return res.status(404).json({ msg: "Kecamatan not found" });
    res.status(200).json(kecamatan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create Kecamatan
export const createKecamatan = async (req, res) => {
  const { kode, nama_kecamatan } = req.body;
  try {
    await Kecamatan.create({ kode, nama_kecamatan });
    res.status(201).json({ msg: "Kecamatan created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Kecamatan
export const updateKecamatan = async (req, res) => {
  const { kode, nama_kecamatan } = req.body;
  try {
    const kecamatan = await Kecamatan.findOne({ where: { id: req.params.id } });
    if (!kecamatan) return res.status(404).json({ msg: "Kecamatan not found" });
    await Kecamatan.update(
      { kode, nama_kecamatan },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: "Kecamatan updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Kecamatan
export const deleteKecamatan = async (req, res) => {
  try {
    const kecamatan = await Kecamatan.findOne({ where: { id: req.params.id } });
    if (!kecamatan) return res.status(404).json({ msg: "Kecamatan not found" });
    await Kecamatan.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Kecamatan deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
