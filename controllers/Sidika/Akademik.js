import Pegawai from "../../models/LapasiModels/PegawaiModels.js";
import Akademik from "../../models/SidikaModels/PendampinganAkademikModels.js";

export const getAkademik = async (req, res) => {
  try {
    const akademik = await Akademik.findAll({
      include : [{
        model : Pegawai
      }]
    });
    res.json(akademik);
  } catch (error) {
    console.log(error);
  }
};
export const getAkademikbyId = async (req, res) => {
  try {
    const akademik = await Akademik.findOne({
      where: {
        id: re1.params.id,
      },
      include : [{
        model : Pegawai
      }]
    
    });
    res.json(akademik);
  } catch (error) {
    console.log(error);
  }
};

export const createAkademik = async (req, res) => {
  const {
    id_pegawai,
    nama_sekolah,
    status_akademik,
    jumlah_peserta,
    keterangan,
  } = req.body;
  try {
    await Akademik.findOne({
      where: { id_pegawai },
    });

    

    await Akademik.create({
      id_pegawai,
      id_pegawai_asli : id_pegawai,
      nama_sekolah,
      status_akademik,
      jumlah_peserta,
      keterangan,
    });

    res.json("berhasil");
  } catch (error) {
    console.log(error);
  }
};

export const deleteAkademik = async (req, res) => {
  try {
    const akademik = await Akademik.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!akademik) {
      return res.status(404).json({ msg: "Akademik not found" });
    }
    await akademik.destroy();
    return res.status(200).json({ msg: "Berhasil Dihapus" });
  } catch (error) {
    return res.status(500).json({ msg: "Akademik Gagal Dihapus" });
  }
};
