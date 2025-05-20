# Task Management App - Backend

## Overview

This is the backend API for the Task Management App. It provides CRUD operations for tasks, supports pagination, and real-time updates using WebSockets (Socket.IO). The backend is built using Node.js, Express, and MongoDB with Mongoose.

---

## Link
Live Link: https://task-management-client-gray.vercel.app/
api link: https://task-management-server-production-faae.up.railway.app/

## Features

- Create, read, update, and delete tasks
- Pagination support for listing tasks
- Real-time updates for task creation and updates using Socket.IO
- Basic environment-based configuration for flexibility

---

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO for real-time communication
- dotenv for environment variable management
- TypeScript

---

## API Endpoints

The backend exposes the following RESTful API routes for managing tasks:

| HTTP Method | Endpoint                | Description                          |
|-------------|-------------------------|------------------------------------|
| `POST`      | `api/task/`                     | Create a new task                  |
| `GET`       | `api/task/alltasks`             | Retrieve a paginated list of tasks |
| `GET`       | `api/task/taskdetails/:taskId`  | Get details of a single task       |
| `PATCH`     | `api/task/taskstatus/:taskId`   | Update task status (toggle completed/pending) |
| `DELETE`    | `api/task/:taskId`              | Delete a task (optional)            |

### Route Details

- **POST /**  
  Create a new task by sending task data (title, description, due date) in the request body.

- **GET /alltasks**  
  Fetch paginated tasks with a default of 5 tasks per page.

- **GET /taskdetails/:taskId**  
  Fetch detailed information for a specific task by providing the task ID in the URL.

- **PATCH /taskstatus/:taskId**  
  Update the completion status of a specific task identified by its ID.

- **DELETE /:taskId**  
  Remove a task from the database by its ID. (Optional feature)

---
