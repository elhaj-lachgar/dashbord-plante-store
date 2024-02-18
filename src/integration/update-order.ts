import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";
export default async function UpdateOrderHandler(id : string ,isDelaiverd : boolean , date : string){
    if(!isDelaiverd) return null;
    const token = window.localStorage.getItem('token');
    if(!token) return null;
    const url = `${DOMAIN_NAME}/api/v1/order/${id}`;
    const header = {
        "authorization":`Bearer ${token}`,
        "content-type": "application/json",
    }
    const data = JSON.stringify({date})
    try {
        const responce = await axios.put(url , data ,{ headers:header ,responseType:"json" });
        return responce.data;
    }catch(e) {
        console.error(e);
        return null;
    }
}