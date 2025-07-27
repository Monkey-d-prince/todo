import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todos } from './components/Todos'
import React, { useState,useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  // fetch('http://localhost:3000/todos')
  //   .then(async function(res) {
  //     const data = await res.json()
  //     if (res.status === 200) {
  //       setTodos(data.data)
  //     }
  //   })

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTodos(data.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const handleMarkCompleted = async (id) => {
    try {
      const response = await fetch('http://localhost:3000/completed', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        setTodos(todos =>
          todos.map(todo =>
            todo._id === id ? { ...todo, completed: true } : todo
          )
        );
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };


  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} onMarkCompleted={handleMarkCompleted}/>
    </div>
  )
}

export default App
