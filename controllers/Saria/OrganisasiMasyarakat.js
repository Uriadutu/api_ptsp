import OrganisasiMasyarakat from "../../models/SariaModels/OrganisasiMasyarakatModels.js";
export const getOrganisasiMasyarakat = async (req, res) => {
  try {
    const response = await OrganisasiMasyarakat.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getOrganisasiMasyarakatById = async (req, res) => {
  try {
    const response = await OrganisasiMasyarakat.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createOrganisasiMasyarakat = async (req, res) => {
  const {
    nama_organisasi,
    alamat,
    tahun_berdiri,
    nama_pimpinan,
    tahun_periode,
    jumlah_anggota,
  } = req.body;
  try {
    await OrganisasiMasyarakat.create({
      nama_organisasi,
      alamat,
      tahun_berdiri,
      nama_pimpinan,
      tahun_periode,
      jumlah_anggota,
    });
    res
      .status(201)
      .json({ msg: "Data Organisasi Masyarakat berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateOrganisasiMasyarakat = async (req, res) => {
  const {
    nama_organisasi,
    alamat,
    tahun_berdiri,
    nama_pimpinan,
    tahun_periode,
    jumlah_anggota,
  } = req.body;
  try {
    await OrganisasiMasyarakat.update(
      {
        nama_organisasi,
        alamat,
        tahun_berdiri,
        nama_pimpinan,
        tahun_periode,
        jumlah_anggota,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res
      .status(200)
      .json({ msg: "Data Organisasi Masyarakat berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteOrganisasiMasyarakat = async (req, res) => {
  try {
    await OrganisasiMasyarakat.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ msg: "Data Organisasi Masyarakat berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
