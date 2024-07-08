import { useState } from 'react';
import Todo from './components/Todo';
import TodoClass from './models/Todo';
import TodoForm from './components/TodoForm';

function App() {
  // const todo = [
  //   new TodoClass('Learn React'),
  //   new TodoClass('Type script'),
  //   new TodoClass('NodeJS'),
  // ];

  const [todos, setTodos] = useState<TodoClass[]>([]);

  const addTotoHandler = (todoText: string) => {
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

  return (
    <div>
      <TodoForm onAddTodo={addTotoHandler} />
      <Todo item={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
