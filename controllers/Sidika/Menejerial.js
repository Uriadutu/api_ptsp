import Pegawai from "../../models/LapasiModels/PegawaiModels.js";
import Menejerial from "../../models/SidikaModels/PendampingMenejerialModels.js";
import PetaPengawas from "../../models/SidikaModels/PetaKepengawasanModel.js";

export const getMenejerial = async (req, res) => {
  try {
    const menejerial = await Menejerial.findAll({
      include: [
        {
          model: PetaPengawas,
        },
        {
          model: Pegawai,
        },
      ],
    });
    res.json(menejerial);
  } catch (error) {
    console.log(error);
  }
};

export const getMenejerialbyId = async (req, res) => {
  try {
    const menejerial = await Menejerial.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: PetaPengawas,
        },
        {
          model: Pegawai,
        },
      ],
    });
    res.json(menejerial);
  } catch (error) {
    console.log(error);
  }
};

export const createMenejerial = async (req, res) => {
  const {
    id_pegawai,
    nama_sekolah,
    nama_kepsek,
    status_sertifikat,
    status_pegawai,
    keterangan,
  } = req.body;
  try {
    await Menejerial.create({
      id_pegawai_asli : id_pegawai,
      id_pegawai,
      nama_sekolah,
      nama_kepsek,
      status_sertifikat,
      status_pegawai,
      keterangan,
    });

    res.json("berhasil");
  } catch (error) {
    console.log(error);
  }
};

export const deleteMenejerial = async (req, res) => {
  try {
    const menejerial = await Menejerial.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!menejerial) {
      return res
        .status(404)
        .json({ msg: `tidak ditemukan.` });
    }
    await menejerial.destroy();

    res.json("berhasil");
  } catch (error) {
    console.log(error);
  }
}