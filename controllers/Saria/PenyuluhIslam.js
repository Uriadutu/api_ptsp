import KelompokBinaanIslam from "../../models/SariaModels/KelompokBinaanIslamModel.js";
import PenyuluIslam from "../../models/SariaModels/PenyuluhIslamModel.js";

export const getPenyuluIslam = async (req, res) => {
  try {
    const penyulus = await PenyuluIslam.findAll({
      include: [
        {
          model: KelompokBinaanIslam,
        },
      ],
    });
    res.json(penyulus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPenyuluIslamById = async (req, res) => {
  try {
    const penyulu = await PenyuluIslam.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: KelompokBinaanIslam,
        },
      ],
    });
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    res.json(penyulu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPenyuluIslam = async (req, res) => {
  const { status_pegawai, nama, tempat_tugas, jumlah_binaan, kelompok_binaan } =
    req.body;
  try {
    const newPenyulu = await PenyuluIslam.create({
      status_pegawai,
      nama,
      tempat_tugas,
      jumlah_binaan,
    });
    for (const kelompok of kelompok_binaan) {
      await KelompokBinaanIslam.create({
        id_penyuluislam: newPenyulu.id,
        nama_kelompok: kelompok,
      });
    }
    res.status(201).json({ message: "Penyulu dan Kelompok Binaan berhasil ditambahkan." });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const updatePenyuluIslam = async (req, res) => {
  try {
    const penyulu = await PenyuluIslam.findByPk(req.params.id);
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    await penyulu.update(req.body);
    res.json(penyulu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePenyuluIslam = async (req, res) => {
  try {
    const penyulu = await PenyuluIslam.findByPk(req.params.id);
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    await penyulu.destroy();
    res.json({ message: "Penyulu deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
