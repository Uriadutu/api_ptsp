import { getUserById, createUser, getUsers } from "../controllers/User.js" 
import express from "express"

const Router = express.Router()


Router.get("/user", getUsers)
Router.post("/user", createUser)
Router.get("/user/:id", getUserById)

export default Router