const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory data store (array) for tasks
let tasks = [
  { id: 1, title: "Learn Express.js", completed: false },
  { id: 2, title: "Build a RESTful API", completed: true },
  { id: 3, title: "Develop a Express.js Server", completed: false },
];

// GET /tasks: Retrieve a list of all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id: Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);
  
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// POST /tasks: Create a new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
    title: req.body.title,
    completed: req.body.completed || false
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id: Update an existing task
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body, id: taskId };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// DELETE /tasks/:id: Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.listen(port, () => {
  console.log(`Task Management API listening on port ${port}`);
});