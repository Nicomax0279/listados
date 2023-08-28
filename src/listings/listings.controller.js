
import * as listingService from "./listings.service.js"

export const getAll = async (req,res)=>{
    try {
        let response
        console.log(req.query)
        if(req.query.date){
            response = await listingService.getByDate(req.query.date)
        }else{
            response = await listingService.getAll();
        }

        
        res.json(response)
    } catch (error) {
        res.status(501).json({error:error.message})
    }


}

export const createRecord = async (req,res)=>{
    try {
        const {date , petsNumber} = req.body
        const response = await listingService.createRecord(date,petsNumber);
        res.json(response)
    } catch (error) {
        res.status(501).json({error:error.message})
    }


}

export const putById =  async (req,res)=>{
    try {
        const {id ,date} = req.params
        const {petsNumber} = req.body
        const response = await listingService.putById(id,{petsNumber:petsNumber,date:date});
        res.json(response)
    } catch (error) {
        res.status(501).json({error:error.message})
    }


}

export const deleteById =  async (req,res)=>{
    try {
        const {id } = req.params
        const response = await listingService.deleteById(id);
        res.json(response)
    } catch (error) {
        res.status(501).json({error:error.message})
    }


}
export const getById =  async (req,res)=>{
    try {
        const {id } = req.params
        const response = await listingService.getById(id);
        res.json(response)
    } catch (error) {
        res.status(501).json({error:error.message})
    }


}