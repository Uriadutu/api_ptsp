import LembagaKeagamaan from "../../models/SariaModels/LembagaKeagamaanModels.js";

export const getLembagaKeagamaan = async (req, res) => {
  try {
    const response = await LembagaKeagamaan.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getLembagaKeagamaanById = async (req, res) => {
  try {
    const response = await LembagaKeagamaan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createLembagaKeagamaan = async (req, res) => {
  const {
    nama_lembaga,
    alamat,
    tahun_berdiri,
    nama_pimpinan,
    tahun_periode,
    jumlah_bidang,
    jumlah_anggota,
  } = req.body;
  try {
    await LembagaKeagamaan.create({
      nama_lembaga,
      alamat,
      tahun_berdiri,
      nama_pimpinan,
      tahun_periode,
      jumlah_bidang,
      jumlah_anggota,
    });
    res
      .status(201)
      .json({ msg: "Data Lembaga Keagamaan berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateLembagaKeagamaan = async (req, res) => {
  const {
    nama_lembaga,
    alamat,
    tahun_berdiri,
    nama_pimpinan,
    tahun_periode,
    jumlah_bidang,
    jumlah_anggota,
  } = req.body;
  try {
    await LembagaKeagamaan.update(
      {
        nama_lembaga,
        alamat,
        tahun_berdiri,
        nama_pimpinan,
        tahun_periode,
        jumlah_bidang,
        jumlah_anggota,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res
      .status(200)
      .json({ msg: "Data Lembaga Keagamaan berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteLembagaKeagamaan = async (req, res) => {
  try {
    await LembagaKeagamaan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ msg: "Data Lembaga Keagamaan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
