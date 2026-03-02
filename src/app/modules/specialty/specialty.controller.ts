import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../sheard/catchAsync";


// const catchAsync = (fn : RequestHandler ) =>{
//     return async (req: Request , res : Response , next : NextFunction ) =>{
//         try {
//             await fn (req,res,next)
//         } catch (error : any) {
//     console.log(error)
//     res.status(500).json({
//         success : true,
//         message : " Faild to fatch ",
//         error : error.message
//     })
//    }
//     }
// }

const createSpecialty = catchAsync (async (req : Request, res : Response) =>{
     const paylod = req.body 
    const result = await SpecialtyService.createSpecialty(paylod )

    res.status(201).json({
        success : true,
        message : "specialty creat successfully",
        data : result 


    })
})
    
   

const getAllSpecialty = catchAsync ( async (req : Request , res: Response  )=>{
    const specialty = await SpecialtyService. getAllSpecialty()

       res.status(201).json({
           succsess : true,
            message : "get all specialty",
           data : specialty
      })
} )

// const getAllSpecialty = async (req:Request,res:Response) =>{
//     try {
//         const specialty = await SpecialtyService. getAllSpecialty()

//         res.status(201).json({
//             succsess : true,
//             message : "get all specialty",
//             data : specialty
//         })

//     } catch (error : any) {
//         console.log(error)
//         res.status(500).json({
//             success : false,
//             message : "fatch all specialty",
//             error : error.message
//         })
//     }
// }

const  deleteSpecialty = catchAsync (async (req:Request,res:Response) =>{
    const {id} = req.params 
        const result= await SpecialtyService. deleteSpecialty(id as string)

        res.status(201).json({
            success : true,
            message : " delete specialty",
            data : result
        })
})

const updateSpecialty = catchAsync( async (req: Request, res : Response) =>{
    const {id} = req.params 
    const paylod = req.body 

    const result = await SpecialtyService.updateSpecialty(id as string ,paylod)
    
        res.status(201).json({
            success : true,
            message : "specialty uopdate successfully",
            data : result
        })
})
    
export const SpecialtyController = {
    createSpecialty,
    getAllSpecialty,
    deleteSpecialty,
    updateSpecialty
}