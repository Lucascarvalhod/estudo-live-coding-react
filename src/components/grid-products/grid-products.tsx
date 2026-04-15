import * as styled from "./style";
import { CardProduct } from "../card-product/card";
import { useGetProducts } from "../../hooks/useGetProducts";

export const GridProducts = ()=>{

const {data, loading, error} = useGetProducts();

if(loading){
    return <div>carrgando ... </div>
}

if(error){
   return <span>houve algum problama</span>
}

console.log(data)
    return(
        <styled.Container>
          {
            data.map((item)=>(
                <CardProduct key={item.id} product={item}/>
            ))
          }
        </styled.Container>
    )
}

  