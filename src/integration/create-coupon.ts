import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";

export default async function CreateCouponHandler(
  percentage: number,
  code: string
) {
  const token = window.localStorage.getItem("token");
  if (!token) return null;
  const data = JSON.stringify({ percentage, code });
  const header = {
    authorization: `Bearer ${token}`,
    "content-type": "application/json",
  };
  const url = DOMAIN_NAME + "/api/v1/coupon";
  try {
    const responce = await axios.post(url, data, {
      headers: header,
      responseType: "json",
    });
    return responce.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
