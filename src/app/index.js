import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/home';
import Login from '../pages/login';
import OrderManagment from '../pages/orders-management';
import ProductManagment from '../pages/product-management';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ordermanagment' element={<OrderManagment/>}/>
        <Route path='/productmanagment' element={<ProductManagment/>}/>
      </Routes>
    </div>
  );
}

export default App;
