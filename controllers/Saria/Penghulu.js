import Penghulu from "../../models/SariaModels/PenghuluModels.js";
import Pegawai from "../../models/LapasiModels/PegawaiModels.js";

export const getPenghulu = async (req, res) => {
  try {
    const penghulu = await Penghulu.findAll({
      include: [
        {
          model: Pegawai,
        },
      ],
    });
    res.status(200).json(penghulu);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPenghuluById = async (req, res) => {
  try {
    const id = req.params.id;
    const penghulu = await Penghulu.findOne({
      where: {
        id_pegawai: id,
      },
      include: [
        {
          model: Pegawai,
        },
      ],
    });
    res.status(200).json(penghulu);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPenghulu = async (req, res) => {
  const { id_pegawai } = req.body;
  try {
    const exgPegawai = await Penghulu.findOne({
      where: {
        id_pegawai,
      },
    });

    if (exgPegawai) {
      return res.status(400).json({ msg: `${id_pegawai} sudah ada.` });
    }

    await Penghulu.create({
      id: id_pegawai,
      id_pegawai,
    });
    res.status(200).json({ msg: "berhasil" });
  } catch (error) {
    res.status(500).json({ msg: "NIP Tidak Ada" });
    console.log(error);
  }
};

export const deletePenghulu = async (req, res) => {
  try {
    const id = req.params.id;
    const penghulu = await Penghulu.findOne({
      where: {
        id: id,
      },
    });
    await penghulu.destroy();
    res.status(200).json({ msg: "berhasil" });
  } catch (error) {
    res.status(500).json({ msg: "gagal" });
  }
};
