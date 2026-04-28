import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/page';
import { CartPage } from './pages/cart/page';

function App() {
return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartPage/>} />
  </Routes>
  );
}

export default App;
