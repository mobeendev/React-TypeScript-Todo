import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
  {
    text: 'Some Event',
    complete: false,
  },
  {
    text: 'Go to bazar',
    complete: true,
  },
];

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;

}

export default App;