import { Response } from "express";
export const sendErrorResponse = (res:Response, statusCode:number, message:string) => {
    return res.status(statusCode).json({
      status: false,
      message,
    });
  };
  export const sendSuccessResponse = (res:Response, data:any, message:string) => {
    return res.status(200).json({
      status: true,
      data: data,
      message,
    });
  };
  export const sendSuccessWithoutResponse = (res:Response, message:string) => {
    return res.status(200).json({
      status: true,
      message,
    });
  };

  
  