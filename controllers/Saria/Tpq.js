import Tpq from "../../models/SariaModels/TpqModels.js";
import Kecamatan from "../../models/SahuModels/KecamatanModels.js";

// Get All TPQ
export const getAllTpg = async (req, res) => {
  try {
    const tpg = await Tpq.findAll({
        include : {
            model : Kecamatan
        }
    });
    res.json(tpg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get TPQ by ID
export const getTpgById = async (req, res) => {
  try {
    const tpg = await Tpq.findOne({
      where: { id: req.params.id },
      include: {
        model: Kecamatan,
      },
    });
    if (tpg) {
      res.json(tpg);
    } else {
      res.status(404).json({ message: "TPQ tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create TPQ
export const createTpg = async (req, res) => {
  try {
    await Tpq.create(req.body);
    res.json({ message: "TPQ berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update TPQ
export const updateTpg = async (req, res) => {
  try {
    const tpg = await Tpq.findOne({
      where: { id: req.params.id },
    });
    if (tpg) {
      await Tpg.update(req.body, { where: { id: req.params.id } });
      res.json({ message: "TPQ berhasil diperbarui" });
    } else {
      res.status(404).json({ message: "TPQ tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete TPQ
export const deleteTpg = async (req, res) => {
  try {
    const tpq = await Tpq.findOne({
      where: { id: req.params.id },
    });
    if (tpq) {
      await tpq.destroy();
      res.json({ message: "TPQ berhasil dihapus" });
    } else {
      res.status(404).json({ message: "TPQ tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};