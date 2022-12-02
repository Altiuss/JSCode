import { useState, useEffect } from "react";
import { getProducts } from "../../requests/products";
import { getUsers } from "../../requests/users";
import { Context } from "../../context";
import MainPage from "../../pages/MainPage";
import ProductsPage from "../../pages/ProductsPage";
import UsersPage from "../../pages/UsersPage";
import { Routes, Route } from "react-router-dom";
import "../../style.css";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    getUsers(setUsers);
  }, []);

  const createNewProduct = product => setProducts(prev => [...prev, product]);

  return (
    <div>
      <Context.Provider value={{ products, users,createNewProduct }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
