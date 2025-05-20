# Task Management App - Backend

## Overview

This is the backend API for the Task Management App. It provides CRUD operations for tasks, supports pagination, and real-time updates using WebSockets (Socket.IO). The backend is built using Node.js, Express, and MongoDB with Mongoose.

---

## Live Links

- Frontend (Client) URL: [https://task-management-client-gray.vercel.app/](https://task-management-client-gray.vercel.app/)
- Backend API URL: [https://task-management-server-production-faae.up.railway.app/](https://task-management-server-production-faae.up.railway.app/)

---

## Features

- Create, read, update, and delete tasks
- Pagination support for listing tasks (5 per page)
- Real-time updates for task creation and status updates using Socket.IO
- Basic environment-based configuration for flexibility
- Promise-based API handling with async/await

---

## Tech Stack

- **Node.js** — JavaScript runtime for backend
- **Express.js** — Web framework for building RESTful APIs
- **MongoDB with Mongoose** — NoSQL database and ORM for data modeling
- **Socket.IO** — Real-time bidirectional communication for live task updates
- **dotenv** — Environment variable management
- **TypeScript** — Typed JavaScript for better developer experience and fewer runtime errors

---

## Setup Instructions

### Backend Setup

1. **Clone the repository and navigate to the backend folder:**

   ```bash
   git clone <your-repo-url>
   cd <repo-folder>/backend

2. **Install backend dependencies:**
    ```npm install

3. **Create a .env file in the backend folder and add the following environment variables:**
    ``` NODE_ENV=development
    PORT=5000
    DATABASE_URL=database link


## API Endpoints

The backend exposes the following RESTful API routes for managing tasks:

| HTTP Method | Endpoint                | Description                          |
|-------------|-------------------------|------------------------------------|
| `POST`      | `api/task/`                     | Create a new task                  |
| `GET`       | `api/task/alltasks`             | Retrieve a paginated list of tasks |
| `GET`       | `api/task/taskdetails/:taskId`  | Get details of a single task       |
| `PATCH`     | `api/task/taskstatus/:taskId`   | Update task status (toggle completed/pending) |
| `DELETE`    | `api/task/:taskId`              | Delete a task           |

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
