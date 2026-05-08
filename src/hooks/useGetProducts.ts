import { useQuery } from "@tanstack/react-query";
import { GetProducts } from "../services/fet-products";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],

    queryFn: ({ signal }) => GetProducts(signal),

    staleTime: 1000 * 60 * 5,
  });
};