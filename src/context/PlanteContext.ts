import { createContext } from "react";


export type TPLante = {
    id : string ;
    name: string;
    categoryId: string;
    description:string;
    imageUrl: string;
    price: number;
    currency: "USD" | "EUR";
    discountPrice: 22;
    rating: number;
    createdAt: string;
    updatedAt: string;
  }
  


type TPlanteContext =  {  
    plantes : TPLante [],
    setPlantes: (plates:TPLante[]) => void;
}

const InitState : TPlanteContext = {
    plantes : [],
    setPlantes : () =>{console.log("hi")}
}


export const PlanteContext  = createContext<TPlanteContext>(InitState);