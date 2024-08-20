import RumahIbadahIslam from "../../models/SariaModels/RumahIbadahIslamModels.js";

export const getRumahIbadahIslam = async (req, res) => {
  try {
    const response = await RumahIbadahIslam.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getRumahIbadahIslambyId = async (req, res) => {
  try {
    const response = await RumahIbadahIslam.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createRumahIbadahIslam = async (req, res) => {
  const {
    id_mesjid,
    nama_masjid,
    kecamatan,
    tipologi,
    alamat,
    status_tanah,
    luas_tanah,
    luas_bangunan,
    tahun_berdiri,
  } = req.body;
  try {
    const newRumahIbadah = await RumahIbadahIslam.create({
      id_mesjid,
      nama_masjid,
      kecamatan,
      tipologi,
      alamat,
      status_tanah,
      luas_tanah,
      luas_bangunan,
      tahun_berdiri,
    });
    res.status(201).json(newRumahIbadah);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateRumahIbadahIslam = async (req, res) => {
  const {
    id_mesjid,
    nama_masjid,
    kecamatan,
    tipologi,
    alamat,
    status_tanah,
    luas_tanah,
    luas_bangunan,
    tahun_berdiri,
  } = req.body;
  try {
    await RumahIbadahIslam.update(
      {
        id_mesjid,
        nama_masjid,
        kecamatan,
        tipologi,
        alamat,
        status_tanah,
        luas_tanah,
        luas_bangunan,
        tahun_berdiri,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Rumah Ibadah Islam updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteRumahIbadahIslam = async (req, res) => {
  try {
    await RumahIbadahIslam.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Rumah Ibadah Islam deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
