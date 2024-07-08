import { useRef } from 'react';

const TodoForm: React.FC<{
  onAddTodo: (text: string) => void;
}> = (props) => {
  const todoInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInput.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
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
