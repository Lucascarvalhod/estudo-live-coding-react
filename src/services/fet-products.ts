import { Product } from "../types/get-products.types";

export async function GetProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products",{signal,});

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}