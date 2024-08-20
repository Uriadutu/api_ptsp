import GuruPak from "../../models/PaludiModels/GuruPakModels.js";
import SekolahKristen from "../../models/PaludiModels/SekolahKristenModel.js";
// Get all GuruPak
export const getAllGuruPak = async (req, res) => {
  try {
    const guruPak = await GuruPak.findAll({
      include: [{ model: SekolahKristen }],
    });
    res.status(200).json(guruPak);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get GuruPak by ID
export const getGuruPakById = async (req, res) => {
  try {
    const guruPak = await GuruPak.findOne({
      where: { id: req.params.id },
      include: [{model : SekolahKristen}],
    });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    res.status(200).json(guruPak);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getGuruPakBySekolah = async (req, res) => {
  try {
    const guruPak = await GuruPak.findAll({
      where: { id_sekolah: req.params.id },
    });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    res.status(200).json(guruPak);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getGuruPakByJenjang = async (req, res) => {
  try {
    const guruPak = await GuruPak.findAll({
      where: { jenjang: req.params.jenjang },
    });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    res.status(200).json(guruPak);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create GuruPak
export const createGuruPak = async (req, res) => {
  const {
    id_sekolah,
    jenjang,
    status_pegawai,
    kategori_guru,
    jenis_guru,
    nama_guru,
    nip_guru,
    pangkat_gol,
    jabatan,
    tgl_mulai_kerja,
    tempat_lahir,
    tanggal_lahir,
    jenis_kelamin,
    pendidikan_terakhir,
    jurusan,
    tahun_lulus,
    no_telp,
    email,
  } = req.body;
  try {
    await GuruPak.create({
      id_sekolah,
      jenjang,
      status_pegawai,
      kategori_guru,
      jenis_guru,
      nama_guru,
      nip_guru,
      pangkat_gol,
      jabatan,
      tgl_mulai_kerja,
      tempat_lahir,
      tanggal_lahir,
      jenis_kelamin,
      pendidikan_terakhir,
      jurusan,
      tahun_lulus,
      no_telp,
      email,
    });
    res.status(201).json({ msg: "GuruPak created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

// Update GuruPak
export const updateGuruPak = async (req, res) => {
  try {
    const guruPak = await GuruPak.findOne({ where: { id: req.params.id } });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    await GuruPak.update(
      {
        id_sekolah: req.body.id_sekolah,
        jenjang: req.body.jenjang,
        status_pegawai: req.body.status_pegawai,
        kategori_guru: req.body.kategori_guru,
        jenis_guru: req.body.jenis_guru,
        nama_guru: req.body.nama_guru,
        nip_guru: req.body.nip_guru,
        pangkat_gol: req.body.pangkat_gol,
        jabatan: req.body.jabatan,
        tgl_mulai_kerja: req.body.tgl_mulai_kerja,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        pendidikan_terakhir: req.body.pendidikan_terakhir,
        jurusan: req.body.jurusan,
        tahun_lulus: req.body.tahun_lulus,
        no_telp: req.body.no_telp,
        email: req.body.email,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: "GuruPak updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

// Delete GuruPak
export const deleteGuruPak = async (req, res) => {
  try {
    const guruPak = await GuruPak.findOne({ where: { id: req.params.id } });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    await GuruPak.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "GuruPak deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
