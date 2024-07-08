import React, { useContext } from 'react';
import ListItem from './ListItem';
import { TodoContext } from '../context/TodoContext';

const Todo: React.FC = () => {
  const ctxVal = useContext(TodoContext);
  return (
    <ul>
      {ctxVal.items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctxVal.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todo;
