const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); // Allows requests from client

/*API routes*/

// Create
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todos (description) VALUES ($1) RETURNING *;',
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Get all
app.get('/todos', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM todos;');
    res.json(data.rows);
  } catch (error) {
    console.error(error.messege);
  }
});

// Get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Update
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const todoUpdated = await pool.query(
      'UPDATE todos SET description = $1 WHERE id = $2;',
      [description, id]
    );
    res.json('todo was updated!');
  } catch (error) {
    console.error(error.message);
  }
});

// Delete
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query('DELETE FROM todos WHERE id = $1', [
      id,
    ]);
    res.json('todo was deleted...');
  } catch (error) {
    console.error(error.message);
  }
});

// Listen
app.listen(5000, () => {
  console.log('Server has started on port 5000.');
});
