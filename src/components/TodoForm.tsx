import { useContext, useRef } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoForm: React.FC = () => {
  const todoInput = useRef<HTMLInputElement>(null);

  const ctxVal = useContext(TodoContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInput.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }
    ctxVal.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" ref={todoInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default TodoForm;
