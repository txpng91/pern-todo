import React, { Fragment, useState, useEffect } from 'react';
import EditTask from './EditTask';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Get tasks
  const getTodos = async () => {
    try {
      const res = await fetch('http://localhost:5000/todos');
      const todos = await res.json();
      setTodos(todos);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Delete task
  const removeTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  // Get effects of the state
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            /* Destructure todos */
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>
                  <EditTask todo={todo} />
                </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => removeTask(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Fragment>
  );
}

export default TodoList;
