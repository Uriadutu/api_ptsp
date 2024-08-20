import Pengaduan from "../models/LayananPengaduanModels.js";
import Pegawai from "../models/LapasiModels/PegawaiModels.js";

export const getPengaduan = async (req, res) => {
  try {
    const response = await Pengaduan.findAll({
      include: [{
        model: Pegawai,
        attributes: ['nama_pegawai', "NIP"]
      }]
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPengaduanById = async (req, res) => {
  try {
    const response = await Pengaduan.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Pegawai,
          attributes: ["nama_pegawai", "NIP"],
        },
       
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPengaduan = async (req, res) => {
  try {
    const {judul_laporan, tgl_kejadian, lokasi_kejadian, nama_satker, kategori_laporan, deskripsiPengaduan, sifat_laporan} = req.body;
    await Pengaduan.create(
        {
            id_pegawai : req.userId,
            judul_laporan,
            tgl_kejadian,
            lokasi_kejadian,
            nama_satker,
            kategori_laporan,
            deskripsiPengaduan,
            sifat_laporan,
        }
    );
    res.status(201).json({ message: "Pengaduan berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const updatePengaduan = async (req, res) => {
  try {
    await Pengaduan.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: "Pengaduan berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePengaduan = async (req, res) => {
  try {
    await Pengaduan.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: "Pengaduan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};