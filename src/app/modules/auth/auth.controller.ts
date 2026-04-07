import { Request, Response } from "express";
import { catchAsync } from "../../sheard/catchAsync.js";
import { Authservices } from "./auth.service.js";
import { sendResponse } from "../../sheard/sendResponse.js";

import { StatusCodes } from "http-status-codes";

const registerpatient = catchAsync (async (req : Request, res : Response)=>{
    const paylod = req.body

    const result = await Authservices.registerpatient(paylod)

    sendResponse (res,{
        httpstatuscode : StatusCodes.CREATED,
        success : true,
        message : "patient register succsess",
        data : result 
    })
})

const  Loginuser = catchAsync (async ( req : Request, res : Response)=>{
    const paylod = req.body 

    const result = await Authservices.Loginuser(paylod)
     sendResponse   (res, {
        httpstatuscode : StatusCodes.OK,
        success : true,
        message : "login successfully",
        data : result 
     })
})

export const Authcontroller = {
    registerpatient,
    Loginuser
}