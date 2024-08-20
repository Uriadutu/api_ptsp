import { Login, Me, Logout } from "../controllers/Auth.js";
import express from "express"

const Router = express.Router()


Router.post("/login", Login)
Router.get("/me", Me)
Router.delete("/logout", Logout)

export default Router