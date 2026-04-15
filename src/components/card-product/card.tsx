import * as style from "./style"
import { Product } from "../../types/get-products.types";

interface CardProductProps {
  product: Product;
}

export const CardProduct =({product}:CardProductProps)=>{
    return(
        <style.Container> 
            
            <style.Image src={product.Image} />
            
            {/* <style.Description >
                {product.description}
            </style.Description> */}

            <style.Price>
                {product.price}
            </style.Price>
            
            <style.Button>
                Adicionar ao carrinho
            </style.Button>
            
        </style.Container>
    )
}