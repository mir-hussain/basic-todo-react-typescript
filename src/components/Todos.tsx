import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

interface IProps {
  data: {
    id: string;
    title: string;
    status: string;
  }[];
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
}

const Todos: React.FC<IProps> = ({ data, onDelete, onDone }) => {
  return (
    <div>
      {data.map(({ id, title }) => (
        <div className='flex justify-between gap-3 mt-5'>
          <h1 key={id} className='flex-auto'>
            {title}
          </h1>
          <button
            onClick={() => onDone(id)}
            title='Done'
            className='bg-green-500 p-1 rounded'
          >
            <BiCheck size='20' color='white' />
          </button>
          <button
            onClick={() => onDelete(id)}
            title='Delete'
            className='bg-red-500 p-1 rounded'
          >
            <AiOutlineDelete size='20' color='white' />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
