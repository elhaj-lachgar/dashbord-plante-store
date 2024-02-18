import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";

import {
  TCreatePlanteCredentials,
  resolvers,
} from "../validator/create-plante";
import { useForm } from "react-hook-form";
import CreatePlanteHandler from "../integration/create-plante";
import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";

function CreateCategory() {
  const [loading, setLoading] = useState(false);
  const { categorys } = useContext(CategoryContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreatePlanteCredentials>({
    resolver: resolvers,
  });

  const Submit = async (params: TCreatePlanteCredentials) => {
    setLoading(true);
    const res = await CreatePlanteHandler(
      params.name,
      params.category,
      params.image,
      params.price,
      params.currency,
      params.description
    );
    setLoading(false);
    if (!res) return;
    window.location.href = "/";
  };

  return (
    <>
      <Button onClick={onOpen} color={"green"} backgroundColor={"white"}>
        Create Plante
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Plante</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="w-full">
            <form
              className="felx flex-col gap-y-8 w-full px-2 lg:px-5 py-4 rounded-md shadow-md "
              onSubmit={handleSubmit(Submit)}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-y-1">
                  <label>Name</label>
                  <Input
                    type="text"
                    placeholder="entre title..."
                    {...register("name")}
                    // className={cn(
                    //   errors.title
                    //     ? "focus:border-red-400"
                    //     : "focus:border-green-400"
                    // )}
                  />
                  {errors.name ? (
                    <p className="text-xs italic text-red-500">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <label>description</label>
                <Textarea
                  placeholder="enter description...."
                  {...register("description")}
                  // className={cn(
                  //   errors.descripition
                  //     ? "focus:border-red-400"
                  //     : "focus:border-green-400"
                  // )}
                />
                {errors.description ? (
                  <p className="text-xs italic text-red-500">
                    {errors.description.message}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col gap-y-1 w-full ">
                  <label>image</label>
                  <Input
                    type="file"
                    placeholder="image..."
                    {...register("image")}
                    // className={cn(
                    //   errors.image
                    //     ? "focus:border-red-400"
                    //     : "focus:border-green-400"
                    // )}
                    width={"100%"}
                  />
                  {errors.image ? (
                    <p className="text-xs italic text-red-500">
                      {errors.image.message?.toString()}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-y-1 md:w-[45%]">
                  {/* {errors.publishedAt ? (
                    <p className="text-xs italic text-red-500">
                      {errors.publishedAt.message}
                    </p>
                  ) : null} */}
                </div>
              </div>
              <div className="flex flex-col  justify-between gap-x-2">
                <div className="flex flex-col gap-y-1">
                  <label>Price</label>
                  <Input
                    type="number"
                    {...register("price")}
                    // {...register("price")}
                    // className={cn(
                    //   errors.price
                    //     ? "focus:border-red-400"
                    //     : "focus:border-green-400"
                    // )}
                  />
                  {errors.price ? (
                    <p className="text-xs italic text-red-500">
                      {errors.price.message}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label>currency</label>
                  <Select {...register("currency")}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-y-1">
                  <label>category</label>
                  <Select {...register("category")}>
                    {categorys.map((category) => (
                      <option value={category.id}>{category.name}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="w-full flex items-center justify-between mt-2 ">
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  width={"100px"}
                  className="text-white bg-blue-400 hover:text-white hover:bg-blue-400 w-full"
                  type="submit"
                  isLoading={loading}
                >
                  Save
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateCategory;
