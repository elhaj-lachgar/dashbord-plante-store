import { useContext, useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import GetCategorys from "../integration/get-catgorys";
import { CategoryContext, TCategory } from "../context/CategoryContext";

function Category() {
  const {categorys ,setCategory } = useContext(CategoryContext);
  const fetchCategory = async () => {
    const res = await GetCategorys();
    if (!res) return;
    const arr: TCategory[] = res.data.data.map((ele: any) => {
      return {
        id : ele.id,
        name : ele.name,
        image : ele.imageUrl
      };
    });
    setCategory(arr);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="p-3 w-full   lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 gap-y-6">
      <h1 className="text-center text-4xl font-bold text-gray-700">Catrgory</h1>
      {categorys ? (
        <>
          {categorys.map((ele: any) => (
            <CategoryItem data={ele} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Category;
