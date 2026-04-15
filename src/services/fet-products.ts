import { Product } from "../types/get-products.types";

export async function GetProducts(signal?:AbortController):Promise<Product[]>{
const res = await fetch("https://fakestoreapi.com/products",signal);
if(!res.ok){
    throw new Error("houve um erro de busca")
} return res.json();
}