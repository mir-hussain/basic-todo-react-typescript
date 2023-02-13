import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

const Todo = () => {
  const [todos, setTodos] = useState([{ id: "t1", title: "Some work" }]);
  return (
    <div className='bg-white p-5 rounded-md shadow-md w-full max-w-3xl'>
      <AddTodo />
      <Todos data={todos} />
    </div>
  );
};

export default Todo;
