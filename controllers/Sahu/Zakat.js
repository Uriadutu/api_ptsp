import Zakat from "../../models/SahuModels/ZakatModels.js";
import Kecamatan from "../../models/SahuModels/KecamatanModels.js";

// Get all Zakat entries
export const getAllZakat = async (req, res) => {
  try {
    const zakat = await Zakat.findAll({
      include: {
        model: Kecamatan,
        attributes: ["nama_kecamatan"], // Adjust according to actual field name
      },
    });
    res.json(zakat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Zakat by ID
export const getZakatById = async (req, res) => {
  try {
    const zakat = await Zakat.findByPk(req.params.id, {
      include: {
        model: Kecamatan,
        attributes: ["nama_kecamatan"],
      },
    });
    if (!zakat) {
      return res.status(404).json({ error: "Zakat not found" });
    }
    res.json(zakat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getZakatByKategori = async (req, res) => {
  try {
    const zakat = await Zakat.findAll({
      where: {
        kategori: req.params.kategori,
      },
    });
    if (!zakat) {
      return res.status(404).json({ error: "Zakat not found" });
    }
    res.json(zakat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new Zakat entry
export const createZakat = async (req, res) => {
  try {
    const {
      id_kecamatan,
      kategori,
      sumber,
      jumlah_sumber,
      jenis,
      beras,
      uang,
      nominal_uang,
      sedekah,
      jumlah_zakat,
      tahun_zakat
    } = req.body;
    const zakat = await Zakat.create({
      id_kecamatan,
      kategori,
      sumber,
      jumlah_sumber,
      jenis,
      beras,
      uang,
      nominal_uang,
      sedekah,
      jumlah_zakat,
      tahun_zakat
    });
    res.status(201).json(zakat);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

// Update Zakat entry
export const updateZakat = async (req, res) => {
  try {
    const {
      id_kecamatan,
      kategori,
      sumber,
      jumlah_sumber,
      jenis,
      sedekah,
      jumlah_zakat,
      tahun_zakat
    } = req.body;
    const zakat = await Zakat.findByPk(req.params.id);
    if (!zakat) {
      return res.status(404).json({ error: "Zakat not found" });
    }
    zakat.id_kecamatan = id_kecamatan;
    zakat.kategori = kategori;
    zakat.sumber = sumber;
    zakat.jumlah_sumber = jumlah_sumber;
    zakat.jenis = jenis;
    zakat.sedekah = sedekah;
    zakat.jumlah_zakat = jumlah_zakat;
    zakat.tahun_zakat = tahun_zakat;
    await zakat.save();
    res.json(zakat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Zakat entry
export const deleteZakat = async (req, res) => {
  try {
    const zakat = await Zakat.findByPk(req.params.id);
    if (!zakat) {
      return res.status(404).json({ error: "Zakat not found" });
    }
    await zakat.destroy();
    res.json({ message: "Zakat deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
