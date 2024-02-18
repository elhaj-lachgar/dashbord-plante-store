import { Box, User2Icon ,Flower2, Grid2X2, Plus ,Component} from "lucide-react";

export const SIDE_BAR_ITEMS = [
  {
    name :"Planted",
    link: "/",
    icon : Flower2
  },
  {
    name: "Orders",
    link: "/orders",
    icon : Box
  },
  {
    name: "Users",
    link: "/users",
    icon : User2Icon
  },

  {
    name : "Category",
    link : "/category",
    icon :  Grid2X2 
  },
  {
    name : "Create",
    link : "/create",
    icon : Plus
  },{
    name:"Coupon",
    link:"/coupon",
    icon:Component
  }
];

export function FormatPrice(price: { value: number; currency: "USD" | "EUR" }) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
  }).format(price.value);
}


export const CollectionItems = [
  {
    title: "Beautiful Plant Varieties",
    desc: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    img: "/cactus2-free-img.jpg",
  },
  {
    title: "Trendy Cactus Varieties",
    desc: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    img: "/cactus4-free-img.jpg",
  },
  {
    title: "Gardening Accessories",
    desc: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    img: "/cactus6-free-img.jpg",
  },
];


export type TPagination = {
  page: number,
  limit:  number,
  total: number,
  totalPages: number
}



export const DOMAIN_NAME = "https://plante-stora.onrender.com"