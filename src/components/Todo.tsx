import React from 'react';
import TodoClass from '../models/Todo';
import ListItem from './ListItem';

const Todo: React.FC<{ item: TodoClass[] }> = (props) => {
  return (
    <ul>
      {props.item.map((item) => (
        <ListItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todo;
