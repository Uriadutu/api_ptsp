import path from "path";
import DokumenSekolahKristen from "../../models/PaludiModels/DokumenSekolahKristenModels.js";
import fs from "fs";

// Get all DokumenSekolah
export const getAllDokumenSekolah = async (req, res) => {
  try {
    const dokumen = await DokumenSekolahKristen.findAll({
      where: {
        id_sekolah: req.params.id,
      },
    });
    res.status(200).json(dokumen);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get DokumenSekolah by ID
export const getDokumenSekolahById = async (req, res) => {
  try {
    const dokumen = await DokumenSekolahKristen.findByPk(req.params.id);
    if (!dokumen) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json(dokumen);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create DokumenSekolah
export const createDokumenSekolah = async (req, res) => {
  try {
    if (
      !req.files ||
      !req.files.sk_izin_file ||
      !req.files.no_reg_file ||
      !req.files.akreditasi_file ||
      !req.files.nss_file ||
      !req.files.serti_tanah_file
    ) {
      return res.status(400).json({ msg: "Tidak Ada File Dipilih" });
    }

    const fileSkIzin = req.files.sk_izin_file;
    const fileNoReg = req.files.no_reg_file;
    const fileAkreditasi = req.files.akreditasi_file;
    const fileNss = req.files.nss_file;
    const fileSertiTanah = req.files.serti_tanah_file;

    // Generate unique file names
    const namaSkIzin = `${fileSkIzin.name}`;
    const namaNoReg = `${fileNoReg.name}`;
    const namaAkreditasi = `${fileAkreditasi.name}`;
    const namaNss = `${fileNss.name}`;
    const namaSertiTanah = `${fileSertiTanah.name}`;

    const urlSkIzin = `${req.protocol}://${req.get(
      "host"
    )}/dokumensekolah/paludi/${namaSkIzin}`;
    const urlNoReg = `${req.protocol}://${req.get(
      "host"
    )}/dokumensekolah/paludi/${namaNoReg}`;
    const urlAkreditasi = `${req.protocol}://${req.get(
      "host"
    )}/dokumensekolah/paludi/${namaAkreditasi}`;
    const urlNss = `${req.protocol}://${req.get(
      "host"
    )}/dokumensekolah/paludi/${namaNss}`;
    const urlSertiTanah = `${req.protocol}://${req.get(
      "host"
    )}/dokumensekolah/paludi/${namaSertiTanah}`;

    // Move files to the upload directory
    fileSkIzin.mv(`./public/dokumensekolah/paludi/${namaSkIzin}`);
    fileNoReg.mv(`./public/dokumensekolah/paludi/${namaNoReg}`);
    fileAkreditasi.mv(`./public/dokumensekolah/paludi/${namaAkreditasi}`);
    fileNss.mv(`./public/dokumensekolah/paludi/${namaNss}`);
    fileSertiTanah.mv(`./public/dokumensekolah/paludi/${namaSertiTanah}`);

    await DokumenSekolahKristen.create({
      id_sekolah: req.body.id_sekolah,
      sk_izin_file: namaSkIzin,
      sk_izin_url: urlSkIzin,
      no_reg_file: namaNoReg,
      no_reg_url: urlNoReg,
      akreditasi_file: namaAkreditasi,
      akreditasi_url: urlAkreditasi,
      nss_file: namaNss,
      nss_url: urlNss,
      serti_tanah_file: namaSertiTanah,
      serti_tanah_url: urlSertiTanah,
    });

    res.status(201).json({ msg: "Dokumen Sekolah Berhasil Dibuat" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Gagal Membuat Dokumen Sekolah" });
  }
};

// Update DokumenSekolah
export const updateDokumenSekolah = async (req, res) => {
  const dokumen = await DokumenSekolahKristen.findByPk(req.params.id);
  if (!dokumen) return res.status(404).json({ msg: "Data tidak ditemukan" });

  const {
    id_sekolah,
    sk_izin_file,
    sk_izin_url,
    no_reg_file,
    no_reg_url,
    akreditasi_file,
    akreditasi_url,
    nss_file,
    nss_url,
    serti_tanah_file,
    serti_tanah_url,
  } = req.body;

  if (req.files && req.files.file) {
    const files = req.files.file;
    const allowedTypes = [".pdf"];
    let uploadedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileSize = file.size;
      const ext = path.extname(file.name);
      const fileName = path.basename(file.name, ext);
      const uniqueFileName = `${fileName}${ext}`;
      const url = `${req.protocol}://${req.get(
        "host"
      )}/dokumensekolah/paludi/${uniqueFileName}`;

      if (fileSize > 5000000) {
        return res.status(422).json({ msg: "File Tidak Bisa Lebih Dari 5 MB" });
      }

      if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(400).json({ msg: "File Tidak Valid" });
      }

      file.mv(
        `../.../../public/dokumensekolah/paludi/${uniqueFileName}`,
        async (err) => {
          if (err) {
            return res.status(500).json({ msg: err.message });
          } else {
            uploadedFiles.push({
              file: uniqueFileName,
              url: url,
            });
          }
        }
      );
    }

    try {
      fs.unlinkSync(`../.../../public/dokumensekolah/paludi/${dokumen.file}`);
      await DokumenSekolahKristen.update(
        {
          id_sekolah,
          sk_izin_file:
            uploadedFiles.find((file) => file.file.includes("sk_izin"))?.file ||
            sk_izin_file,
          sk_izin_url,
          no_reg_file:
            uploadedFiles.find((file) => file.file.includes("no_reg"))?.file ||
            no_reg_file,
          no_reg_url,
          akreditasi_file:
            uploadedFiles.find((file) => file.file.includes("akreditasi"))
              ?.file || akreditasi_file,
          akreditasi_url,
          nss_file:
            uploadedFiles.find((file) => file.file.includes("nss"))?.file ||
            nss_file,
          nss_url,
          serti_tanah_file:
            uploadedFiles.find((file) => file.file.includes("serti_tanah"))
              ?.file || serti_tanah_file,
          serti_tanah_url,
          file: uploadedFiles.map((file) => file.file).join(", "),
          url: uploadedFiles.map((file) => file.url).join(", "),
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ msg: "Data Berhasil Diperbarui" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  } else {
    try {
      await DokumenSekolahKristen.update(
        {
          id_sekolah,
          sk_izin_file,
          sk_izin_url,
          no_reg_file,
          no_reg_url,
          akreditasi_file,
          akreditasi_url,
          nss_file,
          nss_url,
          serti_tanah_file,
          serti_tanah_url,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ msg: "Data Berhasil Diperbarui" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
};

// Delete DokumenSekolah
export const deleteDokumenSekolah = async (req, res) => {
  const dokumen = await DokumenSekolahKristen.findOne({
    where: { id: req.params.id },
  });
  if (!dokumen) return res.status(404).json({ msg: "Data tidak ditemukan" });
  try {
    const skIzin = `./public/dokumensekolah/paludi/${dokumen.sk_izin_file}`;
    const noReg = `./public/dokumensekolah/paludi/${dokumen.no_reg_file}`;
    const Akreditasi = `./public/dokumensekolah/paludi/${dokumen.akreditasi_file}`;
    const Nss = `./public/dokumensekolah/paludi/${dokumen.nss_file}`;
    const sertiTanah = `./public/dokumensekolah/paludi/${dokumen.serti_tanah_file}`;
    fs.unlinkSync(skIzin);
    fs.unlinkSync(noReg);
    fs.unlinkSync(Akreditasi);
    fs.unlinkSync(Nss);
    fs.unlinkSync(sertiTanah);
    await dokumen.destroy();
    res.status(200).json({ msg: "Data Berhasil Dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
