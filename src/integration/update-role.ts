import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";

export default async function UpdateRoleHandler( id: string , role: string){
    const token = window.localStorage.getItem('token');
    if(!token) return null;
    const url = `${DOMAIN_NAME}/api/v1/auth/role-update/${id}`;
    const header = {
        "authorization":`Bearer ${token}`,
        "content-type": "application/json",
    }
    const data = JSON.stringify({role})
    try {
        const responce = await axios.put(url,data,{headers : header});
        return responce.data;
    }catch(e) {
        console.error(e);
        return null;
    }
}