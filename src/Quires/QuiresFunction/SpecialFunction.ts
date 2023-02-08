import Database from "../../Database/Database";
import { TableEnum } from "../QuiresClass";

const SpecialFunction= async (NameTable:TableEnum,QuiresData:any)=>{
    const {LIMIT,OFFSET,ELEMENT,TYPESORT}=QuiresData;
    try{
        let sql=`SELECT * FROM ${TableEnum[NameTable]} 
        ${ELEMENT!==undefined?`ORDER BY ${ELEMENT} ${TYPESORT}`:""}
        LIMIT ${LIMIT} OFFSET ${OFFSET};`;

        const DataUse=await Database.query(sql)
        return DataUse.rows
    }catch(error:any){
            return error.detail
    }}
    export {
        SpecialFunction
    }