import Sekolah from "../models/DisaModels/SekolahModels.js";
import SekolahKristen from "../models/PaludiModels/SekolahKristenModel.js";

export const getSekolahByNama = async (req, res) => {
  try {
    let sekolah = await Sekolah.findOne({
      where: {
        nama_sekolah: req.params.nama,
      },
    });

    if (!sekolah) {
      sekolah = await SekolahKristen.findOne({
        where: {
          nama_sekolah: req.params.nama,
        },
      });
    }

    if (sekolah) {
      return res.status(200).json(sekolah);
    } else {
      return res.status(404).json({ msg: "Data sekolah tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
