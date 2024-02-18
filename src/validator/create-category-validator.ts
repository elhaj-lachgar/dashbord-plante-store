import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";


const CreateCategoryCredentials = z.object({
    name : z.string().min(3,{message : "name of category more than 3 characters"}) ,
    imageUrl : z.instanceof(FileList),
})


export type TCreateCategoryCredentials = z.infer<typeof CreateCategoryCredentials>;

export const resolvers = zodResolver(CreateCategoryCredentials);