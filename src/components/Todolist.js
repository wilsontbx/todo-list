import React, { useEffect, useState } from "react";

function Todolist() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([
      { name: "Buy Milk", isDone: false },
      { name: "Do push up", isDone: true },
    ]);
  }, []);

  function displayTodos() {
    return todos.map((todo) => (
      <div>
        <span>{todo.name}</span>
        <span>{todo.isDone ? " - completed" : " - not completed"}</span>
      </div>
    ));
  }

  return (
    <div>
      <div>Todolist</div>
      <div>{displayTodos()}</div>
    </div>
  );
}

export default Todolist;
