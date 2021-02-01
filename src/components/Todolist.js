import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

function Todolist() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([
      { id: uuidv4(), name: "Buy Milk", isDone: false },
      { id: uuidv4(), name: "Do push up", isDone: true },
    ]);
  }, []);

  function displayTodos() {
    return todos.map((todo) => {
      const setTodo = (isDone) => {
        const newTodo = todos;
        newTodo.forEach((todoToFilter) => {
          if (todoToFilter.id === todo.id) {
            return (todoToFilter.isDone = isDone);
          }
          return todoToFilter;
        });

        setTodos(newTodo);
        console.log(newTodo);
      };

      return (
        <TodoItem name={todo.name} isDone={todo.isDone} setTodo={setTodo} />
      );
    });
  }

  return (
    <div className="todo-section">
      <div>Todolist functional</div>
      <div>{displayTodos()}</div>
    </div>
  );
}

export default Todolist;
