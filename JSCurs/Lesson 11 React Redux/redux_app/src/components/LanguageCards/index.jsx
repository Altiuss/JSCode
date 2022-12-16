import React from "react";

export default function LanguageCards() {
  const submit = (event) => {
    event.preventDefault();
    const { eng, rus } = event.target;
    console.log({
      rus: rus.value,
      eng: eng.value,
    });
    rus.value = "";
    eng.value = "";
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" name="rus" placeholder="RUS" />
        <input type="text" name="eng" placeholder="ENG" />
        <button>Add</button>
      </form>
      <div></div>
    </div>
  );
}
