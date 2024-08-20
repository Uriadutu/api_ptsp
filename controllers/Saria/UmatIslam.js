import UmatIslam from "../../models/SariaModels/UmatIslamModels.js";

export const getUmatIslam = async (req, res) => {
  try {
    const umatIslam = await UmatIslam.findAll();
    res.json(umatIslam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUmatIslambyId = async (req, res) => {
  try {
    const umatIslam = await UmatIslam.findByPk(req.params.id);
    if (!umatIslam) return res.status(404).json({ message: "Data not found" });
    res.json(umatIslam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUmatIslam = async (req, res) => {
  const {
    nama_desa,
    jumlah_aliran,
    jumlah_penduduk,
    jumlah_penduduk_islam,
    jumlah_mesjid,
    alamat,
    kecamatan,
  } = req.body;
  try {
    const newUmatIslam = await UmatIslam.create({
      nama_desa,
      jumlah_aliran,
      jumlah_penduduk,
      jumlah_penduduk_islam,
      jumlah_mesjid,
      alamat : `${kecamatan} - ${nama_desa}`,
      kecamatan,
    });
    res.status(201).json(newUmatIslam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUmatIslam = async (req, res) => {
  const {
    nama_desa,
    jumlah_aliran,
    jumlah_penduduk,
    jumlah_penduduk_islam,
    jumlah_mesjid,
    alamat,
    kecamatan,
  } = req.body;
  try {
    const umatIslam = await UmatIslam.findByPk(req.params.id);
    if (!umatIslam) return res.status(404).json({ message: "Data not found" });

    umatIslam.nama_desa = nama_desa;
    umatIslam.jumlah_aliran = jumlah_aliran;
    umatIslam.jumlah_penduduk = jumlah_penduduk;
    umatIslam.jumlah_penduduk_islam = jumlah_penduduk_islam;
    umatIslam.jumlah_mesjid = jumlah_mesjid;
    umatIslam.alamat = alamat;
    umatIslam.kecamatan = kecamatan;

    await umatIslam.save();
    res.json(umatIslam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUmatIslam = async (req, res) => {
  try {
    const umatIslam = await UmatIslam.findByPk(req.params.id);
    if (!umatIslam) return res.status(404).json({ message: "Data not found" });
    await umatIslam.destroy();
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
