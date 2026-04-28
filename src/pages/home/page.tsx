import { GridProducts } from '../../components/grid-products/grid-products';
import { Header } from '../../components/header/header';

export const Home = ()=>{
    return(
    <div className="App">
      <Header />
      <GridProducts  />
    </div>
    )
}