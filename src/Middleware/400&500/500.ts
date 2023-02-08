import {Request,Response,NextFunction,ErrorRequestHandler} from "express";

export default((err:ErrorRequestHandler,
    req:Request, res:Response,
    next:NextFunction) => {

    res.status(500).send('Something broke!')
})
  