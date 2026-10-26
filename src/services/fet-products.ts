import { Product } from "../types/get-products.types";

export async function GetProducts(signal?: AbortSignal): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", { signal });
  if (!res.ok) {
    throw new Error("Houve um erro ao buscar produtos");
  }
  return res.json();
}