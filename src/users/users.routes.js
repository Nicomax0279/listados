import { Router } from "express";
import * as usersController from "./users.controller.js"

const usersRouter = Router()
 usersRouter.get('/:id',usersController.getUserById)



export default usersRouter