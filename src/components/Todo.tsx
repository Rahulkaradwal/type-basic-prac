import React from 'react';
import TodoClass from '../models/Todo';
import ListItem from './ListItem';

const Todo: React.FC<{
  item: TodoClass[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.item.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todo;
