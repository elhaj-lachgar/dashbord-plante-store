import { useContext, useEffect, useState } from "react";
import PlanteItem from "../components/PlanteItem";
import GetPlantes from "../integration/get-plantes";
import { PlanteContext, TPLante } from "../context/PlanteContext";
import Pagination from "../components/Pagination";
import { TPagination } from "../lib/utils";

const initPagination: TPagination = {
  limit: 0,
  page: 0,
  total: 0,
  totalPages: 1,
};

function Plante() {
  const { plantes, setPlantes } = useContext(PlanteContext);
  const [pagination, setPagination] = useState<TPagination>(initPagination);
  const Fetcher = async () => {
    const res = await GetPlantes(0);
    if (!res) return;

    const arr: TPLante[] = res.data.data.map((plante: any) => {
      return {
        id: plante.id,
        name: plante.name,
        categoryId: plante.category.name,
        description: plante.description,
        imageUrl: plante.imageUrl,
        price: plante.price,
        currency: plante.currency,
        discountPrice: plante.discountPrice,
        rating: plante.rating,
        createdAt: plante.createdAt,
        updatedAt: plante.updatedAt,
      };
    });

    setPagination(res.data.pagination as TPagination);
    setPlantes(arr);
  };
  useEffect(() => {
    Fetcher();
  }, []);

  return (
    <div className="p-3 w-full h-[100vh  lg:w-[calc(100%-200px)] lg:left-[200px] lg:relative flex flex-col mt-12 lg:mt-5 gap-y-6">
      <h1 className="text-center text-4xl font-bold text-gray-700">Plante</h1>
      {plantes ? (
        <>
          {plantes.map((ele: any) => {
            return <PlanteItem data={ele} />;
          })}
        </>
      ) : null}
      <Pagination data={pagination} />
    </div>
  );
}

export default Plante;
