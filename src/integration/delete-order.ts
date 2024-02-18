import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";
export default async function DeleteOrderHandler( id: string){
    const token = window.localStorage.getItem('token');
    if(!token) return null;
    const url = `${DOMAIN_NAME}/api/v1/order/${id}`;
    const header = {
        "authorization":`Bearer ${token}`,
        "content-type": "application/json",
    }
    try {
        const responce = await axios.delete(url,{headers : header});
        return responce.data;
    }catch(e) {
        console.error(e);
        return null;
    }
}