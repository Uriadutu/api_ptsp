import SuratKeluar from "../models/SuratKeluarModels.js";
import path from "path"
import fs from "fs"

export const getSuratKeluar = async (req, res) => {
  try {
    try {
      const response = await SuratKeluar.findAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ msg: "Tidak ada jabatan" });
    }
  } catch (error) {}
};

export const getSuratKeluarbyId = async (req, res) => {

    try {
      const response = await SuratKeluar.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ msg: "Tidak ada jabatan" });
    }
};

export const getSuratKeluarbySub = async (req, res) => {
  try {
    const response = await SuratKeluar.findAll({
      where: {
        fitur_surat: req.params.sub,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada jabatan" });
  }
};

export const createSuratKeluar = async(req, res) => {
  const {fitur_surat, kode_surat, sifat_surat, perihal_surat, asal_surat, kepada, tempat, tanggal, pejabat} = req.body;

   if (!req.files || !req.files.file) {
     return res.status(400).json({ msg: "Tidak Ada File Dipilih" });
   }

   const file = req.files.file;
   const fileSize = file.size;
   const ext = path.extname(file.name);

   if (fileSize > 5000000) {
     return res.status(422).json({ msg: "File Tidak Bisa Lebih Dari 5 MB" });
   }

   const timestamp = new Date().getTime(); // Waktu saat ini sebagai timestamp
   const uniqueFileName = `${timestamp}_${file.md5}${ext}`; // Menggabungkan timestamp dan nama file yang unik
   const url = `${req.protocol}://${req.get(
     "host"
   )}/${fitur_surat}/${uniqueFileName}`;

   file.mv(`./public/${fitur_surat}/${uniqueFileName}`, async (err) => {
     if (err) {
       return res.status(500).json({ msg: err.message });
     } else {
       try {
         await SuratKeluar.create({
           fitur_surat: fitur_surat,
           kode_surat: kode_surat,
           sifat_surat: sifat_surat,
           perihal_surat: perihal_surat,
           asal_surat: asal_surat,
           kepada: kepada,
           tempat: tempat,
           tanggal: tanggal,
           pejabat: pejabat,
           file: uniqueFileName,
           url: url,
         });
         res.status(200).json({ msg: "File Berhasil Terupload" });
       } catch (error) {
         res.status(404).json({ msg: "File Gagal Terupload" });
         console.log(error.message);
       }
     }
   });
}

export const updateSuratKeluar = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteSuratKeluar = async(req, res) => {
   const response = await SuratKeluar.findOne({
     where: {
       id: req.params.id,
     },
   });
   if (!response) return res.status(404).json({ msg: "No Data Found" });

   try {
     const filepath = `./public/${response.fitur_surat}/${response.file}`;
     fs.unlinkSync(filepath);
     await response.destroy();
     res.status(200).json({ msg: "Lisensi Deleted Successfuly" });
   } catch (error) {
     console.log(error.message);
   }
}