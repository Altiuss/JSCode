import { todo } from "./data";
import ToDoContainer from "./ToDoContainer";

function App() {
  console.log(todo);

  return (
    <div>
      <ToDoContainer
        prop_1={"test_1"}
        prop_2={"test_2"}
        prop_3={"test_3"}
        prop_4={"test_4"}
      />
    </div>
  );
}

export default App;
