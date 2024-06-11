import React, { Fragment } from 'react';
import './App.css';

// Components
import InputTask from './components/InputTask';
import TodoList from './components/TodoList';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTask />
        <TodoList />
      </div>
    </Fragment>
  );
}

export default App;
