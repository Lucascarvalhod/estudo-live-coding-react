import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/page';
import { CartPage } from './pages/cart/page';
import  Register  from './pages/register/page';

function App() {
return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/register' element={<Register/>} />
  </Routes>
  );
}

export default App;
