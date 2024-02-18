import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";

export default async function DeleteCouponHandler(id:string){
    const token = window.localStorage.getItem("token");
    if(!token) return null;
    const header = {
        "authorization" :`Bearer ${token}`,
        "content-type" :`application/json`,
    }
    const url = DOMAIN_NAME+`/api/v1/coupon/${id}`;
    try {
        const responce = await axios.delete( url , {headers:header ,responseType:"json"});
        return responce.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}