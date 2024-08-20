import DataUmatKristen from "../../models/PaludiModels/UmatKristenModels.js";

// Get all DataUmatKristen
export const getDataUmatKristens = async (req, res) => {
  try {
    const dataUmatKristens = await DataUmatKristen.findAll();
    res.json(dataUmatKristens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get DataUmatKristen by ID
export const getDataUmatKristenById = async (req, res) => {
  try {
    const dataUmatKristen = await DataUmatKristen.findByPk(req.params.id);
    if (!dataUmatKristen)
      return res.status(404).json({ message: "DataUmatKristen not found" });
    res.json(dataUmatKristen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new DataUmatKristen
export const createDataUmatKristen = async (req, res) => {
  try {
    const dataUmatKristen = await DataUmatKristen.create(req.body);
    res.status(201).json(dataUmatKristen);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

// Update DataUmatKristen by ID
export const updateDataUmatKristen = async (req, res) => {
  try {
    const dataUmatKristen = await DataUmatKristen.findByPk(req.params.id);
    if (!dataUmatKristen)
      return res.status(404).json({ message: "DataUmatKristen not found" });
    await dataUmatKristen.update(req.body);
    res.json(dataUmatKristen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete DataUmatKristen by ID
export const deleteDataUmatKristen = async (req, res) => {
  try {
    const dataUmatKristen = await DataUmatKristen.findByPk(req.params.id);
    if (!dataUmatKristen)
      return res.status(404).json({ message: "DataUmatKristen not found" });
    await dataUmatKristen.destroy();
    res.json({ message: "DataUmatKristen deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
