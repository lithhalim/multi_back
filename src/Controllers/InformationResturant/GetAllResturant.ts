
import {Request,Response} from "express";
import { Models,TableEnum } from "../../Quires/QuiresClass";

const AllResturant= async(req:Request,res:Response)=>{
    let data=await Models.Special(TableEnum.tables,req.query)
    res.json(data)
}

export default AllResturant