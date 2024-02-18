import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";
export default async function GetCategorys () {
    const url = DOMAIN_NAME+"/api/v1/category";
    try {
        const response = await axios.get(url,{responseType:"json"});
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}