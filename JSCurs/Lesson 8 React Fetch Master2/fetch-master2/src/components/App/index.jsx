import { useState, useEffect } from "react";
import { getProducts } from "../../requests/products";
import { getUsers } from "../../requests/users";
import { getTodos } from "../../requests/todos";
import { Context } from "../../context";
import MainPage from "../../pages/MainPage";
import ProductsPage from "../../pages/ProductsPage";
import UsersPage from "../../pages/UsersPage";
import ToDoPage from "../../pages/ToDoPage";
import { Routes, Route } from "react-router-dom";
import "../../style.css";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    getUsers(setUsers);
    getTodos(setTodos);
  }, []);

  const createNewProduct = (product) =>
    setProducts((prev) => [...prev, product]);
  const createNewUsers = (user) => setUsers((prev) => [...prev, user]);
  const createNewToDos = (todos) => setTodos((prev) => [...prev, todos]);

  return (
    <div>
      <Context.Provider
        value={{ products, users, createNewProduct, createNewUsers, createNewToDos, todos }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/toDo" element={<ToDoPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
