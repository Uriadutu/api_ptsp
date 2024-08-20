import HakAkses from "../models/HakAksesModel.js";
import argon2 from "argon2";
import Pegawai from "../models/LapasiModels/PegawaiModels.js";


export const getHakAkses = async (req, res) => {
  try {
    const hakakses = await HakAkses.findOne({
      where : {
        id_pegawai : req.params.id
      }
    });
    res.status(200).json(hakakses);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
export const createHakAkses = async (req, res) => {
  const { id_pegawai } = req.body;
  try {
    await HakAkses.create({
      id_pegawai: id_pegawai,
      lapasi: false,
      pantai_disa: false,
      saria: false,
      akesahu: false,
      sahu: false,
      paludi: false,
      sidika: false,
    });
    res.status(200).json({ msg: "Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: "gagal" });
  }
};

export const updateHakAkses = async (req, res) => {
  const { id } = req.params;
  const { password, lapasi, pantai_disa, aksesahu, saria, paludi, sahu, sidika } =
    req.body;

  try {
    const pegawai = await Pegawai.findOne({
      where: { id },
    });

    if (!pegawai) {
      return res.status(404).json({ msg: "Pegawai not found" });
    }

    // Only hash and update password if it is provided
    let hashedPassword;

    hashedPassword = pegawai.password;
    console.log("data password dari databse : " + hashedPassword);
    
    
    if (password) {
      console.log("data password dari Body: " + hashedPassword);
      hashedPassword = await argon2.hash(password);
    }

    await pegawai.update({
      password: hashedPassword,
    });

    await HakAkses.update(
      {
        lapasi,
        pantai_disa,
        aksesahu,
        saria,
        paludi,
        sahu,
        sidika
      },
      { where: { id_pegawai: id } }
    );


    res.status(200).json({ msg: "Hak akses updated successfully" });
  } catch (error) {
    console.error("Failed to update hak akses:", error);
    res.status(500).json({ msg: "Failed to update hak akses" });
  }
};
