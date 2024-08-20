import HakAkses from "../../models/HakAksesModel.js";
import Pegawai from "../../models/LapasiModels/PegawaiModels.js";

export const getPegawai = async (req, res) => {
  try {
    const pegawai = await Pegawai.findAll();
    res.status(200).json(pegawai);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada pegawai" });
  }
};

export const getPegawaiById = async (req, res) => {
  try {
    const pegawai = await Pegawai.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "UUID",
        "NIP",
        "nama_pegawai",
        "jenis_pegawai",
        "pangkat_gol",
        "jabatan",
        "tmt_terakhir",
        "tmt_pengangkatan",
        "tmt_pensiun",
        "pend_terakhir",
        "jurusan",
        "tahun_lulus",
        "jenis_kelamin",
        "temp_lahir",
        "tgl_lahir",
        "agama",
        "satuan_kerja",
      ],
    });
    res.status(200).json(pegawai);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada pegawai" });
  }
};

export const createPegawai = async (req, res) => {
  const {
    NIP,
    jenis_pegawai,
    nama_pegawai,
    pangkat_gol,
    jabatan,
    tmt_terakhir,
    tmt_pengangkatan,
    tmt_pensiun,
    pend_terakhir,
    jurusan,
    tahun_lulus,
    jenis_kelamin,
    temp_lahir,
    tgl_lahir,
    agama,
    satuan_kerja,
  } = req.body;
  

  try {
     const exgPegawai = await Pegawai.findOne({
      where: { NIP },
    });

     if (exgPegawai) {
      return res
        .status(400)
        .json({ msg: `NIP sudah ada.` });
    }


    const pegawai = await Pegawai.create({
      id: NIP,
      NIP: NIP,
      jenis_pegawai: jenis_pegawai,
      nama_pegawai: nama_pegawai,
      pangkat_gol: pangkat_gol,
      jabatan: jabatan,
      tmt_terakhir: tmt_terakhir,
      tmt_pengangkatan: tmt_pengangkatan,
      tmt_pensiun: tmt_pensiun,
      pend_terakhir: pend_terakhir,
      jurusan: jurusan,
      tahun_lulus: tahun_lulus,
      jenis_kelamin: jenis_kelamin,
      temp_lahir: temp_lahir,
      tgl_lahir: tgl_lahir,
      agama: agama,
      satuan_kerja: satuan_kerja,
    });

    
    await HakAkses.create({
      id_pegawai: pegawai.id,
    });



    res.status(201).json({ msg: "Pegawai ditambahkan" });
  } catch (error) {
    res.status(400).json({ msg: "Gagal" });
    console.log(error);
  }
};

export const updatePegawai = async (req, res) => {
  try {
    const pegawai = await Pegawai.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!pegawai) {
      return res.status(404).json({ msg: "Pegawai tidak ditemukan" });
    }

    await Pegawai.update(
      {
        NIP: req.body.NIP,
        jenis_pegawai: req.body.jenis_pegawai,
        nama_pegawai: req.body.nama_pegawai,
        pangkat_gol: req.body.pangkat_gol,
        jabatan: req.body.jabatan,
        tmt_terakhir: req.body.tmt_terakhir,
        tmt_pengangkatan: req.body.tmt_pengangkatan,
        tmt_pensiun: req.body.tmt_pensiun,
        pend_terakhir: req.body.pend_terakhir,
        jurusan: req.body.jurusan,
        tahun_lulus: req.body.tahun_lulus,
        jenis_kelamin: req.body.jenis_kelamin,
        temp_lahir: req.body.temp_lahir,
        tgl_lahir: req.body.tgl_lahir,
        agama: req.body.agama,
        satuan_kerja: req.body.satuan_kerja,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Pegawai diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error);
  }
};

export const deletePegawai = async (req, res) => {
  try {
    const pegawai = await Pegawai.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!pegawai) {
      return res.status(404).json({ msg: "Pegawai tidak ditemukan" });
    }

    const hakAkses = await HakAkses.findOne({
      where: {
        id_pegawai: pegawai.id,
      },
    });

    if (hakAkses) {
      await hakAkses.destroy();
    }

    await pegawai.destroy();

    res.status(200).json({ msg: "Pegawai dan hak akses dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
