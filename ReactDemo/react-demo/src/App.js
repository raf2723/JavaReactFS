import './App.css';
import React, { useState } from 'react';
import DemoTable from './components/DemoTable';
import NewItemForm from './components/NewItemForm';

function App() {

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Learn React", rowAssigned: "Rey" },
    { rowNumber: 2, rowDescription: "Go to Gym", rowAssigned: "Rohito" }

  ])

  const [showForm,setShowForm] = useState(false);

  const addItem = (description,assigned) => {
    if (todos.length > 0) {
      const newItem = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned

      };
      setTodos(todos => [...todos, newItem])
    }

  }

  const deleteItem = (rowNumber) => {

    if (window.confirm("delete")) {
      let filtered = todos.filter(function(value){
        return value.rowNumber!== rowNumber
      });
      setTodos(filtered);
    }

  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className="card-header">
          Your ToDOs
        </div>
        <div className="card-body">
          <DemoTable todos={todos} deleteItem={deleteItem} />
          <button className="btn btn-primary" onClick={()=> setShowForm(!showForm)}>
            {showForm?'Close Form':'Add Item'}</button>

          {showForm &&
          <NewItemForm addItem={addItem} />
          }
        </div>
      </div>

    </div>

  );
}

export default App;
