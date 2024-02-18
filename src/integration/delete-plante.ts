import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";
export default async function DeletePlanteHandler (id : string) {
    const token  = window.localStorage.getItem("token");
    if(!token) return null;
    const url = `${DOMAIN_NAME}/api/v1/plante/${id}`;
    const header = {
        authorization: `Bearer ${token}`,
      };
    try {
        const response = await axios.delete(url,{headers : header , responseType:"json"});
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}