import React, { useState } from 'react';
import TodoClass from '../models/Todo';

type TodosContextObj = {
  items: TodoClass[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  const addTodoHandler = (todoText: string) => {
    // Corrected function name here
    const newTodo = new TodoClass(todoText);
    setTodos((preVal) => {
      return preVal.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((preVal) => {
      return preVal.filter((val) => val.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler, // Corrected function name here
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
