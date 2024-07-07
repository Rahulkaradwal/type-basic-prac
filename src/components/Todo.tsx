import React from 'react';

const Todo: React.FC<{ item: string[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
