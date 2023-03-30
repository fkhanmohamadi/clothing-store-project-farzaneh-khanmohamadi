import Cookies from "js-cookie";
import react, { lazy, useEffect } from "react";
import { Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ProductManagementModal from "../components/product-management-modal";
import HomeScreen from "../pages/home";
import Login from "../pages/login";
import Payment from "../pages/payment";
import Product from "../pages/product";
import Products from "../pages/products";
import Checkout from "../pages/checkout";
import ProductManagment from "../pages/product-management";
import QuantityManagment from "../pages/quantity-management";
import PaymentResult from "../pages/payment-result-fail";
import PaymentResultSuccess from "../pages/payment-result-success";
import "./index.css";
const OrdersManagment = lazy(()=>import("../pages/orders-management"))

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname == "/login" && Cookies.get("token")) {
      navigate("/ordersmanagment");
    }
    if (pathname == "/productmanagment" && !Cookies.get("token")) {
      navigate("/login");
    }
    if (pathname == "/quantitymanagement" && !Cookies.get("token")) {
      navigate("/login");
    }
    if (pathname == "/ordersmanagment" && !Cookies.get("token")) {
      navigate("/login");
    }
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ordersmanagment" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <OrdersManagment />
          </Suspense>
        } />
        <Route path="/productmanagment" element={<ProductManagment />} />
        <Route path="/quantitymanagement" element={<QuantityManagment />} />
        <Route path="/productmanagementmodal" element={<ProductManagementModal/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/paymentresult" element={<PaymentResult/>}/>
        <Route path="/paymentresultsuccess" element={<PaymentResultSuccess/>}/>

      </Routes>
    </div>
  );
}

export default App;
