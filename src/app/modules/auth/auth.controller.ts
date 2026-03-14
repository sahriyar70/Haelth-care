import { Request, Response } from "express";
import { catchAsync } from "../../sheard/catchAsync.js";
import { Authservices } from "./auth.service.js";
import { sendResponse } from "../../sheard/sendResponse.js";

const registerpatient = catchAsync (async (req : Request, res : Response)=>{
    const paylod = req.body

    const result = await Authservices.registerpatient(paylod)

    sendResponse (res,{
        httpstatuscode : 201,
        success : true,
        message : "patient register succsess",
        data : result 
    })
})

export const Authcontroller = {
    registerpatient
}