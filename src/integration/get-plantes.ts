import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";

export default async function GetPlantes(page:number) {
  const url =`${DOMAIN_NAME}/api/v1/plante?page=${page}`;
  try {
    const responce = await axios.get(url, { responseType: "json" });
    return responce.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
