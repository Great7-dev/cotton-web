import { useMutation } from "@tanstack/react-query";

import api from "./api.services";

function UserServices() {
  const useAddWaitingList = () => {
    return useMutation({
      mutationKey: ["add-waitlist"],
      mutationFn: async (userDetails: Record<string, string>) => {
        return await api.post("/waiting-list", userDetails);
      },
      retry: false,
    });
  };

  const useDeleteAccount = () => {
    return useMutation({
      mutationKey: ["delete-account"],
      mutationFn: async (deletePayload: Record<string, string>) => {
        return await api.post("/users/delete-request", deletePayload);
      },
      retry: false,
    });
  };

  return {
    useAddWaitingList,
    useDeleteAccount,
  };
}
export default UserServices;
