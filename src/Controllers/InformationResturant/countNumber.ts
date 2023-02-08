
import {Request,Response} from "express";
import { Models,TableEnum } from "../../Quires/QuiresClass";

const GetCountResturants= async(req:Request,res:Response)=>{
    let data=await Models.count(TableEnum.tables,req.body.where)
    res.json(data)
}

export default GetCountResturants