import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";
export default async function UpdateCategoryHandler(
  id: string,
  name?: string,
  image?: FileList
) {
  const token = window.localStorage.getItem("token");
  if (!token) return null;

  const data = new FormData();

  if (name) data.append("name", name);
  if (image && image.length > 0) data.append("category", image[0]);

  const header = {
    authorization: `Bearer ${token}`,
  };

  const url = `${DOMAIN_NAME}/api/v1/category/${id}`;

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
