import { Router } from 'express';
const router = Router()



//------------------------------------ Create Section ----------------------------------------//
import CreateResturant from '../Controllers/InformationResturant/CreateRestaurant';
import AllResturant from '../Controllers/InformationResturant/GetAllResturant';
import DeleteResturant from '../Controllers/InformationResturant/DeleteRestaurant';
import GetCountResturants from '../Controllers/InformationResturant/countNumber';


router.post("/createrestaurant",CreateResturant)
router.post("/AllResturant",AllResturant)
router.post("/DeleteResturant",DeleteResturant);
router.post("/countResturant",GetCountResturants);




const  ResturantRoutes=router



export default ResturantRoutes
