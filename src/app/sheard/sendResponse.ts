import { Response } from "express"

interface IResponseData <T>{
    httpstatuscode : number
    success : boolean
    message : string 
    data : T 
    
}

 export const sendResponse = <T> (res : Response , responseData : IResponseData<T>)=>{
    const {httpstatuscode,success,message,data} = responseData
    res.status(httpstatuscode).json({
        success,
        message,
        data
    })
 }