import Database from "../../Database/Database";
import { TableEnum } from "../QuiresClass";

const CountFunction= async (
    NameTable:TableEnum,
    FilterData:any)=>{

    try{
        let sql=`SELECT COUNT(*) FROM  ${TableEnum[NameTable]} ${FilterData}`

        const DataUse=await Database.query(sql);
        return DataUse.rows

    }catch(error:any){
            return error.detail
    }
    }

    export {
        CountFunction
    }