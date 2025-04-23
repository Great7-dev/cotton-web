/** @format */

"use client";
import { useState } from "react";
import { useDisclosure } from "@heroui/modal";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { CottonServices } from "../../api";
import {
  setServiceOrderPayload,
  setShowOrderDetails,
} from "@/store/Slices/serviceSlice";
// import {
//   setServiceOrderPayload,
//   setShowOrderDetails,
// } from "../../store";

function useOrderService() {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [searchServices, setSearchServices] = useState("");
  const { mutateAsync: createServiceOrder, isPending: orderPending } =
    CottonServices().useCreateServiceOrder();
  const { data: allServices, isLoading: servicesLoading } =
    CottonServices().useGetAllServices(1, 10, searchServices);

  const [serviceDetails, setServiceDetails] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    // serviceId: "",
    orderDetails: "",
    serviceDescription: "",
  });

  const resetForm = () => {
    setServiceDetails({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      // serviceId: "",
      orderDetails: "",
      serviceDescription: "",
    });
  };

  const getSelectedService = (serviceId: string) => {
    return allServices.services.filter(
      (service: { id: string }) => service.id === serviceId
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const prepPayload = {
        ...serviceDetails,
        fullName: serviceDetails.firstName + " " + serviceDetails.lastName,
      };

      await createServiceOrder(prepPayload);
      dispatch(setShowOrderDetails(true));
      dispatch(
        setServiceOrderPayload({
          ...serviceDetails,
          service: serviceDetails.serviceId
            ? getSelectedService(serviceDetails.serviceId)[0]?.name
            : serviceDetails.serviceDescription,
        })
      );
      resetForm();
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(
        error.response.data.message || "Oops! an error occurred, try again",
        { duration: 6000 }
      );
      setErrorMessage("Oops! an error occurred, try again");
    }
  };

  return {
    handleSubmit,
    onOpen,
    onOpenChange,
    setServiceDetails,
    setSearchServices,
    orderPending,
    serviceDetails,
    isOpen,
    errorMessage,
    allServices,
    servicesLoading,
  };
}

export default useOrderService;
