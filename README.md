# 📝 Full Stack Task Manager App

A full-stack Task Manager web application built using **MERN stack (MongoDB, Express, React, Node.js)** with JWT authentication and deployed on cloud platforms.

---

## 🔗 Live Demo

👉 Frontend (Vercel):  
https://your-vercel-app-link.vercel.app

👉 Backend (Render):  
https://task-backend-rfhc.onrender.com

---

## ⚙️ Tech Stack

### Frontend:
- React.js
- React Router
- Fetch API

### Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt.js

---

## 🚀 Features

- User Signup & Login
- JWT Authentication
- Add Tasks
- View Tasks
- Delete Tasks
- Protected Routes
- Secure API integration
- Responsive UI

---

## 📸 Screenshots

### 👤 SignUp Page
![SignUp]([https://your-github-link/login.pn](https://github.com/SonyDasari666/fullstack-task-manager/blob/main/SIGNUP.png)
### 🔐 Login Page
![Login]([https://your-github-link/login.png](https://github.com/SonyDasari666/fullstack-task-manager/blob/main/LOGIN.png)

### 🏠 Dashboard
![Dashboard]([https://your-github-link/dashboard.png](https://github.com/SonyDasari666/fullstack-task-manager/blob/main/Dashboard.png)

### 📝 Tasks Page
![Tasks]([https://your-github-link/tasks.png](https://github.com/SonyDasari666/fullstack-task-manager/blob/main/TaskManager.png)

## 📁 Project Structure

fullstack-task-app/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── middleware/
│
└── frontend/
    ├── src/
    ├── pages/
    └── components/

---

## 🔐 Authentication Flow

1. User signs up  
2. Password is hashed using bcrypt  
3. JWT token is generated  
4. Token stored in localStorage  
5. Protected routes accessed using token  

---

## 🛠️ Setup Instructions

### Backend
```bash
cd backend
npm install
node server.js
