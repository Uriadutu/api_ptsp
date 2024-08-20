import argon2 from "argon2";
import User from "../models/UserModel.js";
import Pegawai from "../models/LapasiModels/PegawaiModels.js";

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user;

    // Cek apakah username ada di User atau Pegawai
    user = await User.findOne({
      where: { username },
    });

    if (!user) {
      user = await Pegawai.findOne({
        where: { NIP: username },
      });
    }

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    // Pastikan password tidak null atau kosong
    if (!user.password) {
      return res.status(400).json({ msg: "Belum Memiliki Akses" });
    }

    const match = await argon2.verify(user.password, password);
    if (!match) {
      return res.status(400).json({ msg: "Password salah" });
    }

    // Berhasil login
    req.session.userId = user.id;
    const role = user.role || "Pegawai";
    const nama = user.name || user.nama_pegawai;
    const id = user.id;

    res.status(200).json({ id, nama, username, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Terjadi kesalahan dalam proses login" });
  }
};

export const Me = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ msg: "Mohon login terlebih dahulu" });
    }

    let user = await User.findOne({
      where: { id: req.session.userId },
    });

    if (!user) {
      user = await Pegawai.findOne({
        where: { id: req.session.userId },
      });
    }

    if (!user) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Terjadi Kesalahan:", error);
    res.status(500).json({
      msg: "Terjadi kesalahan",
    });
  }
};

export const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ msg: "Tidak dapat logout" });
    }
    res.status(200).json({ msg: "Logout telah berhasil" });
  });
};
