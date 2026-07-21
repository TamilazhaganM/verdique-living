# 🌿 Verdique Living

A production-ready **Full Stack MERN E-Commerce Platform** built for indoor and outdoor plant shopping. The application includes secure authentication, an admin dashboard, product management, and a responsive user experience.

---

## 🚀 Live Demo

**Frontend**

https://verdique-living.vercel.app

**Backend API**

https://verdique-living.onrender.com

---

## ✨ Features

### User

- User Registration
- Login & Logout
- JWT Authentication
- Email Verification
- Browse Products
- Product Search
- Category Filtering
- Sorting
- Pagination
- Responsive Design

### Admin

- Admin Dashboard
- Manage Products
- Manage Categories
- Manage Users
- Manage Orders
- Protected Routes
- Role-Based Authorization

---

## 🛠 Tech Stack

### Frontend

- React.js
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Nodemailer

### Database

- MongoDB Atlas
- Mongoose

### Deployment

- Vercel
- Render

---

## 📂 Project Structure

```
Verdique-Living
│
├── Apps
│   ├── Client
│   │
│   └── Server
│
├── README.md
└── .gitignore
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/TamilazhaganM/verdique-living.git
```

### Frontend

```bash
cd Apps/Client

npm install

npm run dev
```

### Backend

```bash
cd Apps/Server

npm install

npm start
```

---

## 🔑 Environment Variables

Create `.env`

```
PORT=

MONGODB_URL=

JWT_SECRET=

EMAIL_USER=

EMAIL_PASS=
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout
```

### Products

```
GET /api/products

GET /api/products/:id

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id
```

### Categories

```
GET /api/category

POST /api/category
```

---

## 🎯 Future Enhancements

- Payment Gateway (Razorpay/Stripe)
- Wishlist
- Product Reviews
- Order Tracking
- Cloudinary Image Upload
- Sales Analytics
- Coupon System

---

## 👨‍💻 Author

**Tamilazhagan M**

- GitHub: https://github.com/TamilazhaganM
- LinkedIn: https://www.linkedin.com/in/tamilazhaganm/
