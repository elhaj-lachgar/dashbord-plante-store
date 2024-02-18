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
} from "@chakra-ui/react";

import {
  TCreateCategoryCredentials,
  resolvers,
} from "../validator/create-category-validator";

import { useForm } from "react-hook-form";
import { useState } from "react";
import CreateCategoryHandler from "../integration/create-category";

function CreatePlante() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TCreateCategoryCredentials>({
    resolver: resolvers,
  });

  const Submit = async (params: TCreateCategoryCredentials) => {
    setLoading(true);
    const res = await CreateCategoryHandler(params.name, params.imageUrl);
    if (!res) return;
    window.location.href = "/category";
  };

  return (
    <>
      <Button onClick={onOpen} color={"green"} backgroundColor={"white"}>
        Create Category
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col gap-y-1 w-full ">
                  <label>image</label>
                  <Input
                    type="file"
                    placeholder="image..."
                    {...register("imageUrl")}
                    // className={cn(
                    //   errors.image
                    //     ? "focus:border-red-400"
                    //     : "focus:border-green-400"
                    // )}
                    width={"100%"}
                  />
                  {errors.imageUrl ? (
                    <p className="text-xs italic text-red-500">
                      {errors.imageUrl.message?.toString()}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="w-full flex items-center justify-end gap-x-2 mt-2 ">
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  width={"100px"}
                  isLoading={loading}
                  className="text-white bg-blue-400 hover:text-white hover:bg-blue-400 w-full"
                  type="submit"
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

export default CreatePlante;
