import PelayanGereja from "../../models/PaludiModels/PelayanGerejaModels.js";
import Gereja from "../../models/PaludiModels/GerejaModel.js";

export const getPelayanGereja = async (req, res) => {
  try {
    const pelayanGereja = await PelayanGereja.findAll({
      include: [Gereja],
    });
    res.json(pelayanGereja);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPelayanGerejaById = async (req, res) => {
  try {
    const pelayanGereja = await PelayanGereja.findOne({
      where: {
        id: req.params.id,
      },
      include: [Gereja],
    });
    if (!pelayanGereja)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json(pelayanGereja);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPelayanGereja = async (req, res) => {
  const {
    nama_gereja,
    nama_pelayan,
    jenis_kelamin,
    pendidikan_terakhir,
    jabatan_pelayan,
    jabatan_bphj,
    jabatan_bidang,
    gerejaId
  } = req.body;
  try {
    await PelayanGereja.create({
      nama_gereja,
      nama_pelayan,
      jenis_kelamin,
      pendidikan_terakhir,
      jabatan_pelayan,
      jabatan_bphj,
      jabatan_bidang,
      gerejaId
    });
    res.status(201).json({ message: "Data berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
    
  }
};

export const updatePelayanGereja = async (req, res) => {
  try {
    const pelayanGereja = await PelayanGereja.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!pelayanGereja)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    const {
      nama_gereja,
      nama_pelayan,
      jenis_kelamin,
      pendidikan_terakhir,
      jabatan_pelayan,
      jabatan_bphj,
      jabatan_bidang,
    } = req.body;
    await pelayanGereja.update({
      nama_gereja,
      nama_pelayan,
      jenis_kelamin,
      pendidikan_terakhir,
      jabatan_pelayan,
      jabatan_bphj,
      jabatan_bidang,
    });
    res.json({ message: "Data berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePelayanGereja = async (req, res) => {
  try {
    const pelayanGereja = await PelayanGereja.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!pelayanGereja)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    await pelayanGereja.destroy();
    res.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
