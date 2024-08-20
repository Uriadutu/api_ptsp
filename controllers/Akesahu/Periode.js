import PeriodeHaji from "../../models/AkesahuModels/PeriodeModels.js";

export const getPeriodeHaji = async (req, res) => {
  try {
    const periodeHaji = await PeriodeHaji.findAll();
    res.json(periodeHaji);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPeriodeHaji = async (req, res) => {
  try {
    const { tanggal, jumlah_jamaah } = req.body;
    await PeriodeHaji.create({ tanggal, jumlah_jamaah });
    res.status(201).json("berhasil");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePeriodeHaji = async (req, res) => {
  try {
    const periode = await PeriodeHaji.findOne({ where: { id: req.params.id } });
    await periode.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
