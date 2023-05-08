import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";

import ProductDetail from "./pages/product-detail";
import AddProductForm from "./pages/create-product";

function App() {
  const [products, setProduct] = useState([]);

  // `${process.env.REACT_APP_BASE_URL}/products/${id}`

  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/products`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/add-product" element={<AddProductForm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
