import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";
export default async function UpdatePlanteHandler(
  id: string,
  name?: string,
  plante?: FileList
) {
  const token = window.localStorage.getItem("token");
  if (!token) return null;

  const data = new FormData();

  if (name) data.append("name", name);
  if (plante && plante.length > 0 ) data.append("plante", plante[0]);

  const header = {
    authorization: `Bearer ${token}`,
  };

  const url = `${DOMAIN_NAME}/api/v1/plante/${id}`;

  try {
    const response = await axios.put(url, data, {
      headers: header,
      responseType: "json",
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
