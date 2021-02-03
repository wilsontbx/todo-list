import React from "react";
import "./TodoItem.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const TodoItem = ({ name, isDone, setTodo, deleteTodo }) => (
  <div className="todo-item">
    {/*on clicking the circle, toggle the status of the todo item*/}
    <span className="todo-item__completed" onClick={() => setTodo(!isDone)}>
      {isDone ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
    </span>
    <span className="todo-item__name">{name}</span>
    <span onClick={() => deleteTodo()} className="todo-item__delete">
      {" "}
      <DeleteIcon />
    </span>
  </div>
);

export default TodoItem;
