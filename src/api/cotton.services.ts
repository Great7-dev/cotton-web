import { useMutation, useQuery } from "@tanstack/react-query";

import api from "./api.services";

import { ContactPayload, ProviderDetails } from "@/utils/data_types";
import { SubscriberPayload } from "@/utils/data_types/general_types";
function CottonServices() {
  const useRequestServices = () => {
    return useMutation({
      mutationKey: ["request-services"],
      mutationFn: async (servicesPayload: FormData) => {
        return await api.post("/organization-service-request", servicesPayload);
      },
      retry: false,
    });
  };

  const useGetAllServices = (page = 1, limit = 10, search = "") => {
    const fetchData = async () => {
      const baseUrl = `/services/user?page=${page}&limit=${limit}`;
      const url = search ? `${baseUrl}&search=${search}` : baseUrl;

      const { data } = await api.get(url);

      return data || { services: [], total: 0 };
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: ["all_services", page, limit, search],
      enabled: false,
    });
  };

  const useCreateServiceOrder = () => {
    return useMutation({
      mutationKey: ["creat-service-order"],
      mutationFn: async (servicesPayload: Record<string, string>) => {
        return await api.post("/cotton-service/orders/web", servicesPayload);
      },
      retry: false,
    });
  };

  const useCreateProvider = () => {
    return useMutation({
      mutationKey: ["provider-details"],
      mutationFn: async (provierPayload: ProviderDetails) => {
        return await api.post("/cotton-service/providers/web", provierPayload);
      },
      retry: false,
    });
  };

  const useContactUs = () => {
    return useMutation({
      mutationKey: ["contact-us"],
      mutationFn: async (contactPayload: ContactPayload) => {
        return await api.post("/cotton-service/contact-us", contactPayload);
      },
      retry: false,
    });
  };

  const useBlogSubscriber = () => {
    return useMutation({
      mutationKey: ["blog-subscriber"],
      mutationFn: async (subscriberPayload: SubscriberPayload) => {
        return await api.post("/cotton-service/subscribers", subscriberPayload);
      },
      retry: false,
    });
  };

  return {
    useRequestServices,
    useGetAllServices,
    useCreateServiceOrder,
    useCreateProvider,
    useContactUs,
    useBlogSubscriber,
  };
}
export default CottonServices;
