import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";


const createSpecialty = async (req : Request, res : Response) =>{
    
   try {
     const paylod = req.body 
    const result = await SpecialtyService.createSpecialty(paylod )

    res.status(201).json({
        success : true,
        message : "specialty creat successfully",
        data : result 


    })
   } catch (error : any) {
    console.log(error)
    res.status(500).json({
        success : true,
        message : "specialty creat Faild",
        error : error.message
    })
   }
}

const getAllSpecialty = async (req:Request,res:Response) =>{
    try {
        const specialty = await SpecialtyService. getAllSpecialty()

        res.status(201).json({
            succsess : true,
            message : "get all specialty",
            data : specialty
        })

    } catch (error : any) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "fatch all specialty",
            error : error.message
        })
    }
}

const  deleteSpecialty = async (req:Request,res:Response) =>{
    try {
        const {id} = req.params 
        const result= await SpecialtyService. deleteSpecialty(id as string)

        res.status(201).json({
            success : true,
            message : " delete specialty",
            data : result
        })
    } catch (error : any) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "fatch all specialty",
            error : error.message
        })
    }
}

export const SpecialtyController = {
    createSpecialty,
    getAllSpecialty,
    deleteSpecialty
}