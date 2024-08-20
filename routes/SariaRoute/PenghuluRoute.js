import express from "express"
import { getPenghulu, getPenghuluById, createPenghulu, deletePenghulu } from "../../controllers/Saria/Penghulu.js"

const Router = express.Router()

Router.get("/penghulu", getPenghulu)
Router.get("/penghulu/:id", getPenghuluById)
Router.post("/penghulu", createPenghulu)
Router.delete("/penghulu/:id", deletePenghulu)

export default Router;