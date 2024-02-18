import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const UpadateItemsCredentials =  z.object({
    name : z.string().optional().or(z.literal('')) ,
    imageUrl : z.instanceof(FileList).optional(),
})

export type TUpdateItemsCredentials = z.infer<typeof UpadateItemsCredentials>;

export const resolvers = zodResolver(UpadateItemsCredentials);