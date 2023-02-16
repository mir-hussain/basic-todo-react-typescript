import React, { FormEvent, SetStateAction, useRef } from "react";

interface IProps {
  data: { id: string; title: string }[];
  setTasks: React.Dispatch<
    SetStateAction<{ id: string; title: string; status: string }[]>
  >;
}

const AddTodo: React.FC<IProps> = ({ setTasks }) => {
  let inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let input: string = inputRef.current!.value;
    const id = Math.random().toString(36).substring(2, 8);
    setTasks((prvState) => [
      ...prvState,
      { id, title: input, status: "pending" },
    ]);
    inputRef.current!.value = "";
  };

  return (
    <div>
      <p className='mb-2 text-gray-400 text-sm'>Add Todos</p>
      <form onSubmit={handleSubmit}>
        <div className='bg-gradient-to-r h-11 w-full from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-md inset-0 '>
          <input
            ref={inputRef}
            className='h-full w-full rounded outline-none border-none p-2'
            type='text'
          />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
