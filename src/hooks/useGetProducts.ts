import { GetProducts } from "../services/fetch-products";
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
        setLoading(true);           //Informar que o sistema está processando a operação.
        setError(null);             //Limpar mensagens de falhas anteriores antes de uma nova tentativa.

        if (productsCache) {        //Verificar se os dados já estão disponíveis no armazenamento temporário.
          setData(productsCache);   //Reaproveitar os dados existentes para apresentar os produtos ao cliente.
          return;                   //Encerrar o fluxo, evitando uma nova consulta desnecessária à API.
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