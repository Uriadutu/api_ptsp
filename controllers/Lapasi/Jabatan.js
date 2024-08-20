import Jabatan from "../../models/LapasiModels/JabatanModels.js";

export const getJabatan = async (req, res) => {
    try {
      const jabatan = await Jabatan.findAll();
      res.status(200).json(jabatan);
    } catch (error) {
      res.status(404).json({ msg: "Tidak ada jabatan" });
    }
}

export const getJabatanById = async (req, res) => {
    try {
      const jabatan = await Jabatan.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(jabatan);
    } catch (error) {
      res.status(404).json({ msg: "Tidak ada jabatan" });
    }
}

export const createJabatan = async (req, res) => {
    const { kode_jabatan, nama_jabatan } = req.body;
    try {
      await Jabatan.create({ 
        kode_jabatan: kode_jabatan,
        nama_jabatan: nama_jabatan
      });
      res.status(200).json({ msg: "Dibuat" });
    } catch (error) {
      res.status(500).json({ msg: "Gagal" });
    }
}

export const updateJabatan = async (req, res) => {
    const { kode_jabatan, nama_jabatan } = req.body;
    try {
      await Jabatan.update({ 
        kode_jabatan: kode_jabatan,
        nama_jabatan: nama_jabatan
      }, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({ msg: "Diperbarui" });
    } catch (error) {
      res.status(500).json({ msg: "Gagal" });
    }
}

export const deleteJabatan = async (req, res) => {
    try {
      await Jabatan.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({ msg: "Dihapus" });
      console.log("sukses");
    } catch (error) {
      res.status(500).json({ msg: "Gagal" });
      console.log(error);
      
    }
}