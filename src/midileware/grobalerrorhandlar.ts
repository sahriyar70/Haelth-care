import { Request, Response } from "express";
import { env } from "node:process";
import { envVariabls } from "../config/env.js";

import { StatusCodes } from "http-status-codes";

export const globalErrorHandler = (err: Error, req: Request, res: Response,next: Function) => {
    console.error(err);
    if (envVariabls .NODE_ENV === "development") {
        console.log("error frome globalerrorhandlar",err)

        let statusCode  = StatusCodes .INTERNAL_SERVER_ERROR;
        let message : string = err.message || "Internal server error";

    res.status(statusCode).json({
        success: false,
        message: message,   
        error: err.message
    });
} }