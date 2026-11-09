import { Product } from "../types/get-products.types";

const API_BASE_URL = process.env.REACT_APP_API_URL ?? "https://fakestoreapi.com";

export async function GetProducts(signal?: AbortSignal): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, { signal });
  if (!res.ok) {
    throw new Error("Houve um erro ao buscar produtos");
  }
  return res.json();
}

