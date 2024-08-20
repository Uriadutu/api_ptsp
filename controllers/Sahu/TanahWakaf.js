import TanahWakaf from "../../models/SahuModels/TanahWakafModels.js";

// Get all Tanah Wakaf
export const getTanahWakaf = async (req, res) => {
  try {
    const tanahWakaf = await TanahWakaf.findAll();
    res.status(200).json(tanahWakaf);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Tanah Wakaf by ID
export const getTanahWakafById = async (req, res) => {
  try {
    const tanahWakaf = await TanahWakaf.findOne({
      where: { id: req.params.id },
    });
    if (!tanahWakaf)
      return res.status(404).json({ msg: "Tanah Wakaf not found" });
    res.status(200).json(tanahWakaf);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getTanahWakafByJenisTanah = async (req, res) => {
  try {
    const tanahWakaf = await TanahWakaf.findAll({
      where: { jenis_tanah: req.params.tanah },
    });
    if (!tanahWakaf)
      return res.status(404).json({ msg: "Tanah Wakaf not found" });
    res.status(200).json(tanahWakaf);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create Tanah Wakaf
export const createTanahWakaf = async (req, res) => {
  const { nama_kecamatan, jenis_wakaf, jenis_tanah, luas_tanah, jumlah_wakaf } =
    req.body;
  try {
    await TanahWakaf.create({
      nama_kecamatan,
      jenis_wakaf,
      jenis_tanah,
      luas_tanah,
      jumlah_wakaf,
    });
    res.status(201).json({ msg: "Tanah Wakaf created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Tanah Wakaf
export const updateTanahWakaf = async (req, res) => {
  const { nama_kecamatan, jenis_wakaf, jenis_tanah, luas_tanah, jumlah_wakaf } =
    req.body;
  try {
    const tanahWakaf = await TanahWakaf.findOne({
      where: { id: req.params.id },
    });
    if (!tanahWakaf)
      return res.status(404).json({ msg: "Tanah Wakaf not found" });
    await TanahWakaf.update(
      { nama_kecamatan, jenis_wakaf, jenis_tanah, luas_tanah, jumlah_wakaf },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: "Tanah Wakaf updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Tanah Wakaf
export const deleteTanahWakaf = async (req, res) => {
  try {
    const tanahWakaf = await TanahWakaf.findOne({
      where: { id: req.params.id },
    });
    if (!tanahWakaf)
      return res.status(404).json({ msg: "Tanah Wakaf not found" });
    await TanahWakaf.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Tanah Wakaf deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
