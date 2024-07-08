import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { TodoContextProvider } from './context/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div>
        <TodoForm />
        <Todo />
      </div>
    </TodoContextProvider>
  );
}

export default App;
