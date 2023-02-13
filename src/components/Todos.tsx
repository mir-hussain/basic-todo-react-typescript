import React from "react";

interface IProps {
  data: {
    id: string;
    title: string;
  }[];
}

const Todos: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map(({ id, title }) => (
        <h1 key={id}>{title}</h1>
      ))}
    </div>
  );
};

export default Todos;
