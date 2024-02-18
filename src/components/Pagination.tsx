import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { TPagination } from "../lib/utils";
import { Button } from "@chakra-ui/react";
import { PlanteContext, TPLante } from "../context/PlanteContext";
import { useContext, useState } from "react";
import GetPlantes from "../integration/get-plantes";

export default function Pagination({ data }: { data: TPagination }) {
  const { setPlantes } = useContext(PlanteContext);
  const [currentPage, setCurrentPage] = useState(0);

  const generate = () => {
    let arr = [];
    for (let i = 0; i < data.totalPages; i++) {
      arr.push(i + 1);
    }
    return arr;
  };
  const array = generate();
  const handleClick = async (page: number) => {
    const res = await GetPlantes(page);
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
    setPlantes(arr);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Button
          onClick={() => {
            const page = currentPage <= 0 ? currentPage : currentPage - 1;

            setCurrentPage(page);
            handleClick(page);
          }}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Button>
        <Button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => {
            const page =
              currentPage >= data.totalPages ? currentPage : currentPage + 1;

            setCurrentPage(page);
            handleClick(page);
          }}
        >
          Next
        </Button>
      </div>
      <div className="hidden sm:flex justify-center sm:flex-1 sm:items-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Button
              onClick={() => {
                const page = currentPage <= 0 ? currentPage : currentPage - 1;

                setCurrentPage(page);
                handleClick(page);
              }}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Button>
            {array.map((ele) => (
              <Button
                border={"1px solid gray"}
                aria-current="page"
                className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-gray-500 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                id={ele.toString()}
                onClick={(e) => {
                  const page = parseInt(e.currentTarget.id);
                  setCurrentPage(page);
                  handleClick(page);
                }}
              >
                {ele}
              </Button>
            ))}
            <Button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => {
                const page =
                  currentPage >= data.totalPages
                    ? currentPage
                    : currentPage + 1;

                setCurrentPage(page);
                handleClick(page);
              }}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
