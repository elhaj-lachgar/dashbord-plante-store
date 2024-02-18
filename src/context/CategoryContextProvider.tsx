import React, { useEffect, useState } from "react";
import { CategoryContext, TCategory } from "./CategoryContext";
import GetCategorys from "../integration/get-catgorys";

function CategoryContextProvider({ children }: { children: React.ReactNode }) {
  const [categorys, setCategorys] = useState<TCategory[]>([]);
  const setCategoryHandler = (params: TCategory[]) => {
    setCategorys(params);
  };

  const fetcher = async () => {
    const res = await GetCategorys();
    if (!res) return;
    const arr: TCategory[] = res.data.data.map((ele: any) => {
      return {
        id: ele.id,
        name: ele.name,
        image: ele.imageUrl,
      };
    });
    setCategorys(arr);
  };

  useEffect(() => {
    fetcher()
  }, []);
  return (
    <CategoryContext.Provider
      value={{ categorys, setCategory: setCategoryHandler }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
