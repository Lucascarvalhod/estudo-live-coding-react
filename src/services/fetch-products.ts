import { Product } from "../types/get-products.types";

// Permite trocar a API consumida (ex.: ambiente de testes/staging) sem
// alterar código, com a Fake Store API como padrão.
const API_BASE_URL = process.env.REACT_APP_API_URL ?? "https://fakestoreapi.com";

export async function GetProducts(signal?: AbortSignal): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, { signal });
  if (!res.ok) {
    throw new Error("Houve um erro ao buscar produtos");
  }
  return res.json();
}