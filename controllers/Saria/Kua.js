import Kua from "../../models/SariaModels/KuaModels.js";

// Get all Kua
export const getKua = async (req, res) => {
  try {
    const kua = await Kua.findAll();
    res.status(200).json(kua);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Kua by ID
export const getKuaById = async (req, res) => {
  try {
    const kua = await Kua.findOne({ where: { id: req.params.id } });
    if (!kua) return res.status(404).json({ msg: "Kua not found" });
    res.status(200).json(kua);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create Kua
export const createKua = async (req, res) => {
  const { kode_satker, nama_kua, alamat, nama_kepala, jumlah_pegawai } =
    req.body;
  try {
    await Kua.create({
      kode_satker,
      nama_kua,
      alamat,
      nama_kepala,
      jumlah_pegawai,
    });
    res.status(201).json({ msg: "Kua created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Kua
export const updateKua = async (req, res) => {
  const { kode_satker, nama_kua, alamat, nama_kepala, jumlah_pegawai } =
    req.body;
  try {
    const kua = await Kua.findOne({ where: { id: req.params.id } });
    if (!kua) return res.status(404).json({ msg: "Kua not found" });
    await Kua.update(
      { kode_satker, nama_kua, alamat, nama_kepala, jumlah_pegawai },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: "Kua updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Kua
export const deleteKua = async (req, res) => {
  try {
    const kua = await Kua.findOne({ where: { id: req.params.id } });
    if (!kua) return res.status(404).json({ msg: "Kua not found" });
    await Kua.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Kua deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
