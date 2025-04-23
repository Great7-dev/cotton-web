/** @format */

"use client";
import { useState } from "react";
import { useDisclosure } from "@heroui/modal";
import toast from "react-hot-toast";

import { CottonServices } from "../../api";
import { ProviderDetails } from "@/utils/data_types";

function useProviderRequest() {
  const [errorMessage, setErrorMessage] = useState("");
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [termsError, setTermsError] = useState(false);
  const { mutateAsync: createProvider, isPending: providerLoading } =
    CottonServices().useCreateProvider();

  const [providerDetails, setProviderDetails] = useState<ProviderDetails>({
    firstName: "",
    lastName: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceCategory: "",
    termsAndConditions: false,
  });

  const resetForm = () => {
    setProviderDetails({
      firstName: "",
      lastName: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      serviceCategory: "",
      termsAndConditions: false,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!providerDetails.termsAndConditions) {
      setTermsError(true);

      return;
    }
    try {
      const prepPayload = {
        ...providerDetails,
        fullName: providerDetails.firstName + " " + providerDetails.lastName,
        serviceCategory: String(providerDetails.serviceCategory).split(", "),
      };

      if (!prepPayload.email) {
        delete prepPayload.email;
      }
      const response = await createProvider(prepPayload);

      toast.success(response.data.message ?? "Details sent successfully");
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
    setProviderDetails,
    setTermsError,
    termsError,
    providerDetails,
    providerLoading,
    isOpen,
    errorMessage,
  };
}

export default useProviderRequest;
