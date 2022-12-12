import Button from "./components/Button";
import FormExamle from "./components/FormExamle";
import FormItem from "./components/FormItem";
import Modal from "./components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Link to="/registration_form" style={{ textDecoration: "none" }}>
        <Button color={"yellow"} onClick={() => setModal(true)}>
          Open modal Window{" "}
        </Button>
      </Link>
      <Modal modal={modal} setModal={setModal} />

      {/* <FormExamle /> */}
    </div>
  );
}

export default App;
