"use client";

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

import useOrderService from "./useOrderService";
import CottonLogo from "../CottonLogo";
import CottonLabel from "../CottonLabel";

// import { CottonLabel, CottonLogo } from "@/components";

interface Props {
  fullWidth?: boolean;
}

const OrderService = ({ fullWidth = false }: Props) => {
  const {
    handleSubmit,
    onOpen,
    onOpenChange,
    setServiceDetails,
    orderPending,
    serviceDetails,
    isOpen,
    errorMessage,
  } = useOrderService();

  return (
    <>
      <Button
        className={` text-white`}
        color="primary"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        fullWidth={fullWidth}
        onPress={onOpen}
      >
        Order Service
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
                    Let us know what you need
                  </div>
                  <div className="text-foreground-600 text-xs ">
                    Kindly provide the information below to process your order.
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
                      isRequired={true}
                      label="First name"
                      labelPlacement="outside"
                      minLength={2}
                      placeholder="Type your first name"
                      radius="sm"
                      startContent={
                        <Icon
                          className="text-foreground-400"
                          icon="ri:user-6-fill"
                        />
                      }
                      validationBehavior="native"
                      value={serviceDetails.firstName}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setServiceDetails((prev) => ({
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
                      isRequired={true}
                      label="Last name"
                      labelPlacement="outside"
                      minLength={2}
                      placeholder="Type your last name"
                      radius="sm"
                      startContent={
                        <Icon
                          className="text-foreground-400"
                          icon="ri:user-6-fill"
                        />
                      }
                      validationBehavior="native"
                      value={serviceDetails.lastName}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setServiceDetails((prev) => ({
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
                      value={serviceDetails.phoneNumber}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setServiceDetails((prev) => ({
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
                      isRequired={true}
                      label="Email"
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
                      value={serviceDetails.email}
                      variant="bordered"
                      onValueChange={(value: string) =>
                        setServiceDetails((prev) => ({ ...prev, email: value }))
                      }
                    />
                  </div>
                  <Input
                    fullWidth
                    classNames={{
                      mainWrapper: "mt-4",
                      input: "text-base",
                    }}
                    errorMessage={errorMessage}
                    isRequired={true}
                    label="Address"
                    labelPlacement="outside"
                    placeholder="Type your address"
                    radius="sm"
                    startContent={
                      <Icon
                        className="text-foreground-400"
                        icon="ri:user-location-fill"
                      />
                    }
                    validationBehavior="native"
                    value={serviceDetails.address}
                    variant="bordered"
                    onValueChange={(value: string) =>
                      setServiceDetails((prev) => ({ ...prev, address: value }))
                    }
                  />

                  <Input
                    fullWidth
                    classNames={{
                      mainWrapper: "mt-4",
                      input: "text-base",
                    }}
                    errorMessage={errorMessage}
                    isRequired={true}
                    label="Service"
                    labelPlacement="outside"
                    placeholder="Type the service you need"
                    radius="sm"
                    validationBehavior="native"
                    value={serviceDetails.serviceDescription ?? ""}
                    variant="bordered"
                    onValueChange={(value: string) =>
                      setServiceDetails((prev) => ({
                        ...prev,
                        serviceDescription: value,
                      }))
                    }
                  />

                  <Textarea
                    fullWidth
                    classNames={{
                      base: "mt-4",
                      input: "text-base",
                    }}
                    isRequired={serviceDetails.serviceId === "others"}
                    label={
                      <>
                        <span className="text-foreground font-medium text-sm">
                          Additional order details
                        </span>{" "}
                        {serviceDetails.serviceId !== "others" && (
                          <span className="text-foreground-600 font-normal text-sm">
                            (Optional)
                          </span>
                        )}
                      </>
                    }
                    labelPlacement="outside"
                    placeholder="Kindly provide us with any additional info about the serice you need"
                    validationBehavior="native"
                    value={serviceDetails.orderDetails}
                    variant="bordered"
                    onValueChange={(value) =>
                      setServiceDetails((prev) => ({
                        ...prev,
                        orderDetails: value,
                      }))
                    }
                  />
                  <div className="p-0 mt-6 flex-col items-center space-y-4 ">
                    <Button
                      fullWidth
                      color="primary"
                      isLoading={orderPending}
                      type="submit"
                    >
                      {!orderPending && <span>Order Serivce</span>}
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

export default OrderService;
