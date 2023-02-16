import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

interface TodoState {
  id: string;
  title: string;
  status: string;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);

  const handleDeleteTodo = (id: string) => {
    const newTodoList = todos.filter((item) => item.id !== id);
    setTodos(newTodoList);
  };

  const handleDoneTodo = (id: string) => {
    console.log(id);
  };

  return (
    <div className='bg-white p-5 rounded-md shadow-md w-full max-w-3xl'>
      <AddTodo setTasks={setTodos} data={todos} />
      <Todos data={todos} onDelete={handleDeleteTodo} onDone={handleDoneTodo} />
    </div>
  );
};

export default Todo;
