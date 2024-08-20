import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import fileupload from "express-fileupload";
//pengaduan
import LayananPengaduanRoute from "./routes/LayananPengaduanRoute.js"
//auth
import AuthRoute from "./routes/AuthRoute.js"
import UserRoute from "./routes/UserRoute.js"
import HakAksesRoute from "./routes/HakAksesRoute.js"
//all
import SuratMasukRoute from "./routes/SuratMasukRoute.js"
import SuratKeluarRoute from "./routes/SuratKeluarRoute.js"
import NamaSekolahSidikaRoute from "./routes/NamaSekolahRouteSidika.js"
//lapasi
import SatkerRoute from "./routes/LapasiRoute/SatkerRoute.js";
import JabatanRoute from "./routes/LapasiRoute/JabatanRoute.js"
import PegawaiRoute from "./routes/LapasiRoute/PegawaiRoute.js"
//pantai disa
import SekolahRoute from "./routes/DisaRoute/SekolahRoute.js"
import DokumenSekolahRoute from "./routes/DisaRoute/DokumenSekolahRoute.js"
import GuruRoute from "./routes/DisaRoute/GuruRoute.js"
import SiswaRoute from "./routes/DisaRoute/SiswaRoute.js"
//akesahu
import HajiRoute from "./routes/AkesahuRoute/DataHajiRoute.js"
import PeriodeRoute from "./routes/AkesahuRoute/PeriodeRoute.js"
//saria
import UmatIslamRoute from "./routes/SariaRoute/UmatIslamRoute.js"
import RumahIbadahIslamRoute from "./routes/SariaRoute/RumahIbadahIslamRoute.js"
import OrganisasiMasyarakatRoute from "./routes/SariaRoute/OrganisasiMasyarakatRoute.js"
import MajelisRoute from "./routes/SariaRoute/MajelisRoute.js"
import LembagaKeagamaanRoute from "./routes/SariaRoute/LembagaKeagamaanRoute.js"
import KuaRoute from "./routes/SariaRoute/KuaRoute.js"
import TpqRoute from "./routes/SariaRoute/TpqRoute.js"
import PenyuluhIslamRoute from "./routes/SariaRoute/PenyuluIslamRoute.js"
import PenghuluRoute from "./routes/SariaRoute/PenghuluRoute.js"
//sahu
import KecamatanRoute from "./routes/SahuRoute/KecamatanRoute.js"
import TanahWakafRoute from "./routes/SahuRoute/TanahWakafRoute.js"
import ZakatRoute from "./routes/SahuRoute/ZakatRoute.js"

//paludi
import GerejaRoute from "./routes/PaludiRoute/GerejaRoute.js"
import GuruPakRoute from "./routes/PaludiRoute/GuruPakRoute.js"
import LembagaKristenRoute from "./routes/PaludiRoute/LembagaRouteKristen.js"
import PenyuluRoute from "./routes/PaludiRoute/PenyuluRoute.js"
import OrganisasiKristenRoute from "./routes/PaludiRoute/OrganisasiKristenRoute.js"
import SekolahKristenRoute from "./routes/PaludiRoute/SekolahKristenRoute.js"
import UmatKristenRoute from "./routes/PaludiRoute/UmatKristenRoute.js"
import DokumenSekolahKristenRoute from "./routes/PaludiRoute/DokumenSekolahKristenRoute.js"
import SekolahMingguRoute from "./routes/PaludiRoute/SekolahMingguRoute.js"
import PelayanGerejaRoute from "./routes/PaludiRoute/PelayanGerejaRoute.js"

//sidika
import PetaKepengawasanRoute from "./routes/SidikaRoute/PetaKepengawasanRoute.js"
import AkademikRoute from "./routes/SidikaRoute/AkademikRoute.js"
import MenejerialRoute from "./routes/SidikaRoute/MenejerialRoute.js"

dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});


// (async () => {
//   await db.sync();
// })();

// store.sync();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(fileupload());
app.use(express.static("public")); 
app.use(express.json());
//layanan
app.use(LayananPengaduanRoute);

//auth
app.use(AuthRoute);
app.use(UserRoute);
app.use(HakAksesRoute);
//all
app.use(SuratMasukRoute);
app.use(SuratKeluarRoute);
app.use(NamaSekolahSidikaRoute);
// lapasi
app.use(SatkerRoute);
app.use(JabatanRoute);
app.use(PegawaiRoute);
// disa
app.use(SuratKeluarRoute);
app.use(SekolahRoute);
app.use(DokumenSekolahRoute);
app.use(GuruRoute);
app.use(SiswaRoute);
//akesahu
app.use(HajiRoute);
app.use(PeriodeRoute);
//saria
app.use(UmatIslamRoute);
app.use(RumahIbadahIslamRoute);
app.use(OrganisasiMasyarakatRoute);
app.use(MajelisRoute);
app.use(LembagaKeagamaanRoute);
app.use(KuaRoute);
app.use(TpqRoute);
app.use(PenyuluhIslamRoute);
app.use(PenghuluRoute);
//sahu
app.use(KecamatanRoute);
app.use(TanahWakafRoute);
app.use(ZakatRoute);

//paludi 
app.use(GerejaRoute);
app.use(GuruPakRoute);
app.use(LembagaKristenRoute);
app.use(OrganisasiKristenRoute);
app.use(PenyuluRoute);
app.use(SekolahKristenRoute);
app.use(UmatKristenRoute);
app.use(DokumenSekolahKristenRoute);
app.use(SekolahMingguRoute);
app.use(PelayanGerejaRoute);

//sidika
app.use(PetaKepengawasanRoute);
app.use(AkademikRoute);
app.use(MenejerialRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});