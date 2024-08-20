import DokumenSekolah from "../../models/DisaModels/DokumenSekolahModels.js";
import Sekolah from "../../models/DisaModels/SekolahModels.js";
import fs from "fs";
import path from "path";


export const getSekolah = async (req, res) => {
   try {
    const response = await Sekolah.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data sekolah tidak ditemukan" });
  }
};

export const getSekolahbyId = async (req, res) => {
   try {
    const response = await Sekolah.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data sekolah tidak ditemukan" });
  }
};
export const getSekolahbyStatus = async (req, res) => {
  try {
    const response = await Sekolah.findAll({
      where: {
        status_sekolah: req.params.status,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data sekolah tidak ditemukan" });
  }
};


export const getJumlahSekolah = async (req, res) => {
  try {
    const response = await Sekolah.findAll({
      where: {
        jenjang_sekolah: req.params.sekolah,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data sekolah tidak ditemukan" });
  }
};
export const getSekolahByNama = async (req, res) => {
  try {
    const response = await Sekolah.findOne({
      where: {
        nama_sekolah: req.params.nama,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data sekolah tidak ditemukan" });
  }
};


export const createSekolah = async (req, res) => {
  const {
    nama_sekolah,
    jenjang_sekolah,
    status_sekolah,
    nss,
    alamat,
    no_telp,
    tahun_berdiri,
    status_akreditasi,
    status_bangunan,
    sk_izin,
    req_pendirian,
    jumlah_rombel,
    nama_kepsek,
    nip_kepsek,
  } = req.body;

  //   console.log(req.body); // Log data received in backend

  try {
    await Sekolah.create({
      nama_sekolah: nama_sekolah,
      jenjang_sekolah:  jenjang_sekolah,
      status_sekolah:  jenjang_sekolah + status_sekolah,
      s_sekolah:  status_sekolah,
      nss: nss,
      alamat: alamat,
      no_telp: no_telp,
      tahun_berdiri: tahun_berdiri,
      status_akreditasi: status_akreditasi,
      status_bangunan: status_bangunan,
      sk_izin : sk_izin,
      req_pendirian: req_pendirian,
      jumlah_rombel: jumlah_rombel,
      nama_kepsek: nama_kepsek,
      nip_kepsek: nip_kepsek,
    });
    res.status(200).json({ msg: "Data sekolah berhasil ditambah" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data sekolah gagal ditambah" });
  }
};

export const updateSekolah = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteSekolah = async (req, res) => {
  try {
    const dokumen = await DokumenSekolah.findAll({
      where: { id_sekolah: req.params.id },
    });

    const sekolah = await Sekolah.findOne({
      where: { id: req.params.id },
    });

    if (!sekolah)
      return res.status(404).json({ message: "sekolah not found" });

    if (dokumen.length) {
      dokumen.forEach((doc) => {
        const skIzin = path.resolve(
          `./public/dokumensekolah/disa/${doc.sk_izin_file}`
        );
        const noReg = path.resolve(
          `./public/dokumensekolah/disa/${doc.no_reg_file}`
        );
        const Akreditasi = path.resolve(
          `./public/dokumensekolah/disa/${doc.akreditasi_file}`
        );
        const Nss = path.resolve(
          `./public/dokumensekolah/disa/${doc.nss_file}`
        );
        const sertiTanah = path.resolve(
          `./public/dokumensekolah/disa/${doc.serti_tanah_file}`
        );

        if (fs.existsSync(skIzin)) fs.unlinkSync(skIzin);
        if (fs.existsSync(noReg)) fs.unlinkSync(noReg);
        if (fs.existsSync(Akreditasi)) fs.unlinkSync(Akreditasi);
        if (fs.existsSync(Nss)) fs.unlinkSync(Nss);
        if (fs.existsSync(sertiTanah)) fs.unlinkSync(sertiTanah);
      });

      await DokumenSekolah.destroy({
        where: { id_sekolah: req.params.id },
      });
    }

    await sekolah.destroy();

    res.json({ message: "sekolah deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error("Error deleting sekolah:", error);
  }
};
