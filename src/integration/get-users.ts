import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";
export default async function  GetUsers () {
    const token = window.localStorage.getItem('token');
    if(!token) return null;
    const url = DOMAIN_NAME+"/api/v1/auth/get-users";
    const header = {
        "authorization":`Bearer ${token}`,
        "content-type": "application/json",
    }
    try {
        const responce = await axios.get(url , { headers:header,responseType:"json" });
        return responce.data;
    }catch(e) {
        console.error(e);
        return null;
    }
}