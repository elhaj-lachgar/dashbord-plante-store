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
  resolvers,
  TCreateCouponCredentials,
} from "../validator/create-coupon-validator";

import { useForm } from "react-hook-form";
import { useState } from "react";
import CreateCouponHandler from "../integration/create-coupon";

function CreateCoupon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState<null | string>();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TCreateCouponCredentials>({
    resolver: resolvers,
  });

  const Submit = async (params: TCreateCouponCredentials) => {
    const percentage = parseFloat(params.percentage);
    if (percentage > 100 || percentage < 0) {
      setError("percentage must be between 0 and 100");
      return;
    }
    setLoading(true);
    const res = await CreateCouponHandler(percentage, params.code);
    setLoading(false);
    if (!res) return;
    window.location.href = "/coupon";
  };
  return (
    <>
      <Button onClick={onOpen} color={"green"} backgroundColor={"white"}>
        Create Coupon
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Coupon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              className="felx flex-col gap-y-8 w-full px-2 lg:px-5 py-4 rounded-md shadow-md "
              onSubmit={handleSubmit(Submit)}
            >
              <div className="flex flex-col gap-y-1">
                <label>Code</label>
                <Input
                  type="text"
                  placeholder="entre title..."
                  {...register("code")}
                  // className={cn(
                  //   errors.title
                  //     ? "focus:border-red-400"
                  //     : "focus:border-green-400"
                  // )}
                />
                {errors.code ? (
                  <p className="text-xs italic text-red-500">
                    {errors.code.message}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-y-1">
                <label>Percentage</label>
                <Input
                  type="number"
                  placeholder="entre percentage .."
                  {...register("percentage")}
                  // className={cn(
                  //   errors.title
                  //     ? "focus:border-red-400"
                  //     : "focus:border-green-400"
                  // )}
                />
                {error ? (
                  <p className="text-xs italic text-red-500">
                    {error}
                  </p>
                ) : null}
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

export default CreateCoupon;
