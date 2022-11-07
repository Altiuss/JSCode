import React from "react";
import "./add_form.css";

export default function AddPostForm({ add_card }) {
  const form_submit = (event) => {
    event.preventDefault();
    const { rus, eng } = event.target;
    add_card(rus.value, eng.value);
    rus.value = "";
    eng.value = "";
  };

  return (
    <div>
      <form onSubmit={form_submit} className="add_form">
        <input type="text" placeholder="Russian" name="rus" />
        <input type="text" placeholder="English" name="eng" />
        <button>Add</button>
      </form>
    </div>
  );
}
