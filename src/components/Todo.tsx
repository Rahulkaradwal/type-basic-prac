import React from 'react';
import TodoClass from '../models/Todo';

const Todo: React.FC<{ item: TodoClass[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.item.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
