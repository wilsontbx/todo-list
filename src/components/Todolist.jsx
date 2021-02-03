import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@material-ui/core";
import Editable from "./Editable";
import "./Todolist.css";
import CancelIcon from "@material-ui/icons/Cancel";

function Todolist(props) {
  const { list, index, setList, allList } = props;
  const [todos, setTodos] = useState(list);
  const [newItemName, setNewItemName] = useState("");
  const [task, setTask] = useState("");

  function displayTodos() {
    return todos.map((todo) => {
      const setTodo = (isDone) => {
        const newTodo = [...todos];
        newTodo.forEach((todoToFilter) => {
          if (todoToFilter.id === todo.id) {
            todoToFilter.isDone = isDone;
          }
        });
        setTodos(newTodo);
      };

      const deleteTodo = () => {
        const todosWithoutItem = todos.filter(
          (todoToFilter) => todoToFilter.id !== todo.id
        );
        setTodos(todosWithoutItem);
      };

      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
        />
      );
    });
  }
  function handleChange(e) {
    setNewItemName(e.target.value);
  }

  function addNewTodo() {
    if (!newItemName || !newItemName.length) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: newItemName,
        isDone: false,
      },
    ]);
    setNewItemName("");
  }
  function handleDelete(index) {
    console.log(index);
    allList.splice(index, 1);
    const updateAllList = [...allList];
    console.log(updateAllList);
    setList(updateAllList);
  }
  return (
    <div className="todo-section">
      <div className="todo-menu ">
        <Editable
          text={task}
          placeholder="Write a name for Todolist"
          type="input"
        >
          <input
            type="text"
            name="task"
            placeholder="Write a name for Todolist"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Editable>
        <span className="todo-menu_add" onClick={() => handleDelete(index)}>
          <CancelIcon />
        </span>
      </div>
      <TextField
        id="standard-basic"
        label="Take a break"
        variant="outlined"
        type="text"
        value={newItemName}
        onChange={handleChange}
        size="small"
      />
      <Button onClick={addNewTodo} variant="contained" color="primary">
        add
      </Button>
      <div>{displayTodos()}</div>
    </div>
  );
}

export default Todolist;
