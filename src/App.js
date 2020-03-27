import React from "react";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
