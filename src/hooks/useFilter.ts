import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useGetProducts } from "./useGetProducts";

export function useFilter() {
  const { data, loading, error } = useGetProducts();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 600);

  const normalizedQuery = debouncedQuery.trim().toLocaleLowerCase();
  const filteredProducts = useMemo(
    () =>
      data.filter((product) =>
        product.title.toLocaleLowerCase().includes(normalizedQuery)
      ),
    [data, normalizedQuery]
  );

  return { filteredProducts, query, setQuery, loading, error };
}