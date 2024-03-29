import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes , Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
    <Navbar />
    <Routes >
    <Route  path='/Ecommerce' element={<Home/>} />
    <Route  path='/products' element={<Products/>} />
    <Route  path='/products/:id' element={<Product/>} />


    </Routes > 
    </>
  );
}

export default App;
