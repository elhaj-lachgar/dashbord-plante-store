import axios from "axios";
import { DOMAIN_NAME } from "../lib/utils";

export default async function GetCouponHandler() {
  const token = window.localStorage.getItem("token");
  if (!token) return null;
  const header = {
    authorization: `Bearer ${token}`,
  };

  const url = DOMAIN_NAME + "/api/v1/coupon";

  try {
    const responce = await axios.get(url, {
      headers: header,
      responseType: "json",
    });
    return responce.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
