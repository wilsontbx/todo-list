import "./App.css";
import Todolist from "./components/Todolist";
// import TodoListClass from "./components/TodolistClass";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const initial = [
  [
    { id: uuidv4(), name: "Buy Milk", isDone: false },
    { id: uuidv4(), name: "Do push up", isDone: true },
  ],
];
function App() {
  const [list, setList] = useState(initial);
  function handleAddList(e) {
    list.push([]);
    const updateList = [...list];
    setList([...updateList]);
  }
  return (
    <div>
      <div className="App">
        <Typography variant="h4">Todo List</Typography>
        <span className="todo-menu" onClick={(e) => handleAddList(e)}>
          <AddCircleIcon fontSize="large" />
        </span>
      </div>
      <div className="App">
        {list.map((element, index) => (
          <Todolist
            list={element}
            index={index}
            setList={setList}
            allList={list}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
