import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className='bg-gray-50 h-screen flex items-center justify-center  '>
      <Todo />
    </div>
  );
}

export default App;
