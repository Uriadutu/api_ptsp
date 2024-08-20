import DokumenSekolahKristen from "../../models/PaludiModels/DokumenSekolahKristenModels.js";
import SekolahKristen from "../../models/PaludiModels/SekolahKristenModel.js";
import fs from "fs";
import path from "path";

// Get all SekolahKristen
export const getSekolahKristens = async (req, res) => {
  try {
    const sekolahKristens = await SekolahKristen.findAll();
    res.json(sekolahKristens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get SekolahKristen by ID
export const getSekolahKristenById = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.findOne({ where : { id: req.params.id}});
    if (!sekolahKristen) return res.status(404).json({ message: "SekolahKristen not found" });
    res.json(sekolahKristen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSekolahKristenByNama = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.findOne({ where : { nama_sekolah: req.params.nama}});
    if (!sekolahKristen) return res.status(404).json({ message: "SekolahKristen not found" });
    res.json(sekolahKristen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getSekolahKristenByStatus = async (req, res) => {
  try {
    const response = await SekolahKristen.findAll({
      where : {
        status_sekolah : req.params.status
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJumlahSekolah = async (req, res) => {
  try {
    const response = await SekolahKristen.findAll({
      where: {
        jenjang_sekolah: req.params.sekolah,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data sekolah tidak ditemukan" });
  }
};

// Create new SekolahKristen
export const createSekolahKristen = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.create(req.body);
    res.status(201).json(sekolahKristen);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

// Update SekolahKristen by ID
export const updateSekolahKristen = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.findByPk(req.params.id);
    if (!sekolahKristen) return res.status(404).json({ message: "SekolahKristen not found" });
    await sekolahKristen.update(req.body);
    res.json(sekolahKristen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete SekolahKristen by ID
export const deleteSekolahKristen = async (req, res) => {
  try {
    const dokumen = await DokumenSekolahKristen.findAll({
      where: { id_sekolah: req.params.id },
    });

    const sekolahKristen = await SekolahKristen.findOne({
      where: { id: req.params.id },
    });

    if (!sekolahKristen)
      return res.status(404).json({ message: "SekolahKristen not found" });

    if (dokumen.length) {
      dokumen.forEach((doc) => {
        const skIzin = path.resolve(`./public/dokumensekolah/paludi/${doc.sk_izin_file}`);
        const noReg = path.resolve(`./public/dokumensekolah/paludi/${doc.no_reg_file}`);
        const Akreditasi = path.resolve(`./public/dokumensekolah/paludi/${doc.akreditasi_file}`);
        const Nss = path.resolve(`./public/dokumensekolah/paludi/${doc.nss_file}`);
        const sertiTanah = path.resolve(`./public/dokumensekolah/paludi/${doc.serti_tanah_file}`);

        if (fs.existsSync(skIzin)) fs.unlinkSync(skIzin);
        if (fs.existsSync(noReg)) fs.unlinkSync(noReg);
        if (fs.existsSync(Akreditasi)) fs.unlinkSync(Akreditasi);
        if (fs.existsSync(Nss)) fs.unlinkSync(Nss);
        if (fs.existsSync(sertiTanah)) fs.unlinkSync(sertiTanah);
      });

      await DokumenSekolahKristen.destroy({
        where: { id_sekolah: req.params.id },
      });
    }

    await sekolahKristen.destroy();

    res.json({ message: "SekolahKristen deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error("Error deleting SekolahKristen:", error);
  }
};
