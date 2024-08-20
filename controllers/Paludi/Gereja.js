import Gereja from "../../models/PaludiModels/GerejaModel.js";

// Get all Gereja
export const getAllGereja = async (req, res) => {
  try {
    const gereja = await Gereja.findAll();
    res.status(200).json(gereja);
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
    
  }
};

// Get Gereja by ID
export const getGerejaById = async (req, res) => {
  try {
    const gereja = await Gereja.findOne({ where: { id: req.params.id } });
    if (!gereja) return res.status(404).json({ msg: "Gereja not found" });
    res.status(200).json(gereja);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create Gereja
export const createGereja = async (req, res) => {
  const { nama_gereja, no_lapor, status_ijin, nomor_ibm, status_gedung, status_tanah, luas_bangunan, luas_tanah, tahun_berdiri } = req.body;
  try {
    await Gereja.create({ nama_gereja, no_lapor, status_ijin, nomor_ibm, status_gedung, status_tanah, luas_bangunan, luas_tanah, tahun_berdiri });
    res.status(201).json({ msg: "Gereja created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Gereja
export const updateGereja = async (req, res) => {
  const { nama_gereja, no_lapor, status_ijin, nomor_ibm, status_gedung, status_tanah, luas_bangunan, luas_tanah, tahun_berdiri } = req.body;
  try {
    const gereja = await Gereja.findOne({ where: { id: req.params.id } });
    if (!gereja) return res.status(404).json({ msg: "Gereja not found" });
    await Gereja.update({ nama_gereja, no_lapor, status_ijin, nomor_ibm, status_gedung, status_tanah, luas_bangunan, luas_tanah, tahun_berdiri }, { where: { id: req.params.id } });
    res.status(200).json({ msg: "Gereja updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Gereja
export const deleteGereja = async (req, res) => {
  try {
    const gereja = await Gereja.findOne({ where: { id: req.params.id } });
    if (!gereja) return res.status(404).json({ msg: "Gereja not found" });
    await Gereja.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Gereja deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
