import Siswa from "../../models/DisaModels/SiswaModels.js";
import Sekolah from "../../models/DisaModels/SekolahModels.js";


export const getSiswa = async (req, res) => {
  try {
    const response = await Siswa.findAll({
      include : [{
        model : Sekolah
      }]
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data tidak ditemukan" });
  }
};

export const getSiswaById = async (req, res) => {
  try {
    const response = await Siswa.findOne({
      where: {
        id: req.params.id,
      },
      include : [{
        model : Sekolah
      }]
    
    });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ msg: "Data tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const getSiswaBySekolah = async (req, res) => {
  try {
    const response = await Siswa.findAll({
      where: {
        id_sekolah: req.params.id,
      },
      include : [{
        model : Sekolah
      }]
    
    });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ msg: "Data tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createSiswa = async (req, res) => {
  try {
    const {
      id_sekolah,
      tahun_ajaran,
      jenjang_sekolah,
      nomor_induk,
      NISN,
      nama_siswa,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      agama,
      nama_ayah,
      pendidikan_ayah,
      pekerjaan_ayah,
      nama_ibu,
      pendidikan_ibu,
      pekerjaan_ibu,
      alamat,
    } = req.body;
    const response = await Siswa.create({
      id_sekolah,
      tahun_ajaran,
      jenjang_sekolah,
      nomor_induk,
      NISN,
      nama_siswa,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      agama,
      nama_ayah,
      pendidikan_ayah,
      pekerjaan_ayah,
      nama_ibu,
      pendidikan_ibu,
      pekerjaan_ibu,
      alamat
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateSiswa = async (req, res) => {
  try {
    const siswa = await Siswa.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (siswa) {
      const {
        id_sekolah,
        tahun_ajaran,
        jenjang_sekolah,
        nomor_induk,
        NISN,
        nama_siswa,
        jenis_kelamin,
        tempat_lahir,
        tanggal_lahir,
        agama,
        nama_ayah,
        pendidikan_ayah,
        pekerjaan_ayah,
        nama_ibu,
        pendidikan_ibu,
        pekerjaan_ibu,
        alamat
      } = req.body;
      await siswa.update({
        id_sekolah,
        tahun_ajaran,
        jenjang_sekolah,
        nomor_induk,
        NISN,
        nama_siswa,
        jenis_kelamin,
        tempat_lahir,
        tanggal_lahir,
        agama,
        nama_ayah,
        pendidikan_ayah,
        pekerjaan_ayah,
        nama_ibu,
        pendidikan_ibu,
        pekerjaan_ibu,
        alamat
      });
      res.status(200).json(siswa);
    } else {
      res.status(404).json({ msg: "Data tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteSiswa = async (req, res) => {
  try {
    const siswa = await Siswa.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (siswa) {
      await siswa.destroy();
      res.status(200).json({ msg: "Data berhasil dihapus" });
    } else {
      res.status(404).json({ msg: "Data tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
