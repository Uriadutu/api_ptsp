
import Organisasi from "../../models/PaludiModels/OrganisasiKristenModels.js";

export const getAllOrganisasi = async (req, res) => {
  try {
    const organisasi = await Organisasi.findAll();
    res.status(200).json(organisasi);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Organisasi by ID
export const getOrganisasiById = async (req, res) => {
  try {
    const organisasi = await Organisasi.findOne({
      where: { id: req.params.id },
    });
    if (!organisasi)
      return res.status(404).json({ msg: "Organisasi not found" });
    res.status(200).json(organisasi);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create Organisasi
export const createOrganisasi = async (req, res) => {
  const {
    nama_organisasi,
    alamat,
    tahun_berdiri,
    nama_pimpinan,
    tahun_periode,
    jumlah_anggota,
  } = req.body;
  try {
    await Organisasi.create({
      nama_organisasi,
      alamat,
      tahun_berdiri,
      nama_pimpinan,
      tahun_periode,
      jumlah_anggota,
    });
    res.status(201).json({ msg: "Organisasi created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Organisasi
export const updateOrganisasi = async (req, res) => {
  const {
    nama_organisasi,
    alamat,
    tahun_berdiri,
    nama_pimpinan,
    tahun_periode,
    jumlah_anggota,
  } = req.body;
  try {
    const organisasi = await Organisasi.findOne({
      where: { id: req.params.id },
    });
    if (!organisasi)
      return res.status(404).json({ msg: "Organisasi not found" });
    await Organisasi.update(
      {
        nama_organisasi,
        alamat,
        tahun_berdiri,
        nama_pimpinan,
        tahun_periode,
        jumlah_anggota,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: "Organisasi updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Organisasi
export const deleteOrganisasi = async (req, res) => {
  try {
    const organisasi = await Organisasi.findOne({
      where: { id: req.params.id },
    });
    if (!organisasi)
      return res.status(404).json({ msg: "Organisasi not found" });
    await Organisasi.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Organisasi deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
