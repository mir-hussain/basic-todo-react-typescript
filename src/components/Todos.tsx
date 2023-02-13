import React from "react";

const Todos = () => {
  return (
    <div className='bg-white p-5 rounded-md shadow-md w-full max-w-3xl'>
      <p className='mb-2 text-gray-400 text-sm'>Add Todos</p>
      <div className='bg-gradient-to-r h-11 w-full from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-md inset-0 '>
        <input
          className='h-full w-full rounded outline-none border-none p-2'
          type='text'
        />
      </div>
    </div>
  );
};

export default Todos;
