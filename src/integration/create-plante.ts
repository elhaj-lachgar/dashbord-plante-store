import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";

export default async function CreatePlanteHandler(
  name: string,
  category: string,
  image: FileList,
  price: string,
  currency: string,
  description: string
) {
  const token = window.localStorage.getItem("token");
  if (!token) return null;

  const data = new FormData();

  if (name) data.append("name", name);
  if (category) data.append("categoryId", category);
  if (image && image.length > 0) data.append("plante", image[0]);
  if (price) data.append("price", price);
  if (currency) data.append("currency", currency);
  if (description) data.append("description", description);

  const header = {
    authorization: `Bearer ${token}`,
  };

  const url = DOMAIN_NAME+"/api/v1/plante";
  try {
    const response = await axios.post(url, data, {
      headers: header,
      responseType: "json",
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
