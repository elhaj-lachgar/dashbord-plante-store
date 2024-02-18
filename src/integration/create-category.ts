import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";

export default async function CreateCategoryHandler(name : string , image : FileList){
    const token  = window.localStorage.getItem("token");    
    if(!token) return null;

    const data  = new FormData();
    if(name) data.append( "name" ,name);
    if(image && image.length > 0) data.append("category" , image[0]);

    const url = DOMAIN_NAME+"/api/v1/category";

    const header = {
        "authorization" : `Bearer ${token}`
    }
    try {
        const responce  = await  axios.post(url , data ,{headers : header} );
        return responce.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}