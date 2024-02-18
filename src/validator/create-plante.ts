import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const CreatePlanteCredentials = z.object({
    name : z.string().min(3,{message : "name of plante must be more than 3 characters"}),
    description : z.string().min(8 ,{ message : "description of plante must be more than 8 characters"}),
    image : z.instanceof(FileList),
    price : z.string().min(1,{message : "price of plante required"}),
    currency : z.string().min(1,{message : "currency of plante is required"}),
    category : z.string().min(1,{message : "category of plante is required"}),
});

export type TCreatePlanteCredentials = z.infer< typeof CreatePlanteCredentials>;

export const resolvers = zodResolver(CreatePlanteCredentials);