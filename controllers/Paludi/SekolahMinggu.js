import SekolahMinggu from "../../models/PaludiModels/DataSekolahMingguModels.js";
import Gereja from "../../models/PaludiModels/GerejaModel.js";

export const getSekolahMinggu = async (req, res) => {
  try {
    const sekolahMinggu = await SekolahMinggu.findAll({
      include: [{
        model: Gereja
      }],
    });
    res.json(sekolahMinggu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSekolahMingguById = async (req, res) => {
  try {
    const sekolahMinggu = await SekolahMinggu.findOne({
      where: {
        id: req.params.id,
      },
      include: [{
        model : Gereja
      }],
    });
    if (!sekolahMinggu) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json(sekolahMinggu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSekolahMinggu = async (req, res) => {
  const { nama_gereja, nama_pengasuh, jumlah_anak, gerejaId } = req.body;
  try {
    await SekolahMinggu.create({
      nama_gereja,
      nama_pengasuh,
      jumlah_anak,
      gerejaId
    });
    res.status(201).json({ message: "Data berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
    
  }
};

export const updateSekolahMinggu = async (req, res) => {
  try {
    const sekolahMinggu = await SekolahMinggu.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!sekolahMinggu) return res.status(404).json({ message: "Data tidak ditemukan" });
    const { nama_gereja, nama_pengasuh, jumlah_anak } = req.body;
    await sekolahMinggu.update({
      nama_gereja,
      nama_pengasuh,
      jumlah_anak,
    });
    res.json({ message: "Data berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSekolahMinggu = async (req, res) => {
  try {
    const sekolahMinggu = await SekolahMinggu.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!sekolahMinggu) return res.status(404).json({ message: "Data tidak ditemukan" });
    await sekolahMinggu.destroy();
    res.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
