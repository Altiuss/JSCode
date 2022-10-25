import User from "./User";
import { users } from "../data/users";
import { products } from "../data/products";
import Products from "./Products";

function App() {
  return (
    <div>
      <User firstname=" Oleg" lastname=" Petrov" age=" 50" />
      <User firstname=" Irina" lastname=" Ivanova" age=" 10" />
      <User firstname=" Aigars" lastname=" Alutis" age=" 47" />

      {users.map((el) => (
        <User firstname={el.firstname} lastname={el.lastname} age={el.age} />
      ))}
      <h2>Users</h2>
      {users.map((el) => (
        <User {...el} key={el.id} />
      ))}

      <h2>Products</h2>

      {products.map((el) => (
        <Products {...el} key={el.id} />
      ))}
    </div>
  );
}

export default App;
