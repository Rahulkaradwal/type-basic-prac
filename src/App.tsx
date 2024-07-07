import Todo from './components/Todo';
import TodoClass from './models/Todo';

function App() {
  const todo = [
    new TodoClass('Learn React'),
    new TodoClass('Type script'),
    new TodoClass('NodeJS'),
  ];

  return <Todo item={todo} />;
}

export default App;
