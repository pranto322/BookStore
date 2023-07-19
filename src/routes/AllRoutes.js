import { Routes,Route } from "react-router-dom";
import {HomePage,ProductsList,ProductDetail, Login, Register,CartPage} from "../pages";

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<CartPage />} />
    </Routes>
    </>
  )
}

export default AllRoutes
