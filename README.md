# Orufy Full Stack Assignment

## Product Management Dashboard

A full-stack product management dashboard built using the MERN stack. The application allows administrators to manage products through a modern dashboard interface with authentication, product CRUD operations, filtering, search, and publishing controls.

---

## Features

### Authentication

* Mobile Number Login
* OTP Verification
* Protected Dashboard Access

### Dashboard

* Dynamic Product Statistics
* Total Products Count
* Published Products Count
* Unpublished Products Count

### Product Management

* Add Product
* Edit Product
* Delete Product
* Publish Product
* Unpublish Product
* Search Products
* Product Status Filters

### UI Features

* Modern Dashboard Layout
* Responsive Design
* Sidebar Navigation
* Professional Admin Interface
* Empty State Handling

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Render (Backend)
* Vercel (Frontend)

---

## Project Structure

orufy-fullstack-assignment/

├── client/

│ ├── src/

│ ├── components/

│ ├── pages/

│ └── services/

│

├── server/

│ ├── config/

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ └── server.js

│

└── README.md

---

## Installation

### Clone Repository

```bash
git clone https://github.com/NikitaPpareek/orufy-fullstack-assignment.git
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server directory.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

---

## API Endpoints

### Products

```http
GET /api/products
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
PATCH /api/products/:id/publish
PATCH /api/products/:id/unpublish
```

---

## Author

Nikita Pareek

B.Tech Student | MERN Stack Developer

GitHub:
https://github.com/NikitaPpareek
