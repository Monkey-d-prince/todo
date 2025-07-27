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

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
