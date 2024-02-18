import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateCouponCredentials = z.object({
    percentage : z.string().refine(value=>parseFloat(value)),
    code:z.string().min(3,{message:"code must be more than 3 characters"})
});


export type TCreateCouponCredentials = z.infer< typeof CreateCouponCredentials >;

export const resolvers  = zodResolver(CreateCouponCredentials);