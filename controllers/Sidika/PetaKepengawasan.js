import Pegawai from "../../models/LapasiModels/PegawaiModels.js";
import PetaPengawas from "../../models/SidikaModels/PetaKepengawasanModel.js";
import WilayaMengawas from "../../models/SidikaModels/WilayaMengawasModal.js";

export const getAllPetaPengawas = async (req, res) => {
  try {
    const petaPengawas = await PetaPengawas.findAll({
      include: [
        { model: Pegawai },
        {
          model: WilayaMengawas,
        },
      ],
    });
    res.json(petaPengawas);
  } catch (error) {
    console.log(error);
  }
};
export const getPetaPengawasById = async (req, res) => {
  try {
    const petaPengawas = await PetaPengawas.findOne({
      where: { id: req.params.id },
      include: [
        { model: Pegawai },
        {
          model: WilayaMengawas,
        },
      ],
    });
    res.json(petaPengawas);
  } catch (error) {
    console.log(error);
  }
};

export const getWilayahbyIdPengawas = async (req, res) => {
  try {
    const petaPengawas = await WilayaMengawas.findAll({
      where: { id_pengawas: req.params.id },
      include: [
        { model: PetaPengawas },
      ],
    });
    res.json(petaPengawas);
  } catch (error) {
    console.log(error);
  }
};

export const getPetaPengawasByPegawai = async (req, res) => {
  try {
    const petaPengawas = await PetaPengawas.findOne({
      where: { id_pegawai: req.params.id },
      include: [
        { model: Pegawai },
        {
          model: WilayaMengawas,
        },
      ],
    });
    res.json(petaPengawas);
  } catch (error) {
    console.log(error);
  }
};

export const createPetaPengawas = async (req, res) => {
  const { id_pegawai, jenis_pengawas, wilayah_mengawas } = req.body;
  try {
    // Cek apakah sudah ada pengawas dengan id_pegawai yang sama
    const existingPengawas = await PetaPengawas.findOne({
      where: { id_pegawai },
    });

    if (existingPengawas) {
      return res
        .status(400)
        .json({ msg: `Pengawas dengan NIP ${id_pegawai} sudah ada.` });
    }

    // Buat pengawas baru
    const newPengawas = await PetaPengawas.create({
      id : id_pegawai,
      id_pegawai,
      jenis_pengawas,
    });

    // Tambahkan wilayah pengawas
    for (const wilayahs of wilayah_mengawas) {
      await WilayaMengawas.create({
        id_pengawas: newPengawas.id,
        nama_wilayah: wilayahs,
      });
    }

    res
      .status(201)
      .json({ msg: "Pengawas dan nama wilayah berhasil ditambahkan." });
  } catch (error) {
    res.status(500).json({ msg: `Pegawai ${id_pegawai} Tidak Ada` });
    console.log(error);
  }
};


export const updatePetaPengawas = async (req, res) => {
  try {
    const petaPengawas = await PetaPengawas.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(petaPengawas);
  } catch (error) {
    console.log(error);
  }
};

export const deletePetaPengawas = async (req, res) => {
  try {
    const petaPengawas = await PetaPengawas.destroy({
      where: { id: req.params.id },
    });
    res.json(petaPengawas);
  } catch (error) {
    console.log(error);
  }
};
