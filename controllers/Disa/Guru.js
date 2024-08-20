import Guru from "../../models/DisaModels/GuruModels.js";
import Sekolah from "../../models/DisaModels/SekolahModels.js";

export const getGuru = async (req, res) => {
  try {
    const guru = await Guru.findAll({
      include: [
        {
          model: Sekolah,
        },
      ],
    });
    res.status(200).json(guru);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada guru" });
  }
};

export const getGurubyId = async (req, res) => {
  try {
    const guru = await Guru.findOne({
      where: {
        id: req.params.id,
      }, 
      include : [{
        model :Sekolah
      }]
    });
    res.status(200).json(guru);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada guru" });
  }
};
export const getGurubySekolah = async (req, res) => {
  try {
    const guru = await Guru.findAll({
      where: {
        id_sekolah: req.params.id,
      },
      include : [{
        model : Sekolah
      }]
    
    });
    res.status(200).json(guru);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada guru" });
  }
};

export const createGuru = async (req, res) => {
  const {
    id_sekolah,
    NIP,
    nama_guru,
    status_pegawai,
    kategori_guru,
    jenis_guru,
    pangkat,
    jabatan,
    tgl_mulai,
    tempat_lahir,
    tanggal_lahir,
    jenis_kelamin,
    agama,
    pendidikan_terakhir,
    juruan,
    tahun_lulus,
    no_telp,
    email,
  } = req.body;
  try {
    await Guru.create({
      id_sekolah,
      NIP,
      nama_guru,
      status_pegawai,
      kategori_guru,
      jenis_guru,
      pangkat,
      jabatan,
      tgl_mulai,
      tempat_lahir,
      tanggal_lahir,
      jenis_kelamin,
      agama,
      pendidikan_terakhir,
      juruan,
      tahun_lulus,
      no_telp,
      email,
    });
    res.status(201).json({ msg: "Data guru berhasil ditambahkan" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateGuru = async (req, res) => {
  try {
     const guru = await Guru.findOne({
       where: {
         id: req.params.id,
       },
     });
     await guru.update(req.body);

     res.status(200).json({msg : "sukses"});
  } catch (error) {
    console.log(error);
    
  }
};

export const deleteGuru = async (req, res) => {
  try {
  } catch (error) {}
};
