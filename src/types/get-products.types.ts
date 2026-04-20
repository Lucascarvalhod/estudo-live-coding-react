export type Product = {
    id:number;
    title:string;
    price:number
    image:string;
    description:string;
}

export type GetProductsTypes = {
    data:Product[];
    loading:boolean;
    error:string | null;
}