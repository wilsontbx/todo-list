import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

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
        <TodoItem name={todo.name} isDone={todo.isDone} />
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
