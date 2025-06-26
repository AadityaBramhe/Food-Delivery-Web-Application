# 🍔 Food Delivery Web Application

A full-stack food delivery web application built with **React.js**, **Node.js**, **Express**, and **MongoDB**, featuring a separate **Admin Panel** to manage orders, products, and users.

---

## 📂 Project Structure

Food-Delivery-Web-Application/
├── backend/ # Express + MongoDB backend API
├── frontend/ # User-facing React app
└── admin/ # Admin panel React app


---

## 🚀 Features

### 👤 User Side (Frontend)
- Browse available food items
- Add to cart and place orders
- Track order status
- Login/Signup system

### 🛠️ Admin Panel
- Add, edit, delete food items
- View and manage orders
- See user order history

### 🔧 Backend
- RESTful API (Node.js + Express)
- MongoDB database integration
- JWT-based authentication
- Stripe payment gateway (test mode)

---

## ⚙️ Tech Stack

| Frontend | Backend | Admin Panel | Database |
|----------|---------|-------------|----------|
| React.js | Node.js | React.js    | MongoDB  |
| Vite     | Express | Vite        | Mongoose |

---

## 📦 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/AadityaBramhe/Food-Delivery-Web-Application.git
cd Food-Delivery-Web-Application

2. Setup Backend
bash
Copy
Edit
cd backend
npm install
# Create a .env file using .env.example
npm run dev

3. Setup Frontend (User App)
bash
Copy
Edit
cd ../frontend
npm install
npm run dev

4. Setup Admin Panel
bash
Copy
Edit
cd ../admin
npm install
npm run dev
