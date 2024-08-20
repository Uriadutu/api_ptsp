import Satker from "../../models/LapasiModels/SatkerModels.js";

export const getSatker = async (req, res) => {
    try {
      const satker = await Satker.findAll();
      res.status(200).json(satker);
    } catch (error) {
      res.status(404).json({ msg: "Tidak ada satker" });
    }
}

export const getSatkerById = async (req, res) => {
    try {
      const satker = await Satker.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(satker);
    } catch (error) {
      res.status(404).json({ msg: "Tidak ada satker" });
    }
}

export const createSatker = async (req, res) => {
    const { kode_satker, nama_satker, alamat_satker } = req.body;
    try {
      await Satker.create({ 
        kode_satker: kode_satker,
        nama_satker: nama_satker,
        alamat_satker: alamat_satker
      });
      res.status(200).json({ msg: "Dibuat" });
    } catch (error) {
      res.status(500).json({ msg: "Gagal" });
    }
}

export const updateSatker = async (req, res) => {
    const { kode_satker, nama_satker, alamat_satker } = req.body;
    try {
      await Satker.update({ 
        kode_satker: kode_satker,
        nama_satker: nama_satker,
        alamat_satker: alamat_satker
      }, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({ msg: "Diperbarui" });
    } catch (error) {
      res.status(500).json({ msg: "Gagal" });
    }
}

export const deleteSatker = async (req, res) => {
    try {
      const satker = await Satker.findOne({
        where: {
          id: req.params.id
        }
      });
      await satker.destroy();
      res.status(200).json({ msg: "Dihapus" });
    } catch (error) {
      res.status(500).json({ msg: "Gagal" });
    }
}