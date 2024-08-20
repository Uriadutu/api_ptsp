import KelompokBinaan from "../../models/PaludiModels/KelompokBinaanModels.js";
import Penyulu from "../../models/PaludiModels/PenyuluModels.js";

export const getPenyulus = async (req, res) => {
  try {
    const penyulus = await Penyulu.findAll({
      include : [{
        model : KelompokBinaan
      }]
    });
    res.json(penyulus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPenyuluById = async (req, res) => {
  try {
    const penyulu = await Penyulu.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: KelompokBinaan,
        },
      ],
    });
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    res.json(penyulu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPenyulu = async (req, res) => {
  const { status_pegawai, nama, tempat_tugas, jumlah_binaan, kelompok_binaan } = req.body;
  try {
    const newPenyulu = await Penyulu.create({ status_pegawai, nama, tempat_tugas, jumlah_binaan });
    for (const kelompok of kelompok_binaan) {
      await KelompokBinaan.create({ id_penyulu: newPenyulu.id, nama_kelompok: kelompok });
    }
    res.status(201).json({ message: "Penyulu dan Kelompok Binaan berhasil ditambahkan." });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const updatePenyulu = async (req, res) => {
  try {
    const penyulu = await Penyulu.findByPk(req.params.id);
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    await penyulu.update(req.body);
    res.json(penyulu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePenyulu = async (req, res) => {
  try {
    const penyulu = await Penyulu.findByPk(req.params.id);
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    await penyulu.destroy();
    res.json({ message: "Penyulu deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
