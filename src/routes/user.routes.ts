import {Request, Response, Router} from "express"
import {createUser, deleteUser, getAllUsers, updateUser} from "../controllers/user.controllers";

const userRoutes = Router()


userRoutes.get("/",getAllUsers)

userRoutes.post("/", createUser)

userRoutes.put("/:userID",updateUser)

userRoutes.delete("/:userID", deleteUser)


export default userRoutes
