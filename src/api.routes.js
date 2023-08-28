import { Router } from "express";
import usersRouter from "./users/users.routes.js";
import ListingsRouter from "./listings/listings.routes.js";


const apiRouter = Router()


//apiRouter.use('/users',usersRouter)
apiRouter.use('/listing',ListingsRouter)


export default apiRouter