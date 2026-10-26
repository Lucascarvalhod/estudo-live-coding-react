import { GetProducts } from "../services/fet-products";
import { useState, useEffect } from "react";
import { GetProductsTypes, Product } from "../types/get-products.types";

let productsCache: Product[] | null = null;

export const useGetProducts = (): GetProductsTypes => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        if (productsCache) {
          setData(productsCache);
          return;
        }

        const products = await GetProducts(controller.signal);

        productsCache = products;
        setData(products);
      } catch (err: unknown) {
        if (!controller.signal.aborted) {
          setError(
            err instanceof Error ? err.message : "Erro ao buscar produtos"
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, loading, error };
};