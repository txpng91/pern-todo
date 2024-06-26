import React, { Fragment, useState } from 'react';
import TodoList from './TodoList';

function InputTask() {
  const [description, setDescription] = useState('');

  // Send task to the database
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        description,
      };

      // https://todo-list-demo.herokuapp.com/todos
      const res = await fetch('/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className='text-center mt-5'>Input Todo</h1>
      <form className='d-flex mt-5' onSubmit={submitForm}>
        <input
          type='text'
          value={description}
          className='form-control'
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Add Todo'
        />
        <button type='submit' className='btn btn-success'>
          Add
        </button>
      </form>
    </Fragment>
  );
}

export default InputTask;
