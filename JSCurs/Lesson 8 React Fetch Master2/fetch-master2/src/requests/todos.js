export const getTodos = (callback) => {
  fetch("https://dummyjson.com/todos")
    .then((resp) => resp.json())
    .then((json) => callback(json.todos));
};

export const addToDos = (body, callback) => {
  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  })
    .then((resp) => resp.json())
    .then((json) => callback(json));
};

// https://dummyjson.com/todos
