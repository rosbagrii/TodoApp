import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import type { Todo } from './types/Todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, checked: false }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className='container'>
      <Header text='Meine Aufgaben' />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
    </div>
  )
}

export default App
