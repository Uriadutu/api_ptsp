import Majelis from "../../models/SariaModels/MajelisModels.js";

export const getMajelis = async (req, res) => {
  try {
    const response = await Majelis.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMajelisbyId = async (req, res) => {
  try {
    const response = await Majelis.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createMajelis = async (req, res) => {
  try {
    await Majelis.create(req.body);
    res.status(201).json({ msg: "Majelis berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateMajelis = async (req, res) => {
  try {
    await Majelis.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Majelis berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteMajelis = async (req, res) => {
  try {
    await Majelis.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Majelis berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
