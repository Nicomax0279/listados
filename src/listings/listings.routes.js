import { Router } from "express";
import * as listingsController from "./listings.controller.js"

const ListingsRouter = Router()
ListingsRouter.get('/',listingsController.getAll)
ListingsRouter.post('/',listingsController.createRecord)
ListingsRouter.put('/:id',listingsController.putById)
ListingsRouter.delete('/:id',listingsController.deleteById)
ListingsRouter.get('/:id',listingsController.getById)



export default ListingsRouter