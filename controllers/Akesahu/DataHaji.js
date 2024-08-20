import Haji from "../../models/AkesahuModels/DataHajiModels.js";
import { Sequelize } from "sequelize";
// Mendapatkan semua data Haji
export const getHaji = async (req, res) => {
  try {
    const response = await Haji.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

// Mendapatkan data Haji berdasarkan ID
export const getHajibyId = async (req, res) => {
  try {
    const response = await Haji.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

export const getHajibyTanggal = async (req, res) => {
  try {
    const response = await Haji.findAll({
      where: {
        tgl_berangkat: req.params.tgl,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};
export const getHajiStatusByYear = async (req, res) => {
  try {
    const result = await Haji.findAll({
      attributes: [
        "tahun_berangkat",
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              'CASE WHEN status_keberangkatan = "Berangkat" THEN 1 ELSE 0 END'
            )
          ),
          "jumlah_berangkat",
        ],
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              'CASE WHEN status_keberangkatan = "Batal Berangkat" THEN 1 ELSE 0 END'
            )
          ),
          "jumlah_batal",
        ],
      ],
      group: "tahun_berangkat",
      order: ["tahun_berangkat"],
    });

    res.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Server error");
  }
};



export const getJumlahHajiBerangkat = async (req, res) => {
  try {
    const response = await Haji.findAll({
      where: {
        status_keberangkatan: req.params.berangkat,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

export const getHajibyPorsi = async (req, res) => {
  try {
    const response = await Haji.findOne({
      where: {
        nomor_porsi: req.params.porsi,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

// Membuat data Haji baru
export const createHaji = async (req, res) => {
  const {
    nomor_porsi,
    tanggal_porsi,
    nama_jamaah,
    jenis_kelamin,
    pekerjaan,
    tempat_lahir,
    tanggal_lahir,
    nama_desa,
    kecamatan,
    bank,
    status_keberangkatan,
    tgl_berangkat,
    tahun_berangkat,
  } = req.body;

  try {
    await Haji.create({
      id: nomor_porsi,
      nomor_porsi,
      tanggal_porsi,
      nama_jamaah,
      jenis_kelamin,
      pekerjaan,
      tempat_lahir,
      tanggal_lahir,
      nama_desa,
      kecamatan,
      bank,
      status_keberangkatan: "-",
      tgl_berangkat: "-",
      tahun_berangkat: "-",
    });
    res.status(200).json({ msg: "Data Haji berhasil ditambah" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data Haji gagal ditambah" });
  }
};

// Mengupdate data Haji berdasarkan ID
export const updateHaji = async (req, res) => {
  const {
    nomor_porsi,
    tanggal_porsi,
    nama_jamaah,
    jenis_kelamin,
    pekerjaan,
    tempat_lahir,
    tanggal_lahir,
    nama_desa,
    kecamatan,
    bank,
    status_keberangkatan,
    tgl_berangkat,
    tahun_berangkat,
  } = req.body;

  try {
    const haji = await Haji.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!haji) {
      return res.status(404).json({ msg: "Data Haji tidak ditemukan" });
    }

    await haji.update({
      nomor_porsi,
      tanggal_porsi,
      nama_jamaah,
      jenis_kelamin,
      pekerjaan,
      tempat_lahir,
      tanggal_lahir,
      nama_desa,
      kecamatan,
      bank,
      status_keberangkatan,
      tgl_berangkat,
      tahun_berangkat: tgl_berangkat.silce(0, 4),
    });

    res.status(200).json({ msg: "Data Haji berhasil diupdate" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data Haji gagal diupdate" });
  }
};
export const berangkatHaji = async (req, res) => {
  const { tgl_berangkat, status_keberangkatan } = req.body;
  try {
    const berangkat = await Haji.findOne({
      where: {
        nomor_porsi: req.params.id,
      },
    });

    if (!berangkat) {
      return res.status(404).json({ msg: "Data Haji tidak ditemukan" });
    }

    // Update tgl_berangkat menjadi tanggal hari ini jika status_keberangkatan adalah "Batal Berangkat"
    let updatedTglBerangkat = tgl_berangkat;
    let tahunBerangkat = null;

    if (status_keberangkatan === "Batal Berangkat") {
      updatedTglBerangkat = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
      tahunBerangkat = updatedTglBerangkat.slice(0, 4); // Ambil tahun dari tanggal
    } else {
      tahunBerangkat =
        tgl_berangkat && tgl_berangkat !== "-"
          ? tgl_berangkat.slice(0, 4)
          : null;
    }

    // Update data haji
    await berangkat.update({
      status_keberangkatan,
      tgl_berangkat: updatedTglBerangkat,
      tahun_berangkat: tahunBerangkat,
    });

    res.status(200).json({ msg: "Data Berhasil Diupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


// Menghapus data Haji berdasarkan ID
export const deleteHaji = async (req, res) => {
  try {
    const haji = await Haji.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!haji) {
      return res.status(404).json({ msg: "Data Haji tidak ditemukan" });
    }

    await haji.destroy();
    res.status(200).json({ msg: "Data Haji berhasil dihapus" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data Haji gagal dihapus" });
  }
};
