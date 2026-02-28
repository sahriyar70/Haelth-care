import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";


const createSpecialty = async (req : Request, res : Response) =>{
    console.log(req.body)
    const paylod = req.body 
    const result = await SpecialtyService.createSpecialty(paylod )

    res.status(201).json({
        success : true,
        message : "specialty creat successfully",
        data : result 


    })
}

export const SpecialtyController = {
    createSpecialty
}