# Task Management API
A simple RESTful Task Management API built with Express.js. This project provides a basic in-memory CRUD (Create, Read, Update, and Delete) API for managing various tasks.

## Features
- List all tasks
- View a specific task by ID
- Create a new task
- Update an existing task
- Delete a task
- Logs incoming HTTP requests
- Validates task creation input

## Installation
Clone the repository:
```bash
git clone https://github.com/gh-aam/task-management-api.git
```
Go to project directory:
```bash
cd task-management-api
```
Install dependencies:
```bash
npm install
```

## Usage
Start the server:
```bash
npm start
```
Or start in development mode (with hot-reloading via `nodemon`):
```bash
npm run dev
```
The server will start on [http://localhost:3000](http://localhost:3000).

## API Endpoints
`GET /` - Welcome message   
`GET /tasks` - Returns a list of all tasks   
`GET /tasks/:id` - Returns a task by ID   
`POST /tasks` - Creates a new task (Requires a JSON body)
```json
{
  "title": "New Task",
  "completed": false
}
```
`PUT /tasks/:id` - Updates an existing task by ID (Requires a JSON body)
```json
{
  "completed": true
}
```
`DELETE /tasks/:id` - Deletes a task by ID