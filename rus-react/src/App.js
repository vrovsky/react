import React, { Component } from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
  ]);

  function toggleTodo(id) {
    let [];
  }
  return (
    <div className="wrapper">
      <h1>Tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
