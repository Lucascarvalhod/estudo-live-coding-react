import { Product } from "../types/get-products.types";

const url = "https://dummyjson.com/products";

type ApiProduct = Omit<Product, "image"> & { thumbnail: string };
type ProductsResponse = { products: ApiProduct[] };

export async function GetProducts(signal?: AbortSignal): Promise<Product[]> {
  const res = await fetch(url, { signal });

  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const body: ProductsResponse = await res.json();
  return body.products.map(({ thumbnail, ...product }) => ({
    ...product,
    image: thumbnail,
  }));
}