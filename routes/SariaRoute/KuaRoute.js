import { getKua, getKuaById, createKua, updateKua, deleteKua } from "../../controllers/Saria/Kua.js";
import express from "express"

const Router = express.Router()

Router.get("/kua", getKua)
Router.get("/kua/:id", getKuaById)
Router.post("/kua", createKua)
Router.patch("/kua/:id", updateKua)
Router.delete("/kua/:id", deleteKua)

export default Router