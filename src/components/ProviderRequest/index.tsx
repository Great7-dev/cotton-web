"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Link } from "@heroui/link";
import { cn } from "@heroui/theme";

import useProviderRequest from "./useProviderRequest";
import CottonLogo from "../CottonLogo";
import CottonLabel from "../CottonLabel";



interface Props {
  fullWidth?: boolean;
  className?: string;
}

const ProviderRequest = ({ fullWidth = false, className }: Props) => {
  const {
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
  } = useProviderRequest();

  return (
    <>
      <Button
        className={cn("text-foreground-600 border-foreground-200", className)}
        color="primary"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        fullWidth={fullWidth}
        variant="bordered"
        onPress={onOpen}
      >
        Provide Service
      </Button>
      <Modal
        backdrop="blur"
        className="p-4 rounded-xl "
        classNames={{
          wrapper: "md:p-4 p-0",
        }}
        isDismissable={false}
        isOpen={isOpen}
        scrollBehavior="outside"
        size="xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col p-0">
                <CottonLogo />
                <div className="mt-4">
                  <div className="font-semibold text-base text-foreground mb-1">
                    Tell us about your services
                  </div>
                  <div className="text-foreground-600 text-xs ">
                    Kindly provide the information below to register your
                    services and express your interest in working with us.
                  </div>
                </div>
              </ModalHeader>
              <ModalBody className="p-0 mt-4 text-foreground">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-start md:flex-row mt-4 flex-col justify-between gap-4">
                    <Input
                      fullWidth
                      classNames={{
                        input: "text-base",
                      }}
                      errorMessage={errorMessage}
                      isRequired={true}
                      label="First Name"
                      labelPlacement="outside"
                      placeholder="Type your first name"
                      radius="sm"
                      startContent={
                        <Icon
                          className="text-foreground-400"
                          icon="ri:user-6-fill"
                        />
                      }
                      validationBehavior="native"
                      value={providerDetails.firstName}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setProviderDetails((prev) => ({
                          ...prev,
                          firstName: value,
                        }))
                      }
                    />
                    <Input
                      fullWidth
                      classNames={{
                        input: "text-base",
                      }}
                      errorMessage={errorMessage}
                      isRequired={true}
                      label="Last Name"
                      labelPlacement="outside"
                      placeholder="Type your last name"
                      radius="sm"
                      startContent={
                        <Icon
                          className="text-foreground-400"
                          icon="ri:user-6-fill"
                        />
                      }
                      validationBehavior="native"
                      value={providerDetails.lastName}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setProviderDetails((prev) => ({
                          ...prev,
                          lastName: value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-start md:flex-row mt-4 flex-col justify-between gap-4">
                    <Input
                      fullWidth
                      classNames={{
                        input: "text-base",
                      }}
                      errorMessage={errorMessage}
                      isRequired={true}
                      label="Phone number"
                      labelPlacement="outside"
                      placeholder="(+234) 8011 111 111"
                      radius="sm"
                      startContent={
                        <Icon
                          className="text-foreground-400"
                          icon="ri:phone-fill"
                        />
                      }
                      validationBehavior="native"
                      value={providerDetails.phoneNumber}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setProviderDetails((prev) => ({
                          ...prev,
                          phoneNumber: value,
                        }))
                      }
                    />
                    <Input
                      fullWidth
                      classNames={{
                        input: "text-base",
                      }}
                      errorMessage={errorMessage}
                      label={
                        <div className="flex items-center space-x-2">
                          <span>Email</span>{" "}
                          <span className="text-red-500 text-xs">
                            | Optional
                          </span>
                        </div>
                      }
                      labelPlacement="outside"
                      placeholder="Type your email"
                      radius="sm"
                      startContent={
                        <Icon
                          className="text-foreground-400"
                          icon="ri:mail-line"
                        />
                      }
                      type="email"
                      validationBehavior="native"
                      value={providerDetails.email}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setProviderDetails((prev) => ({
                          ...prev,
                          email: value,
                        }))
                      }
                    />
                  </div>
                  <Input
                    fullWidth
                    classNames={{
                      mainWrapper: "mt-4",
                      input: "text-base",
                    }}
                    description="Separate your items by comma (,)"
                    errorMessage={errorMessage}
                    isRequired={true}
                    label="Service Category"
                    labelPlacement="outside"
                    placeholder="Plumbing, Cleaning, Electrical, etc."
                    radius="sm"
                    startContent={
                      <Icon
                        className="text-foreground-400"
                        icon="ri:user-location-fill"
                      />
                    }
                    validationBehavior="native"
                    value={providerDetails.serviceCategory as string}
                    variant="bordered"
                    onValueChange={(value: string) =>
                      setProviderDetails((prev) => ({
                        ...prev,
                        serviceCategory: value,
                      }))
                    }
                  />
                  <div className="mt-4 space-x-2 flex items-start">
                    <input
                      checked={providerDetails.termsAndConditions}
                      className="mt-0.5"
                      type="checkbox"
                      onChange={(e) => {
                        setProviderDetails({
                          ...providerDetails,
                          termsAndConditions: e.target.checked,
                        });
                        setTermsError(false);
                      }}
                    />
                    <div className=" flex flex-col ">
                      <span
                        className={`${termsError ? "text-red-500 dark:text-red-100" : "text-foreground-600"} text-xs`}
                      >
                        I agree to the{" "}
                        <Link className="text-xs" href="/terms" target="_blank">
                          terms and conditions
                        </Link>{" "}
                        and verify the provided information is accurate.
                      </span>
                      {termsError && (
                        <small className="text-red-500 dark:text-red-100 text-xs italic md:mt-0 mt-2">
                          Read and accept our terms and condition
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="p-0 mt-6 flex-col items-center space-y-4 ">
                    <Button
                      fullWidth
                      color="primary"
                      isLoading={providerLoading}
                      type="submit"
                    >
                      {!providerLoading && <span>Register to Work</span>}
                    </Button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter className="flex items-center justify-center flex-row">
                <CottonLabel />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProviderRequest;
