import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

interface TodoState {
  id: string;
  title: string;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);
  return (
    <div className='bg-white p-5 rounded-md shadow-md w-full max-w-3xl'>
      <AddTodo setTasks={setTodos} data={todos} />
      <Todos data={todos} />
    </div>
  );
};

export default Todo;
