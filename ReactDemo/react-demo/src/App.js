import './App.css';
import React, { useState } from 'react';
import DemoTable from './components/DemoTable';

function App() {

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Learn React", rowAssigned: "Rey" },
    { rowNumber: 2, rowDescription: "Go to Gym", rowAssigned: "Rohito" }

  ])

  const addItem = () => {
    if (todos.length > 0) {
      const newItem = {
        rowNumber: todos.length + 1,
        rowDescription: "",
        rowAssigned: "Ronnie"

      };
      setTodos(todos=>[...todos,newItem])
    }

  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className="card-header">
          Your ToDOs
        </div>
        <div className="card-body">
          <DemoTable todos={todos} />
        <button className="btn btn-primary" onClick={addItem}>Add New Item</button>
        </div>
      </div>

    </div>

  );
}

export default App;
