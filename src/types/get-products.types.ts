export type Product = {
    id:string;
    title:string;
    price:number
    image:string;
}

export type GetProductsTypes = {
    data:Product[];
    loading:boolean;
    error:string | null;
}