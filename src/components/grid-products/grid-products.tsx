import * as styled from "./style";
import { CardProduct } from "../card-product/card";
import { useFilter } from "../../hooks/useFilter";
import { SearchComponent } from "../filter/search-component";

export const GridProducts = ()=>{
const {filteredProducts, query, setQuery, loading, error} = useFilter();


if(loading){
    return <div>Carregando produtos...</div>
}

if(error){
   return <span>Não foi possível carregar os produtos: {error}</span>
}

    return(
        <div>
        <SearchComponent query={query} setQuery={setQuery} />
        {filteredProducts.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          <styled.Container>
            {filteredProducts.map((item)=>(
                <CardProduct key={item.id} product={item}/>
            ))}
          </styled.Container>
        )}
        </div>
    )
}

  