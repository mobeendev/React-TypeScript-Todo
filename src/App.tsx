import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

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

  const addTodo = (newItem: string) => {
    const updatedTodos = { text: newItem, complete: false };
    setTodos([...todos, updatedTodos]);

  };

  return (
    <React.Fragment>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />;
    </React.Fragment>

  )

}

export default App;