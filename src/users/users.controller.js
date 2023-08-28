import * as usersService from './users.service.js'

export const getUserById = async (req,res)=>{

    try {
        const {id} = req.params
        const response = await usersService.getUserById(id)
        res.json(response)
    } catch (error) {
        console.log(error)
        res.status(501).json({error:error.msg})
    }



}