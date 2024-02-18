import { createContext } from "react";


export type TCategory = {
    id : string;
    name : string;
    image : string;
}


type TCategoryContext  = {
    categorys: TCategory [] ;
    setCategory :  ( categorys : TCategory[]) => void;
}


const InitState : TCategoryContext = {
    categorys : [] ,
    setCategory : (category) => { console.log(category)}
}

export const CategoryContext  = createContext<TCategoryContext>(InitState);