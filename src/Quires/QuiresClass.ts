//The Connect Database
import { CreateMethod } from "./QuiresFunction/CreateFunction";
import { DeleteFunction } from "./QuiresFunction/DeleteFunction";
import { FindAllFunction } from "./QuiresFunction/FindAllFunction";
import { SearchFunction } from "./QuiresFunction/SearchFuncton";
import { UpdateFunction } from "./QuiresFunction/UpdateFunction";
import { CountFunction } from "./QuiresFunction/countFunction";
import { SpecialFunction } from "./QuiresFunction/SpecialFunction";
enum TableEnum{
    tables,
}

class Crud_Collection{
    create=CreateMethod;
    findAll=FindAllFunction;
    update=UpdateFunction;
    delete=DeleteFunction;
    search=SearchFunction;
    count=CountFunction; 
    Special=SpecialFunction  
}


const Models= new Crud_Collection;

export{
    Models,
    TableEnum
}
