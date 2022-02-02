import React, {useState } from 'react';
import './App.css';

function App() {
  // crear una tarea
  const [task, setTask] = useState('');
  //  Agregar nuevas tareas
  const [tasks, setTasks] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...task, task]);
  };

  return (
    <div className='Container'>
      <h1>Task Basic</h1>
      <form onSubmit = {submitHandler}>
        <input
          type="text"
          placeholder='Ingrese una tarea'
          value={task}
          onChange={(e) => setTask(e.target.value)} />
      </form>
      <div className='task-container'>
        {task.map((items, index) => (
          <div key={index} className='task-card'>
            {items}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
